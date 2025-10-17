import type { Container } from 'inversify'

export const TYPES = {
  UserService: Symbol.for('UserService'),
  PostService: Symbol.for('PostService'),
  SlackService: Symbol.for('SlackService'),
}

export interface HonoEnv {
  Bindings: {}
  Variables: {
    container: Container
  }
}
