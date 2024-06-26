import React, { useState, useEffect } from "react";

const ProfilePage = ({ match }) => {
  const userId = match.params.id;
  const [profile, setProfile] = useState({
    hobbies: "",
    values: "",
    music: "",
    interests: "",
    location: { latitude: 0, longitude: 0 },
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();
      setProfile(data);
    };
    fetchProfile();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/users/profile/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="hobbies"
        value={profile.hobbies}
        onChange={handleChange}
        placeholder="Hobbies"
      />
      <input
        type="text"
        name="values"
        value={profile.values}
        onChange={handleChange}
        placeholder="Values"
      />
      <input
        type="text"
        name="music"
        value={profile.music}
        onChange={handleChange}
        placeholder="Music"
      />
      <input
        type="text"
        name="interests"
        value={profile.interests}
        onChange={handleChange}
        placeholder="Interests"
      />
      {/* Handle location using HTML5 Geolocation API */}
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfilePage;
