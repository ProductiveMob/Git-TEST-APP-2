declare module 'api/data' {

  type Path = (string|number)[];

  type ConditionFunction = (
    value: any,
    previousValue: any,
    initialValue: any
  ) => boolean|undefined;

  export interface ReadonlyDataInterface {
    get(path: Path): any;

    waitForDataMatch(
      path: Path,
      match: ConditionFunction,
      timeout?: number
    ): Promise<void>;

    waitForDataChange(
      path: Path,
      timeout?: number
    ): Promise<any>;

    waitForDataValue(
      path: Path,
      value: any,
      timeout?: number
    ): Promise<any>;

    waitForData(
      path: Path,
      timeout?: number
    ): Promise<any>;
  }

  export interface DataInterface extends ReadonlyDataInterface {
    set(path: Path, value: any): void;
  }

  export const data: ReadonlyDataInterface;
  export const localData: DataInterface;
  export const hostData: ReadonlyDataInterface;

}
