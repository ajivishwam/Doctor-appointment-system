import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('/api/doctors')
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the doctors!', error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Doctors</h2>
      <ul className="space-y-2">
        {doctors.map(doctor => (
          <li key={doctor.id} className="p-4 bg-white shadow-md rounded-md">
            {doctor.name} - {doctor.specialization}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;