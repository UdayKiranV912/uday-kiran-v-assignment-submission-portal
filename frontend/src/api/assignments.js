import axios from 'axios';

const API_URL = 'http://localhost:3000/assignments';

export const fetchAssignments = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch assignments', error);
    return [];
  }
};
