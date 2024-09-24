import { FaCheckCircle, FaThumbsUp, FaMoneyBillWave } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function from react-router-dom

  const handleApplyClick = () => {
    // Navigate to the application form page
    navigate('/application');
  };

  return (
    <div className="mt-0 ">
      {/* Header Section */}
      <section>
        <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 p-4 sm:p-6 lg:p-10 text-center lg:text-left">
            <h1 className="text-xl sm:text-xl md:text-2xl font-bold text-black mb-4">
              Apply for the best loans with low-interest rates. Easy process, fast approval!
            </h1>
            <p className="sm:text-lg md:text-xl text-semibold text-green-900 mb-6 leading-relaxed">
              Achieve your financial goal.
            </p>
            {/* Features Section */}
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <div className="bg-white text-orange-600 p-2 rounded-full mr-4">
                  <FaCheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-sm  sm:text-md font-semibold">Instant Disbursal</h3>
              </div>

              {/* Feature Item 2 */}
              <div className="flex items-center">
                <div className="bg-white text-orange-600 p-2 rounded-full mr-4">
                  <FaThumbsUp className="h-6 w-6" />
                </div>
                <h3 className="text-sm items-start sm:text-md font-semibold">100% Digital Process</h3>
              </div>

              {/* Feature Item 3 */}
              <div className="flex items-center">
                <div className="bg-white text-orange-600 p-2 rounded-full mr-4">
                  <FaMoneyBillWave className="h-6 w-6" />
                </div>
                <h3 className="text-sm sm:text-md font-semibold">Low Interest Rates</h3>
              </div>
            </div>

            <button
              className="bg-green-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded hover:bg-green-800 transition mt-6"
              onClick={handleApplyClick} // Redirect when clicked
            >
              APPLY FOR LOAN
            </button>
          </div>
          <div className="lg:w-1/2 p-4 flex items-center justify-center">
            <img
              src="https://www.miraeassetfin.com/assets/img/device-cricle.webp"
              alt="Business"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
