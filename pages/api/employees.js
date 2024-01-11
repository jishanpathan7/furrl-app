// pages/api/employees.js
import  data  from '../../data.js'; // Import your sample data

export default function handler(req, res) {
  res.status(200).json(data);
}
