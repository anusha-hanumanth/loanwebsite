import { FaFileAlt, FaClipboardCheck, FaCheckCircle } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="min-h-screen mt-0 md:mt-8">
      <section className="max-w-6xl mx-auto">
        {/* Services Title */}
        <h2 className="text-3xl font-bold text-orange-700 mb-8 text-center">Our Loan Services</h2>

        {/* Loan Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Personal Loan */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Personal Loan</h3>
            <p className="text-gray-800 font-semibold mb-4">
              A personal loan offers the financial support you need for various personal expenses such as medical emergencies, travel, or any unforeseen events.
            </p>
            <ul className="list-disc ml-6 font-semibold text-gray-700">
              <li>Loan Amount: ₹50,000 - ₹10,00,000</li>
              <li>Interest Rates: Starting from 10%</li>
              <li>Flexible Repayment Options</li>
            </ul>
            
            {/* Personal Loan Eligibility */}
            <h4 className="text-lg font-bold text-red-600 mt-6 mb-4">Eligibility Criteria</h4>
            <ul className="list-disc ml-6 font-semibold text-gray-700">
              <li>Applicant must be between 21 and 60 years of age.</li>
              <li>Minimum monthly income: ₹25,000.</li>
              <li>Employment status: Salaried or self-employed with a stable income.</li>
              <li>Good credit score and repayment history.</li>
            </ul>
          </div>

          {/* Educational Loan */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Educational Loan</h3>
            <p className="text-gray-800 font-semibold mb-4">
              Our educational loan helps cover tuition fees, living expenses, and other education-related costs, ensuring that financial limitations don’t hold back your academic dreams.
            </p>
            <ul className="list-disc ml-6 text-gray-700 font-semibold">
              <li>Loan Amount: ₹1,00,000 - ₹20,00,000</li>
              <li>Low Interest Rates for Students</li>
              <li>Easy Repayment After Course Completion</li>
            </ul>
            
            {/* Educational Loan Eligibility */}
            <h4 className="text-lg font-bold text-red-600 mt-6 mb-4">Eligibility Criteria</h4>
            <ul className="list-disc ml-6 font-semibold text-gray-700">
              <li>Applicant must have secured admission in a recognized university or institution.</li>
              <li>Co-borrower (parent/guardian) with a stable income is required.</li>
              <li>Indian citizenship.</li>
              <li>Good academic record and no previous educational loan defaults.</li>
            </ul>
          </div>
        </div>

        {/* How to Apply Steps */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center md:text-start text-green-800 mb-6">How to Apply</h3>

          {/* Personal Loan Steps */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-center md:text-start text-blue-800 mb-4">Personal Loan - 3 Easy Steps</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <FaFileAlt className="text-orange-600 h-10 w-10 mb-2" />
                <h5 className="font-bold text-gray-800">Step 1: Submit Documents</h5>
                <p className="text-center text-gray-800">Provide your ID proof, address proof, and income proof.</p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <FaClipboardCheck className="text-orange-600 h-10 w-10 mb-2" />
                <h5 className="font-bold text-gray-800">Step 2: Eligibility Check</h5>
                <p className="text-center text-gray-800">Our team will review your application and check your eligibility.</p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <FaCheckCircle className="text-orange-600 h-10 w-10 mb-2" />
                <h5 className="font-bold text-gray-800">Step 3: Loan Approval</h5>
                <p className="text-center text-gray-800">Once approved, receive funds within 24 hours.</p>
              </div>
            </div>
          </div>

          {/* Educational Loan Steps */}
          <div>
            <h4 className="text-xl font-semibold  text-center md:text-start text-blue-800 mb-4">Educational Loan - 3 Easy Steps</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <FaFileAlt className="text-orange-600 h-10 w-10 mb-2" />
                <h5 className="font-bold text-gray-800">Step 1: Submit Documents</h5>
                <p className="text-center  text-gray-800">Provide admission proof, ID proof, and co-borrower details.</p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <FaClipboardCheck className="text-orange-600 h-10 w-10 mb-2" />
                <h5 className="font-bold text-gray-800">Step 2: Eligibility Check</h5>
                <p className="text-center text-gray-800">We will verify your application and ensure You're eligible.</p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <FaCheckCircle className="text-orange-600 h-10 w-10 mb-2" />
                <h5 className="font-bold text-gray-800">Step 3: Loan Disbursement</h5>
                <p className="text-center text-gray-800">Upon approval, the loan is disbursed directly to the institution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
