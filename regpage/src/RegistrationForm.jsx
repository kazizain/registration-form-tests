import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: '',
    newsletter: false
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email.includes('@')) {
      newErrors.email = 'Invalid email address';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    // Add more validation as needed

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      console.log('Form submitted', formData);
      navigate('/welcome', { state: { fullName: formData.fullName } });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full Name</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
      </div>
      <div>
        <label>Date of Birth</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
      </div>
      <div>
        <label>Gender</label>
        <label>
          <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} />
          Female
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange} />
          Subscribe to newsletter
        </label>
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default RegistrationForm;
