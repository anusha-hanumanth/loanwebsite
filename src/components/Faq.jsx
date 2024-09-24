

const Faq = () => {
  return (
    // FAQ Section
    <div className="mb-8 pt-3">
      <section className="max-w-4xl mx-auto">
        {/* FAQ Title */}
        <h2 className="text-2xl bg-blue-200 font-bold text-orange-700 text-center py-2 rounded-lg shadow-lg">
          Frequently Asked Questions
        </h2>
        
        {/* FAQ Items */}
        <div className="mt-6 space-y-4">
          {/* FAQ Item 1 */}
          <details className="bg-gray-100 shadow-md p-4 rounded-lg">
            <summary className="cursor-pointer text-lg font-semibold">What is the interest rate?</summary>
            <p className="mt-2 text-gray-700">Our interest rates start at 10% depending on eligibility.</p>
          </details>

          {/* FAQ Item 2 */}
          <details className="bg-gray-100 shadow-md p-4 rounded-lg">
            <summary className="cursor-pointer text-lg font-semibold">What documents are required?</summary>
            <p className="mt-2 text-gray-700">You need an ID proof, address proof, and income proof.</p>
          </details>

          {/* FAQ Item 3 */}
          <details className="bg-gray-100 shadow-md p-4 rounded-lg">
            <summary className="cursor-pointer text-lg font-semibold">How long does it take to get approved?</summary>
            <p className="mt-2 text-gray-700">Loan approval takes as little as 24 hours.</p>
          </details>

          {/* FAQ Item 4 */}
          <details className="bg-gray-100 shadow-md p-4 rounded-lg">
            <summary className="cursor-pointer text-lg font-semibold">What is the minimum loan amount I can apply for?</summary>
            <p className="mt-2 text-gray-700">You can apply for a loan starting from ₹10,000.</p>
          </details>

          {/* FAQ Item 5 */}
          <details className="bg-gray-100 shadow-md p-4 rounded-lg">
            <summary className="cursor-pointer text-lg font-semibold">How can I repay the loan?</summary>
            <p className="mt-2 text-gray-700">Loan repayments are made through easy EMI options.</p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default Faq;
