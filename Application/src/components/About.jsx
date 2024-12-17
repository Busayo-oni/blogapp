import React from "react";

const About = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
        About Us
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-700 text-lg mb-4">
          Welcome to <span className="font-bold text-blue-500">Blog App</span>!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse minima similique hic debitis, deleniti consectetur iure velit laborum? Amet odit asperiores ab nobis repellendus voluptatem, assumenda eaque vitae quia iste!
        </p>

        <p className="text-gray-700 text-lg mb-4">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae natus corporis fugit rerum excepturi, modi voluptates odit maiores reiciendis dicta accusamus repellat molestias cupiditate assumenda autem laborum nam nesciunt?
        </p>

        <p className="text-gray-700 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veritatis perspiciatis tempore architecto animi odio excepturi dolores voluptas corrupti, ipsam dolorum porro nulla, iusto quasi exercitationem expedita? Quas, consequatur fugit?
        </p>
      </div>
    </div>
  );
};

export default About;