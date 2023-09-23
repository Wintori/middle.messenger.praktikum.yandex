import { TRouteConstructor } from "./PathRouter"

export interface CoreRouter {
    start(): void
  
    use(options: TRouteConstructor): CoreRouter
  
    go(path: string): void
  
    back(): void
  
    forward(): void
  }
