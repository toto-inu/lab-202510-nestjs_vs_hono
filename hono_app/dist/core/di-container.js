export class DIContainer {
    static instance;
    providers = new Map();
    instances = new Map();
    dependencies = new Map();
    constructor() { }
    static getInstance() {
        if (!DIContainer.instance) {
            DIContainer.instance = new DIContainer();
        }
        return DIContainer.instance;
    }
    register(token, provider, deps = []) {
        this.providers.set(token, provider);
        this.dependencies.set(token, deps);
    }
    resolve(token) {
        // すでにインスタンスがあれば返す（シングルトン）
        if (this.instances.has(token)) {
            return this.instances.get(token);
        }
        const provider = this.providers.get(token);
        if (!provider) {
            throw new Error(`Provider not found for token: ${token}`);
        }
        // 依存関係を解決
        const deps = this.dependencies.get(token) || [];
        const resolvedDeps = deps.map(dep => this.resolve(dep));
        // インスタンスを作成
        const instance = new provider(...resolvedDeps);
        this.instances.set(token, instance);
        return instance;
    }
    clear() {
        this.providers.clear();
        this.instances.clear();
        this.dependencies.clear();
    }
}
export const container = DIContainer.getInstance();
