declare module 'api/declare-provider' {

  export function declareProvider(
    providerName: string,
    providerDefinition: ProviderDefinition
  ): void;

  export interface ProviderDefinition {
    canMount: ProviderMethod<boolean>;
    extractData: ProviderMethod<any>;
    getDependencies: ProviderMethod<ProviderDependency[]>;
    trigger?: ProviderTriggerMethod;
    getOptionsSchema?(): ProviderOptionsSchemaItem[];
    getDefaultOptions?(): object;
  }

  export type ProviderDependency = {
    source: string;
    data?: string;
    permanent?: boolean;
    scope?: string;
    selector?: string;
  };

  export type ProviderOptionsSchemaItem = (
    {
      _id: string;
      name: string;
    } &
    (
      {type: 'string'} |
      {type: 'boolean'} |
      {type: 'string-list'} |
      {type: 'string-pairs'} |
      {
        type: 'select';
        items: {
          _id: string;
          name: string;
          default: boolean;
        }[];
      }
    )
  );

  export type ProviderAction = (
    {type: 'CLICK', selector?: string} |
    {type: 'CHANGE', value: any} |
    {type: 'FOCUS'} |
    {type: 'BLUR'} |
    {type: 'SUBMIT'} |
    {type: 'CLEAR'}
  );

  type ProviderOptions = {
    dataKeyPath: (string|number)[];
  };

  type ProviderMethod<T> = (
    ((element: Element, options: ProviderOptions & {[s: string]: any}) => T) |
    ((element: Element) => T) |
    (() => T)
  );

  type ProviderTriggerMethod = (
    (
      (
        element: Element,
        action: ProviderAction,
        options: ProviderOptions & {[s: string]: any}
      ) => void
    ) |
    ((element: Element, action: ProviderAction) => void) |
    ((element: Element) => void) |
    (() => void)
  );
}
