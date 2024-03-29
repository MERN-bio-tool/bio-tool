// ReadMeasurements.js
import React from 'react';

const ReadMeasurements = ({ measurements }) => {
  return (
    <div className="read-measurements">
      <h2>Measurements List</h2>
      {measurements.length === 0 ? (
        <p>No measurements recorded.</p>
      ) : (
        <ul>
          {measurements.map((measurement, index) => (
            <li key={index} className="record">
              <div className="record-info">
                Systolic: {measurement.systolic}, Diastolic: {measurement.diastolic}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReadMeasurements;
