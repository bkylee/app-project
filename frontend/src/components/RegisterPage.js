import React from "react";
import UserForm from "../components/UserForm";

const RegisterPage = () => {
  const handleFormSubmit = (formData) => {
    console.log(formData);
    // Handle form data, e.g., send it to the server
  };

  return (
    <div>
      <h1>Register</h1>
      <UserForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default RegisterPage;
