interface Dog {
  url: string
}

interface State {
  stats: {
    count: number
    clicks: number
  }
  greeting: string
  user: {
    name?: string
    title?: string
  }
  note: string
  dogs: Dog[]
}

type Actions<T extends { [x: string]: (...args: any[]) => any }> = ReturnType<T[keyof T]>

type ActionFF = <T extends string, P>(type: T, params: P) => { type: T } & P 