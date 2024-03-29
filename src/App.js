// App.js
import React, { useState } from 'react';
import './App.css';
import CreateMeasurement from './components/CreateMeasurement';
import ReadMeasurements from './components/ReadMeasurements';
import UpdateMeasurement from './components/UpdateMeasurement';
import DeleteMeasurement from './components/DeleteMeasurement';

function App() {
  const [measurements, setMeasurements] = useState([]);

  const handleCreate = (newMeasurement) => {
    setMeasurements([...measurements, newMeasurement]);
  };

  const handleDelete = (measurementToDelete) => {
    const updatedMeasurements = measurements.filter(
      (measurement) => measurement !== measurementToDelete
    );
    setMeasurements(updatedMeasurements);
  };

  const handleUpdate = (updatedMeasurement) => {
    const updatedMeasurements = measurements.map((measurement, index) =>
      index === updatedMeasurement.index ? updatedMeasurement : measurement
    );
    setMeasurements(updatedMeasurements);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blood Pressure Measurement Tracker</h1>
      </header>
      <main>
        <CreateMeasurement onCreate={handleCreate} />
        <ReadMeasurements measurements={measurements} />
        {measurements.map((measurement, index) => (
          <div key={index} className="measurement-container">
            <UpdateMeasurement
              measurement={{ ...measurement, index }}
              onUpdate={handleUpdate}
            />
            <DeleteMeasurement
              measurement={measurement}
              onDelete={handleDelete}
            />
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
