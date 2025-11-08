export interface Entry {
  date: string;
  description: string;
  diagnoseCodes?: string[];
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  occupation: string;
  entries: Entry[];
}
