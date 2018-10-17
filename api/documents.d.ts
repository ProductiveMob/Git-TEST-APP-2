declare module 'api/documents' {
  export function openDocumentViewer(params: (
    {
      mode: 'url';
      resource: string;
      fileName?: string;
      fileType?: string;
    } |
    {
      mode: 'base64';
      resource: string;
      fileName: string;
      fileType: string;
    } |
    {
     mode: 'file';
     resource: string;
    }
  )): Promise<boolean>;
}
