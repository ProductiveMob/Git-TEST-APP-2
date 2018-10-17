declare module 'api/files' {
  type FileInfo = {
    updatedAt: number;
    filename: string;
    filePath: string;
    size: number;
    isFile: boolean;
    isDirectory: boolean;
  };

  type FileEncoding = 'utf8' | 'base64' | 'ascii';

  type ProvideFileResult = {
    status: 'saved' | 'cancelled'
  };

  export function listFiles(basePath?: string): Promise<FileInfo[]>;

  export function getFileInfo(filename: string): Promise<FileInfo>;

  // Behaves as mkdir -p
  export function createDirectory(
    pathname: string
  ): Promise<void>;

  export function writeFile(
    filename: string,
    contents: string,
    encoding: FileEncoding
  ): Promise<void>;

  export function appendFile(
    filename: string,
    contents: string,
    encoding: FileEncoding
  ): Promise<void>;

  export function readFile(
    filename: string,
    encoding: FileEncoding
  ): Promise<string>;

  // Throws error if destname exists
  export function moveFile(
    filename: string,
    destname: string
  ): Promise<void>;

  // Throws error if destname exists
  export function copyFile(
    filename: string,
    destname: string
  ): Promise<void>;

  export function deleteFile(
    filename: string
  ): Promise<void>;

  export function requestFile(): Promise<FileInfo>;
  export function requestPhoto(): Promise<FileInfo>;

  // known issue on Android: result is immediately returned as {status: 'saved'}
  export function provideFile(
    filename: string,
    asFilename?: string
  ): Promise<ProvideFileResult>;

  type DownloadFileOptions = {
    fromUrl: string;
    toFile: string;
    headers?: {
      [headerName: string]: string
    }
  };

  // It throws error if toFile exists
  // It does not handle Cookies automatically
  export function downloadFile(
    options: DownloadFileOptions
  ): Promise<FileInfo>;
}
