declare module 'api/host' {
  export function showHostView(hostName: string): Promise<void>;
  export function hideHostView(): Promise<void>;
  export function startHost(hostName: string, url?: string): Promise<void>;
  export function stopHost(hostName: string): Promise<void>;
  export function navigateHost(hostName: string, url: string): Promise<void>;
  export function navigateHostBack(hostName: string): Promise<void>;
  export function navigateHostForward(hostName: string): Promise<void>;
  export function reloadHost(hostName: string): Promise<void>;
}
