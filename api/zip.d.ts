declare module 'api/zip' {
  export function zip(
    filename: string,
    destname: string
  ): Promise<void>;

  export function unzip(
    filename: string,
    destname: string
  ): Promise<void>;
}
