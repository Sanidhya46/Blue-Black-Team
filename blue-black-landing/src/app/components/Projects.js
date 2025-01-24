import { FiArrowRight } from "react-icons/fi"; // Importing right arrow icon for "See More Projects"

export default function Projects() {
  const projects = [
    {
      title: "Innovative AI Solution",
      description: "Revolutionizing business automation with AI technology.",
      image: "/innovativeai.jpg", // Example image path
    },
    {
      title: "E-Commerce Platform",
      description: "An engaging platform for seamless online shopping.",
      image: "/ecommerce.jpeg", // Example image path
    },
    {
      title: "Sustainability Tracker",
      description: "Empowering users to track their carbon footprint.",
      image: "/sustainability.jpg", // Example image path
    },
    {
      title: "Community App",
      description: "Fostering connections and resource-sharing within communities.",
      image: "/communityapp.jpg", // Example image path
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-b from-black to-blue-900 text-white"
    >
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Our Projects</h2>
          <div className="flex items-center text-blue-300 hover:text-blue-400 cursor-pointer">
            <span className="text-lg font-semibold mr-2">See More Projects</span>
            <FiArrowRight size={20} />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg bg-white overflow-hidden text-black"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              {/* Project Info */}
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-700 text-white font-semibold rounded hover:bg-blue-700">
                  See Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

  