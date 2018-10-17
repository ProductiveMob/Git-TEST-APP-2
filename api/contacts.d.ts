declare module 'api/contacts' {

  export interface EmailAddress {
    label?: string;
    email?: string;
  }

  export interface PhoneNumber {
    label?: string;
    number?: string;
  }

  export interface PostalAddress {
    label?: string;
    formattedAddress?: string;
    street?: string;
    pobox?: string;
    neighborhood?: string;
    city?: string;
    region?: string;
    state?: string;
    postCode?: string;
    country?: string;
  }

  export interface Birthday {
    day: Number;
    month: Number;
    year: Number;
  }

  export interface Contact {
    company?: string;
    emailAddresses?: EmailAddress[];
    familyName?: string;
    givenName?: string;
    middleName?: string;
    jobTitle?: string;
    phoneNumbers?: PhoneNumber[];
    postalAddresses?: PostalAddress[];
    prefix?: string;
    suffix?: string;
    department?: string;
    birthday?: Birthday;
  }

  export interface ContactWithId extends Contact {
    id: string;
  }

  // data:image/png;base64,...
  type DataUriBase64String = string;

  export function checkPermission(): Promise<'authorized' | 'denied' | 'undefined' | 'never_ask_again'>;
  export function requestPermission(): Promise<'authorized' | 'denied' | 'never_ask_again'>;
  export function findContactsMatching(searchString: string): Promise<ContactWithId[]>;
  export function getAllContacts(): Promise<ContactWithId[]>;
  export function updateContact(contact: ContactWithId): Promise<void>;
  export function openContactForm(contact: Contact): Promise<void>;
  export function addContact(contact: Contact): Promise<void>;
  export function getContactPhotoById(contactId: string): Promise<DataUriBase64String>;
}
