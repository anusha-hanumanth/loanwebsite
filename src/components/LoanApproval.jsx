

const LoanApproval = () => {
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));

  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-6">Loan Approval</h2>
        <p className="text-lg">Congratulations, {userDetails.firstName} {userDetails.lastName}!</p>
        <p>Your {userDetails.loanType} loan application has been received and is under review.</p>
        {/* Additional loan approval details can be added here */}
      </div>
    </div>
  );
};

export default LoanApproval;
