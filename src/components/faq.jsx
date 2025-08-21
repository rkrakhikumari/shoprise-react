import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';


const FAQContent = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(0); // First question expanded by default
  const [askQuestion, setAskQuestion] = useState('');

  const faqData = [
    {
      question: "What is ShopRise?",
      answer: "ShopRise is an online marketplace that allows users to buy and sell a wide range of items, including electronics, furniture, clothing, and more. It's a convenient platform for connecting with local buyers and sellers."
    },
    {
      question: "How do I create an account on ShopRise?",
      answer: "To create an account on ShopRise, click the 'Sign Up' button on the homepage, fill in your details including email and password, verify your email address, and you're ready to start buying and selling."
    },
    {
      question: "Is ShopRise available in my location?",
      answer: "ShopRise is currently available in major cities across multiple countries. You can check availability in your area by entering your location during the sign-up process or contacting our support team."
    },
    {
      question: "How can I list an item for sale on ShopRise?",
      answer: "After logging into your account, click 'Sell Item', upload clear photos of your product, write a detailed description, set your price, choose your category, and publish your listing. Make sure to follow our listing guidelines for best results."
    },
    {
      question: "Are there any fees for using ShopRise?",
      answer: "ShopRise charges a small commission fee only when you successfully sell an item. Listing items and browsing is completely free. The commission fee varies by category and helps maintain the platform's security and features."
    },
    {
      question: "How do I contact a seller or buyer on ShopRise?",
      answer: "You can contact sellers or buyers through our secure messaging system. Simply click the 'Message' button on any listing or in your dashboard to start a conversation. We recommend keeping all communications within the platform for safety."
    },
    {
      question: "Is it safe to meet with people I connect with on ShopRise?",
      answer: "Safety is our priority. We recommend meeting in public places during daylight hours, bringing a friend if possible, and trusting your instincts. Use our in-app payment system when possible, and report any suspicious behavior to our support team."
    }
  ];

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? -1 : index);
  };

  const handleSubmitQuestion = () => {
    if (askQuestion.trim()) {
      console.log('Question submitted:', askQuestion);
      setAskQuestion('');
    }
  };

  return (
    <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8">
      {/* FAQ Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1F3A93] mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-[#000000] pb-2 text-sm sm:text-base">
          Click on the question to view the corresponding answer.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-3 mb-8 sm:mb-12">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Question Header */}
            <button
              onClick={() => toggleQuestion(index)}
              className={`w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between transition-colors ${
                expandedQuestion === index 
                  ? 'bg-[#FF7F50] text-white' 
                  : 'bg-[#D3D3D380] text-[#333333]'
              }`}
            >
              <span className="font-medium text-sm sm:text-base pr-2">
                {index + 1}. {faq.question}
              </span>
              {expandedQuestion === index ? (
                <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              )}
            </button>
            
            {/* Answer Content */}
            {expandedQuestion === index && (
              <div className="px-4 sm:px-6 py-3 sm:py-4 bg-white border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Ask Your Question Section */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-base sm:text-lg font-medium text-gray-700 mb-3 sm:mb-2">
          Ask your question
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 items-stretch sm:items-center w-full">
          <div className="w-full sm:w-[40%]">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 sm:px-4 py-2 sm:py-2 rounded-full border border-gray-300 text-sm focus:outline-none placeholder-[#333333]"
            />
          </div>

          <div className="w-full sm:w-[60%] relative">
            <input
              type="text"
              value={askQuestion}
              onChange={(e) => setAskQuestion(e.target.value)}
              placeholder="Hello, is this article still available?"
              className="w-full px-3 sm:px-4 py-2 sm:py-2 pr-16 sm:pr-[72px] rounded-full border border-gray-300 text-sm focus:outline-none placeholder-[#333333]"
            />

            <button
              onClick={handleSubmitQuestion}
              disabled={!askQuestion.trim()}
              className="absolute top-1/2 right-0 -translate-y-1/2 px-3 sm:px-4 py-1.5 bg-[#1F3A93] text-white text-xs sm:text-sm font-medium rounded-full mr-0.5"
            >
              Send
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FAQContent;