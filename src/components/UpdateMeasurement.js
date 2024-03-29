// UpdateMeasurement.js
import React, { useState } from 'react';

const UpdateMeasurement = ({ measurement, onUpdate }) => {
  const [editedMeasurement, setEditedMeasurement] = useState({ ...measurement });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMeasurement({
      ...editedMeasurement,
      [name]: Number(value)
    });
  };

  const handleUpdate = () => {
    if (!editedMeasurement.systolic || !editedMeasurement.diastolic) {
      setErrorMessage('Please enter both systolic and diastolic values.');
      return;
    }

    // Validation for valid number inputs
    if (isNaN(editedMeasurement.systolic) || isNaN(editedMeasurement.diastolic)) {
      setErrorMessage('Please enter valid numbers for systolic and diastolic values.');
      return;
    }

    onUpdate(editedMeasurement);
    setSuccessMessage('Measurement updated successfully!');
    // Clear success message after 2 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 2000);
  };

  return (
    <div className="update-measurement">
      <h2>Update Measurement</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div className="input-group">
        <label>Systolic:</label>
        <input
          type="number"
          name="systolic"
          value={editedMeasurement.systolic}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Diastolic:</label>
        <input
          type="number"
          name="diastolic"
          value={editedMeasurement.diastolic}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateMeasurement;
