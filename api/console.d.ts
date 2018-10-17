interface Console {
  log(message?: any, ...optionalParams: any[]): void;
  error(message?: any, ...optionalParams: any[]): void;
}

// This object is globally available.
// No need to import anything from this file.
declare const console: Console;
