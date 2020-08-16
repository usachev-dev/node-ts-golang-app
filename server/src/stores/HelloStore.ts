import axios, {AxiosResponse} from "axios";

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

export class HelloStoreApi implements HelloStore {
  constructor(private apiUrl: string) {}

  private get<T>(endpoint: string): Promise<T> {
    console.log(`getting hello from ${this.apiUrl}/${endpoint}`)
    return axios.get(`${this.apiUrl}/${endpoint}`).then(r => r.data)
  }

  private post<T, R>(endpoint: string, body: T): Promise<R> {
    return axios.post(`${this.apiUrl}/${endpoint}`).then(r => r.data)
  }

  public getHello(): Promise<string> {
    return this.get<string>('hello');
  }

  public setHello(hello: string): Promise<void> {
    return this.post<string, void>('hello', hello);
  }
}
