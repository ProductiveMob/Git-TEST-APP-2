declare module 'api/test' {
  interface SuiteDefinition {
    (suiteFunction: SuiteFunction): any;
    (suiteName: string, suiteFunction: SuiteFunction): any;

    only(suiteFunction: SuiteFunction): any;
    only(suiteName: string, suiteFunction: SuiteFunction): any;

    skip(suiteFunction: SuiteFunction): any;
    skip(suiteName: string, suiteFunction: SuiteFunction): any;
  }

  interface TestDefinition {
    (testFunction: TestFunction): any;
    (testName: string, testFunction: TestFunction): any;

    only(testFunction: TestFunction): any;
    only(testName: string, testFunction: TestFunction): any;

    skip(testFunction: TestFunction): any;
    skip(testName: string, testFunction: TestFunction): any;
  }

  type ConditionFunction = (
    value: any,
    previousValue: any,
    initialValue: any
  ) => boolean|undefined;

  interface WidgetSelectorInterface {
    find: (widgetName: string) => WidgetSelectorInterface;
    item: (repeatItemIndex: number) => WidgetSelectorInterface;
    area: (areaName: WidgetAreaName) => WidgetSelectorInterface;

    // - is checks if widget is rendered and user can interact with it or not
    isAccessible: () => Promise<boolean>;

    // - waits for a widget to be accessible
    waitUntilAccessible: (timeout: number) => Promise<void>;

    // - waits for a widget to be no longer accessible
    waitUntilNotAccessible: (timeout: number) => Promise<void>;

    // - waits for a widget to be accessible
    // - returns value, which widget receives (casted to the expected type)
    getPropertyValue: (propertyName: string) => Promise<any>;

    // - waits for a widget to be accessible
    // - resolves promise when the property value changes
    waitUntilPropertyChange: (
      propertyName: string,
      timeout?: number
    ) => Promise<void>;

    // - waits for a widget to be accessible
    // - resolves promise when property is deep equal to value
    waitUntilPropertyValue: (
      propertyName: string,
      value: any,
      timeout?: number
    ) => Promise<void>;

    // - waits for a widget to be accessible
    // - resolves promise when matcher function returns true
    waitUntilPropertyMatch: (
      propertyName: string,
      matcher: ConditionFunction,
      timeout?: number
    ) => Promise<void>;

    // - waits for a widget to be accessible
    // - returns value, which widget propbox receives (casted to the expected type)
    getPropBoxPropertyValue: (propBoxName: string, propertyName: string) => Promise<any>;

    // - waits for a widget to be accessible
    // - resolves promise when the property value changes
    waitUntilPropBoxPropertyChange: (
      propBoxName: string,
      propertyName: string,
      timeout?: number
    ) => Promise<void>;

    // - waits for a widget to be accessible
    // - resolves promise when property is deep equal to value
    waitUntilPropBoxPropertyValue: (
      propBoxName: string,
      propertyName: string,
      value: any,
      timeout?: number
    ) => Promise<void>;

    // - waits for a widget to be accessible
    // - resolves promise when matcher function returns true
    waitUntilPropBoxPropertyMatch: (
      propBoxName: string,
      propertyName: string,
      matcher: ConditionFunction,
      timeout?: number
    ) => Promise<void>;

    // - waits for a widget to be accessible
    // - scrolls it into view
    scrollIntoView: () => Promise<void>;

    // - waits for a widget to be accessible
    // - scrolls it into view
    // - takes screenshot of widget area
    assertScreenshot: (screenshotName: string) => Promise<void>;

    // - waits for a widget to be accessible
    // - scrolls it into view
    // - simulates native tap or click dom event depending on the environment
    tap: (item?: number|string) => Promise<void>;

    // - waits for a widget to be accessible
    // - scrolls it into view
    // - simulates input submit
    submit: () => Promise<void>;

    // - waits for a widget to be accessible
    // - scrolls it into view
    // - clears input
    // - simulates input key by key
    text: (inputValue: string) => Promise<void>;
  }

  export function find(widgetName: string): WidgetSelectorInterface;
  export const describe: SuiteDefinition;
  export const it: TestDefinition;
  export function before(lifecycleHookFunction: TestFunction): void;
  export function beforeEach(lifecycleHookFunction: TestFunction): void;
  export function after(lifecycleHookFunction: TestFunction): void;
  export function afterEach(lifecycleHookFunction: TestFunction): void;

  // - resets widgets state
  // - resets local data
  // - sets initial screen
  // - sets initial url
  // - reloads host page
  // - triggers "Application Start" event
  export function resetApplication(): Promise<void>;

  // - cleans all the cookies of host webviews
  // - cleans localStorage, sessionStorage and other storages of host webviews
  export function cleanCookiesAndStorage(): Promise<void>;
  export function log(...args: any[]): void;
  export function assert(value: any, message?: string): void;
}
