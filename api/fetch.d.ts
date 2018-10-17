declare module 'api/fetch' {

  type Headers = {
    [key: string]: string
  };

  interface RequestInit {
    method?: string;
    headers?: Headers;
    body?: string;
  }

  interface Response {
    url: string;
    status: number;
    ok: boolean;
    statusText: string;
    headers: Headers;

    json(): Promise<any>;
    json<T>(): Promise<T>;
    text(): Promise<string>;
  }

  // Known limitations:
  // - Cookies are always passed
  export function fetch(url: string, init?: RequestInit): Promise<Response>;
}
