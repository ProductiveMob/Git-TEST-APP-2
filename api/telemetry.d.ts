declare module 'api/telemetry' {

  export interface TelemetryOptions {
    eventAction: string;
    eventValue?: number;
  }

  export function sendEvent(params: TelemetryOptions): Promise<void>;
}
