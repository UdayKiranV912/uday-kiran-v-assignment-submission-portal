import React from 'react';

const AssignmentCard = ({ assignment }) => {
  return (
    <div>
      <h3>{assignment.title}</h3>
      <p>Due Date: {assignment.dueDate}</p>
    </div>
  );
};

export default AssignmentCard;
