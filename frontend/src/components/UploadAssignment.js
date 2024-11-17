import React, { useState } from 'react';

const UploadAssignment = () => {
  const [assignmentTitle, setAssignmentTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Upload logic goes here
    alert(`Assignment "${assignmentTitle}" uploaded successfully`);
  };

  return (
    <div>
      <h2>Upload Assignment</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={assignmentTitle} onChange={(e) => setAssignmentTitle(e.target.value)} required placeholder="Assignment Title" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadAssignment;
