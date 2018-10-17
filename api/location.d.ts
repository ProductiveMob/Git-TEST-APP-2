declare module 'api/location' {
  interface Coordinates {
    latitude: number;
    longitude: number;
  }

  interface NamedLocation {
    country: string;
    city: string;
    streetName: string;
    streetNumber: string;
    postalCode: string;
    formattedAddress: string;
  }

  type StartingMode = 'satellite' | 'standard';

  type PromptMapLocationParams = {
    startingMode?: StartingMode;
    startingCoordinates?: Coordinates;
    requestPicture?: boolean;
  };

  type PromptMapLocationResult = {
    coordinates: Coordinates;
    location?: NamedLocation;
    picture?: string;
  };

  export function reverseGeocode(options: Coordinates): Promise<NamedLocation>;
  export function promptMapLocation(options?: PromptMapLocationParams): Promise<PromptMapLocationResult>;
}
