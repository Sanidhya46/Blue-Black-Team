import { FiCheckCircle, FiArrowRight } from "react-icons/fi"; // Import icon for bullet points and arrow

export default function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-blue-900 to-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start ">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <img
            src="/Team right.jpg" // Replace with your left image path
            alt="Left Team Image"
            className="w-full max-w-[500px] h-[200px] md:h-[400px] rounded-lg shadow-lg object-cover mx-auto"
          />
        </div>

        {/* Text and Bullet Points Section (Right Side) */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0 ">
          <h2 className="text-3xl font-bold text-purple-400">About Us</h2>
          <p className="mt-4 text-gray-300 font-semibold">
            We are a team dedicated to innovation and excellence in every project we undertake.
          </p>

          {/* Bullet Points */}
          <ul className="mt-8 space-y-4">
            <li className="flex items-center text-red-400 font-semibold">
              <FiCheckCircle className="mr-2 text-red-400" size={30} />
              <span>Delivering innovative and cutting-edge technology solutions</span>
            </li>
            <li className="flex items-center font-semibold text-green-400">
              <FiCheckCircle className="mr-2 text-green-400" size={30} />
              <span>Encouraging creativity, collaboration, and teamwork in projects</span>
            </li>
            <li className="flex items-center font-semibold text-yellow-400">
              <FiCheckCircle className="mr-2 text-yellow-400" size={30} />
              <span>Guaranteeing quality and reliability across all our products.</span>
            </li>
            <li className="flex items-center font-semibold text-orange-400">
              <FiCheckCircle className="mr-2 text-orange-400" size={30} />
              <span>Continuously adapting to meet changing industry standards</span>
            </li>
          </ul>

          {/* Learn More Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <button className="flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300">
              <span className="mr-2">Learn more about us</span>
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
