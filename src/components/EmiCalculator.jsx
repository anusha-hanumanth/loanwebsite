import { useState } from 'react';

const EmiCalculator = () => {
  const [loanType, setLoanType] = useState('personal');
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    if (loanAmount && interestRate && loanTenure) {
      const principal = parseFloat(loanAmount);
      const annualInterest = parseFloat(interestRate) / 100;
      const months = parseInt(loanTenure);

      const monthlyInterest = annualInterest / 12;
      const emiValue = (principal * monthlyInterest * Math.pow(1 + monthlyInterest, months)) /
        (Math.pow(1 + monthlyInterest, months) - 1);
      
      setEmi(emiValue.toFixed(2));
    } else {
      setEmi(null);
    }
  };

  return (
    <div className="min-h-screen pt-3">
      <section className="border max-w-xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-orange-700 mb-6 text-center">EMI Calculator</h2>

        {/* Loan Type Selection */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            Select Loan Type:
          </label>
          <select
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
            className="w-full p-3 rounded-lg bg-white shadow-md border-gray-300"
          >
            <option value="personal">Personal Loan</option>
            <option value="educational">Educational Loan</option>
          </select>
        </div>

        {/* Loan Amount Input */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2 text-gray-700">Loan Amount (₹):</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full p-3 rounded-lg bg-white shadow-md border-gray-300"
            placeholder="Enter loan amount"
          />
        </div>

        {/* Interest Rate Input */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2 text-gray-700">Annual Interest Rate (%):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full p-3 rounded-lg bg-white shadow-md border-gray-300"
            placeholder="Enter interest rate"
          />
        </div>

        {/* Loan Tenure Input */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2 text-gray-700">Loan Tenure (Months):</label>
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            className="w-full p-3 rounded-lg bg-white shadow-md border-gray-300"
            placeholder="Enter loan tenure in months"
          />
        </div>

        {/* Calculate EMI Button */}
        <div className="text-center mb-6">
          <button
            onClick={calculateEMI}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-blue-700"
          >
            Calculate EMI
          </button>
        </div>

        {/* Display EMI Result */}
        {emi !== null && (
          <div className="text-center bg-green-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-800">Your Monthly EMI:</h3>
            <p className="text-2xl font-bold text-green-700">₹{emi}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default EmiCalculator;
