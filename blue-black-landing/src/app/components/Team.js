import { FiStar } from "react-icons/fi"; // For fully filled star icon

export default function Team() {
  const teamMembers = [
    { name: "Gagan Shukla", role: "Frontend Developer", image: "/profile.png", rating: 5 },
    { name: "Gagan Shukla", role: "Backend Developer", image: "/profile1.webp", rating: 5 },
    { name: "Gagan Shukla", role: "UI/UX Designer", image: "/profile.png", rating: 5 },
  ];

  return (
    <section id="team" className="py-16 bg-gradient-to-b from-blue-900 to-black relative">
      <div className="container mx-auto px-6">
        {/* Title and Button Container */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-white">Meet Our Team</h2>

          {/* Button for See Full Team */}
          <button className="px-6 py-3 bg-blue-600 text-white t font-bold rounded-lg hover:bg-blue-700 transition duration-300">
            See Full Team
          </button>
        </div>

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center p-6 border border-gray-300 rounded-xl shadow-lg bg-white hover:shadow-2xl transition duration-300">
              {/* Image */}
              <img
                src={member.image} // Replace with actual image path
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-500"
              />
              {/* Member Name and Role */}
              <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
              <p className="mt-2 text-gray-600">{member.role}</p>

              {/* Rating */}
              <div className="mt-2 text-yellow-500 flex justify-center">
                {Array.from({ length: 5 }, (_, index) => (
                  <FiStar key={index} className="inline-block" size={20} />
                ))}
              </div>

              {/* See More Button */}
              <div className="mt-4">
                <button className="px-6 py-2 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-800 transition duration-300">
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
