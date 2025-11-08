import { Patient } from "../types";

export const getAllPatients = (): Patient[] => {
  return [
    {
      id: "1",
      name: "John Doe",
      dateOfBirth: "1990-01-01",
      occupation: "Engineer",
      entries: []
    },
    {
      id: "2",
      name: "Jane Smith",
      dateOfBirth: "1985-03-15",
      occupation: "Designer",
      entries: []
    }
  ];
};
