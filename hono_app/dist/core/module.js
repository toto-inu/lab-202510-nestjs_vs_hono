import { container } from './di-container.js';
export function Module(metadata) {
    return function (target) {
        // インポートされたモジュールを先に登録
        if (metadata.imports) {
            metadata.imports.forEach(importedModule => {
                if (importedModule.providers) {
                    importedModule.providers.forEach(provider => {
                        container.register(provider.token, provider.useClass, provider.deps || []);
                    });
                }
            });
        }
        // 自身のプロバイダーを登録
        if (metadata.providers) {
            metadata.providers.forEach(provider => {
                container.register(provider.token, provider.useClass, provider.deps || []);
            });
        }
        return target;
    };
}
export function Injectable() {
    return function (target) {
        return target;
    };
}
