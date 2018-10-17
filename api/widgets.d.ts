declare module 'api/widgets' {
  export type ScreenId = string;
  export type DialogId = string;
  export type FormId = string;

  export const screen: {
    show(screenId: ScreenId): void;
    showByName(screenName: string): void;
  };

  export const dialog: {
    show(dialogId: DialogId): void;
    showByName(dialogName: string): void;
    hide(dialogId: DialogId): void;
    hideActiveDialog(): void;
  };

  export const form: {
    submit(formId: FormId): void;
  };

  export function scrollAllWidgetToTop(): void;

  export function hideKeyboard(): void;
}
