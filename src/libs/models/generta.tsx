export interface ResponseData<T> {
  isSuccess: boolean;
  data: T;
  description: string;
  errorCode: number;
}
