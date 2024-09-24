import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Application = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    loanType: '',
    loanAmount: '', // Added loanAmount field
    email: '',
  });

  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic can be added here
    if (
      formData.firstName &&
      formData.lastName &&
      formData.gender &&
      formData.dob &&
      formData.loanType &&
      formData.loanAmount && // Validate loanAmount
      formData.email
    ) {
      // Store the form data in local storage
      localStorage.setItem('userDetails', JSON.stringify(formData));

      // Redirect to Loan Approval component
      navigate('/loan-approval', { state: { formData } });
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <section className="bg-white p-8 rounded-lg w-full max-w-lg">
        
        {/* Form Section */}
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-6">Loan Application Form</h2>

        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-2">
            <label className="block text-lg font-semibold text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-md"
              placeholder="Enter your first name"
              required
            />
          </div>

          {/* Last Name */}
          <div className="mb-2">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-md"
              placeholder="Enter your last name"
              required
            />
          </div>

          {/* Gender */}
          <div className="mb-2">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-md"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className="mb-2">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-md"
              required
            />
          </div>

          {/* Loan Type */}
          <div className="mb-2">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Type of Loan</label>
            <select
              name="loanType"
              value={formData.loanType}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-md"
              required
            >
              <option value="">Select Loan Type</option>
              <option value="personal">Personal Loan</option>
              <option value="educational">Educational Loan</option>
            </select>
          </div>

          {/* Loan Amount */}
          <div className="mb-2">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Loan Amount</label>
            <input
              type="number"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-md"
              placeholder="Enter the loan amount"
              required
            />
          </div>

          {/* Email Address */}
          <div className="mb-2">
            <label className="block text-lg font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-md"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-blue-700"
            >
              Submit Application
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Application;
