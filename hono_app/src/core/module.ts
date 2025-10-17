import { container } from './di-container'

type Constructor<T = any> = new (...args: any[]) => T

export interface ModuleMetadata {
  providers?: Array<{
    token: string
    useClass: Constructor
    deps?: string[]
  }>
  imports?: ModuleMetadata[]
  exports?: string[]
}

export function Module(metadata: ModuleMetadata) {
  return function <T extends Constructor>(target: T) {
    // インポートされたモジュールを先に登録
    if (metadata.imports) {
      metadata.imports.forEach(importedModule => {
        if (importedModule.providers) {
          importedModule.providers.forEach(provider => {
            container.register(provider.token, provider.useClass, provider.deps || [])
          })
        }
      })
    }

    // 自身のプロバイダーを登録
    if (metadata.providers) {
      metadata.providers.forEach(provider => {
        container.register(provider.token, provider.useClass, provider.deps || [])
      })
    }

    return target
  }
}

export function Injectable() {
  return function <T extends Constructor>(target: T) {
    return target
  }
}
