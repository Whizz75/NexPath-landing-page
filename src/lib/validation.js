// src/utils/validation.js

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateRequired = (fields, values) => {
  const errors = {};
  fields.forEach((field) => {
    if (!values[field] || values[field].trim() === "") {
      errors[field] = "This field is required";
    }
  });
  return errors;
};

/**
 * Combined helper for full forms
 */
export const validateRegisterForm = (values) => {
  const errors = validateRequired(["name", "email", "password"], values);
  if (!validateEmail(values.email)) errors.email = "Invalid email address";
  if (!validatePassword(values.password))
    errors.password = "Password must be at least 6 characters";
  return errors;
};

export const validateOTP = (otp) => otp && otp.length === 6;
