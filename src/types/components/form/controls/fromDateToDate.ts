export interface FromDateToDateProps {
  fromLabel: string;
  toLabel: string;
  maxDays: number;
  buttonLabel: string;
  getDates: (fromDate: Date, toDate: Date) => void;
  defaultFromDate?: Date;
  defaultToDate?: Date;
}
