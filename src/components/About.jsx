const About = () => {
  return (
    <div className="min-h-screen pt-3 mb-3">
      <section>
        <div className="bg-gray-100 rounded-lg max-w-8xl w-full mx-auto flex flex-col md:flex-row p-6 mb-10">
          <div className="flex-grow mb-4 md:mb-0 md:pr-6">
            <h2 className="text-2xl font-bold mb-4 text-orange-700">About Our Company</h2>
            <p className="text-gray-900 font-semibold mb-4">
              Our company is dedicated to providing the best financial services to our customers. We strive to create a seamless experience through innovative solutions and customer-centric approaches. Our team of experts is committed to understanding your needs and helping you achieve your financial goals.
            </p>
            <p className="text-gray-900 font-semibold mb-4">
              With years of experience in the industry, we have built a reputation for excellence and reliability. Our mission is to empower individuals and businesses with the knowledge and tools to make informed financial decisions.
            </p>
          </div>

          {/* Image on the Right Side */}
          <div className="relative w-full md:w-1/3 h-74 flex-shrink-0">
            <img
              src="https://cdn.pixabay.com/photo/2020/02/18/08/35/finance-4858797_1280.jpg"
              alt="Large Representation"
              className="w-full h-full rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section>
        <div className="bg-gray-100 rounded-lg max-w-8xl mx-auto flex flex-col lg:flex-row p-6 mb-4">
          {/* Description Left Side */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4 text-orange-700">Why Choose Us?</h2>
            <p className="text-gray-900 font-semibold mb-4">
              Our commitment to providing top-notch financial services has earned us the trust of thousands of customers. We offer quick and transparent loan processing, tailored solutions, and expert financial advice. Whether you are looking for personal loans, educational loans, we’ve got you covered.
            </p>
            <p className="text-gray-900 font-semibold">
              With a dedicated support team and innovative technology, we ensure that your loan experience is hassle-free and swift. Choose us for competitive interest rates and excellent customer service.
            </p>
          </div>

          {/* YouTube Video Right Side */}
          <div className="relative lg:w-1/2">
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/X4HcuMtu5zc?si=hckoAEGoWFILZpjh"
              title="Why Choose Us Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
