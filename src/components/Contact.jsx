
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <div>
<section>
    <div className="bg-white rounded-lg max-w-4xl mx-auto flex flex-col md:flex-row items-start ">
      <div className="flex-grow mb-2 md:mb-0 md:pr-6">
        <h2 className="text-2xl text-center font-bold mb-6 text-orange-700">Get in Touch With Us</h2>
        <p className="text-gray-700 mb-4">
          Please write to us at{' '}
          <a href="mailto:care@myloan.in" className="text-blue-600 font-semibold hover:underline">
            care@myloan.in
          </a>{' '}
          for any service-related queries or feedback. Alternatively, you may also use the My Loan App to lodge a complaint or report an issue. We generally respond within 24-48 working hours.
        </p>
        <p className="text-gray-800 mb-4 font-bold">Timings: Monday to Saturday - 9 am to 6 pm - Excluding public holidays</p>

        <div className="flex items-center mb-4">
          <AiOutlinePhone className="w-6 h-6 text-blue-600 mr-2" />
          <p className="text-gray-800 font-semibold">Contact Number: 080 6939 0476</p>
        </div>

        <div className="flex items-center">
          <AiOutlineMail className="w-6 h-6 text-blue-600 mr-2" />
          <p className="text-gray-800 font-semibold">
            Customer Support:{' '}
            <a href="mailto:care@myloan.in" className="text-blue-600 hover:underline">
              care@myloan.in
            </a>
          </p>
        </div>
      </div>

      {/* Image on the Right Side */}
      <div className="ml-4 flex-shrink-0">
        <img 
          src="https://img.freepik.com/premium-photo/office-operator-with-headset-talking-with-clients_1029469-264078.jpg?size=626&ext=jpg&ga=GA1.1.292004174.1717405199&semt=ais_hybrid" 
          alt="Contact Illustration" 
          className="w-[250px] h-[300px] rounded-lg" 
        />
      </div>
      
    </div>
    </section>
    </div>
  );
};

export default Contact;
