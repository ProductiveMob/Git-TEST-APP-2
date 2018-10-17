declare module 'api/declare-macro' {

  export function declareMacro<T extends Function>(
    macroName: string,
    macroFunction: T
  ): T;

}
