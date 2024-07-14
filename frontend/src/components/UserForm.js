import React, { useState } from "react";

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    ethnicity: "",
    music: "",
    interests: [],
    hobbies: [],
  });

  const ethnicities = ["Asian", "Black", "Hispanic", "White", "Other"];
  const musicGenres = ["Rock", "Pop", "Classical", "Jazz", "Hip-hop", "Other"];
  const interestOptions = [
    "Technology",
    "Sports",
    "Art",
    "Travel",
    "Cooking",
    "Other",
  ];
  const hobbyOptions = [
    "Reading",
    "Gaming",
    "Gardening",
    "Painting",
    "Writing",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value, options } = e.target;
    if (name === "interests" || name === "hobbies") {
      const selectedOptions = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      setFormData({ ...formData, [name]: selectedOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Ethnicity:</label>
        <select
          name="ethnicity"
          value={formData.ethnicity}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select your ethnicity
          </option>
          {ethnicities.map((ethnicity) => (
            <option key={ethnicity} value={ethnicity}>
              {ethnicity}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Favorite Music Genre:</label>
        <select
          name="music"
          value={formData.music}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select your favorite music genre
          </option>
          {musicGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Interests:</label>
        <select
          name="interests"
          multiple
          value={formData.interests}
          onChange={handleChange}
          required
        >
          {interestOptions.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Hobbies:</label>
        <select
          name="hobbies"
          multiple
          value={formData.hobbies}
          onChange={handleChange}
          required
        >
          {hobbyOptions.map((hobby) => (
            <option key={hobby} value={hobby}>
              {hobby}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
