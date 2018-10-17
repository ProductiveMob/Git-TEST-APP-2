declare module 'api/bundle' {
  export function getBundlePayload(): Promise<object|null>;

  // It verifies that application was opened from bundle
  export function isBundledApplication(): Promise<boolean>;

  // You can use payload to pass arguments to the target app
  // Please not that any functions will be removed from the payload
  export function openApplication(applicationIdentifier: string, payload?: object|null): Promise<void>;
}
