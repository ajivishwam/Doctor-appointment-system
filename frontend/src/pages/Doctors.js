import React from 'react';
import DoctorList from '../components/DoctorList';

const Doctors = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Doctors</h1>
      <DoctorList />
    </div>
  );
};

export default Doctors;