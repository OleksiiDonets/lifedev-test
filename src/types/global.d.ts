export type User = {
  'name': string;
  'company': string;
  'phone': string;
  'email': string;
  'country': string;
  'status': string;
}
export interface ITable {
  data: User[];
}