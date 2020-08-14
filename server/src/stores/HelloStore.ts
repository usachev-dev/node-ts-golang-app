export interface HelloStore {
  getHello: () => Promise<string>;
  setHello: (hello: string) => Promise<void>;
}

export class HelloStoreMemory implements HelloStore {
  constructor(defaultHello: string) {
    this.hello = defaultHello;
  }

  private hello: string;

  public getHello(): Promise<string> {
    return new Promise<string>((res, rej) => {
      res(this.hello);
    });
  }

  public setHello(hello: string): Promise<void> {
    this.hello = hello;
    return new Promise<void>((res, rej) => res());
  }
}
