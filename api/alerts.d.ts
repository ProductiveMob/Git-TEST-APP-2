declare module 'api/alerts' {

  export interface AlertResponse {
    actionId: string
  }

  export interface AlertOptions {
    title: string,
    message: string,
    actions?: AlertAction[]
  }

  export interface AlertAction {
    id: string,
    title: string,
    isEnabled?: boolean,
    isDefaultAction?: boolean,
    isCancelAction?: boolean,
    isDestructiveAction?: boolean
  }

  export function showAlert(params: AlertOptions): Promise<AlertResponse>;
}
