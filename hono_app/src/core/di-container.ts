type Constructor<T = any> = new (...args: any[]) => T

export class DIContainer {
  private static instance: DIContainer
  private providers = new Map<string, Constructor>()
  private instances = new Map<string, any>()
  private dependencies = new Map<string, string[]>()

  private constructor() {}

  static getInstance(): DIContainer {
    if (!DIContainer.instance) {
      DIContainer.instance = new DIContainer()
    }
    return DIContainer.instance
  }

  register<T>(token: string, provider: Constructor<T>, deps: string[] = []): void {
    this.providers.set(token, provider)
    this.dependencies.set(token, deps)
  }

  resolve<T>(token: string): T {
    // すでにインスタンスがあれば返す（シングルトン）
    if (this.instances.has(token)) {
      return this.instances.get(token)
    }

    const provider = this.providers.get(token)
    if (!provider) {
      throw new Error(`Provider not found for token: ${token}`)
    }

    // 依存関係を解決
    const deps = this.dependencies.get(token) || []
    const resolvedDeps = deps.map(dep => this.resolve(dep))

    // インスタンスを作成
    const instance = new provider(...resolvedDeps)
    this.instances.set(token, instance)

    return instance
  }

  clear(): void {
    this.providers.clear()
    this.instances.clear()
    this.dependencies.clear()
  }
}

export const container = DIContainer.getInstance()
