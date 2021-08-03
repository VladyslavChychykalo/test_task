export interface TableElementsI {
  name: string;
  date: string;
  profession: string;
  experience: number;
  gender: string;
}

export interface FormValuesI {
  email: string;
  name: string;
  primaryPhone: string;
  secondaryPhone?: string;
  description: string;
}

export interface ErrorFromValueI {
  email?: string;
  name?: string;
  primaryPhone?: string;
  secondaryPhone?: string;
  description?: string;
}