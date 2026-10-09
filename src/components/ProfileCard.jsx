import React, { useState } from 'react';

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({ name: 'John Doe', email: 'john@example.com' });

  return (
    <div className="profile-card">
      {isEditing ? (
        <form onSubmit={(e) => { e.preventDefault(); setIsEditing(false); }}>
          <input type="text" value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})} />
          <input type="email" value={profile.email} onChange={(e) => setProfile({...profile, email: e.target.value})} />
          <button type="submit">Save Changes</button>
        </form>
      ) : (
        <div>
          <h3>{profile.name}</h3>
          <p>{profile.email}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
