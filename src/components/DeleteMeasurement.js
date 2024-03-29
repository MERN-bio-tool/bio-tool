// DeleteMeasurement.js
import React, { useState } from 'react';

const DeleteMeasurement = ({ measurement, onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    onDelete(measurement);
    setShowConfirm(false); // Hide the confirmation dialog after deletion
  };

  return (
    <div className="delete-measurement">
      {showConfirm ? (
        <div className="confirm-dialog">
          <p>Are you sure you want to delete this measurement?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setShowConfirm(false)}>No</button>
        </div>
      ) : (
        <button onClick={() => setShowConfirm(true)}>Delete</button>
      )}
    </div>
  );
};

export default DeleteMeasurement;
