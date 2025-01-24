import { FiArrowRight } from "react-icons/fi"; // Import the arrow icon

export default function Hero() {
  return (
    <section
      className="bg-gradient-to-b from-black to-blue-900 text-white text-center py-24 px-6 mt-16 bg-cover bg-center"
      // Image path is relative to the public folder
    >
      <h1 className="text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500">
        Welcome to the Blue Black Team
      </h1>
      <p className="mt-8 text-lg md:text-xl font-medium text-gray-300">
        Join us in shaping the future with impactful projects and a strong mission.
      </p>
      
      {/* Centered Button */}
      <div className="mt-10 flex justify-center">
        <button className="flex items-center px-8 py-3 bg-pink-500 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
          <span className="mr-2">Join Team Now</span>
          <FiArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
