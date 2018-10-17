declare module 'api/declare-data' {

  type Path = (string|number)[];

  export function declareData(
    name: string,
    dependencies: ({
      type: 'localData' | 'hostData' | 'data',
      path: Path
    })[],
    transformFunction: Function
  ): void;

  export function declareData(
    name: string,
    transformFunction: Function
  ): void;

  export function declareDataFromLocal(
    transformationName: string,
    localDataPath?: Path
  ): void;

  export function declareDataFromHost(
    transformationName: string,
    hostDataPath?: Path
  ): void;

}
