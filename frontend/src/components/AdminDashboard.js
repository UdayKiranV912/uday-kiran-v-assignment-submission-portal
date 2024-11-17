import React, { useEffect, useState } from 'react';
import { fetchAssignments } from '../api/assignments';
import AssignmentCard from './AssignmentCard';

const AdminDashboard = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments().then((data) => setAssignments(data));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        {assignments.map((assignment) => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
