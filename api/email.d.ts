declare module 'api/email' {
  type AttachmentWithText = {
    mode?: 'utf8',
    resource: string,
    fileName: string;
    fileType?: string;
  };

  type AttachmentWithData = {
    mode: 'base64',
    resource: string,
    fileName: string;
    fileType: string;
  };

  type AttachmentWithFile = {
    mode: 'file',
    resource: string,
    fileName: string;
    fileType?: string;
  };

  type Attachment = AttachmentWithText | AttachmentWithData | AttachmentWithFile;

  type ComposeEmailParamsWithText = {
    to?: string[],
    cc?: string[],
    bcc?: string[],
    subject?: string,
    text: string,
    attachments?: Attachment[]
  };

  type ComposeEmailParamsWithHtml = {
    to?: string[],
    cc?: string[],
    bcc?: string[],
    subject?: string,
    html: string,
    attachments?: Attachment[]
  };

  type ComposeEmailParams = (
    ComposeEmailParamsWithText |
    ComposeEmailParamsWithHtml
  );

  type ComposeEmailResult = {
    status: 'sent' | 'cannotSendMail' | 'cancelled' | 'saved' | 'failed'
  };

  export function composeEmail(params: ComposeEmailParams): Promise<ComposeEmailResult>;
}
