export interface ResponseData<T> {
  isSuccess: boolean;
  data: T;
  description: string;
  errorType: ErrorMessageType;
}

export enum ErrorMessageType {
  None,
  GeneralError,
  Invalid,
  RequiredFields,
}
