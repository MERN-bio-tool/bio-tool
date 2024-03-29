// CreateMeasurement.js
import React, { useState } from 'react';

const CreateMeasurement = ({ onCreate }) => {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Input validation
    if (!systolic || !diastolic || isNaN(systolic) || isNaN(diastolic)) {
      setErrorMessage('Please enter valid values for both systolic and diastolic.');
      return;
    }

    const newMeasurement = { systolic: Number(systolic), diastolic: Number(diastolic) };
    onCreate(newMeasurement);
    
    // Clear inputs and error message
    setSystolic('');
    setDiastolic('');
    setErrorMessage('');
  };

  return (
    <div className="create-measurement">
      <h2>Create New Measurement</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Systolic:</label>
          <input
            type="number"
            value={systolic}
            onChange={(e) => setSystolic(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Diastolic:</label>
          <input
            type="number"
            value={diastolic}
            onChange={(e) => setDiastolic(e.target.value)}
          />
        </div>
        <button type="submit">Add Measurement</button>
      </form>
    </div>
  );
};

export default CreateMeasurement;
