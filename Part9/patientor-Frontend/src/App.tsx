import React from "react";
import { Patient } from "./types";
import { getAllPatients } from "./services/patients";

const App: React.FC = () => {
  const [patients, setPatients] = React.useState<Patient[]>([]);

  React.useEffect(() => {
    setPatients(getAllPatients());
  }, []);

  return (
    <div>
      <h1>Patientor</h1>
      {patients.map(p => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>Occupation: {p.occupation}</p>
          <p>Date of Birth: {p.dateOfBirth}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
