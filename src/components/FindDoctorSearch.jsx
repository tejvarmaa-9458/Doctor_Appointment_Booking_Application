import React, { useState } from 'react';

const FindDoctorSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log("Searching for doctor specialty or name:", searchTerm);
    // API call to fetch doctors would go here
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search doctors, clinics, etc." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default FindDoctorSearch;
