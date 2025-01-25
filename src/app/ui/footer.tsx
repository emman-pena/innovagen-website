import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="container mx-auto flex flex-col items-center text-center">
        <p className="text-md mb-4">
          &copy; {new Date().getFullYear()} InnovaGen. All rights reserved.
        </p>
        <div className="flex flex-col space-y-2">
          <a
            href="https://www.instagram.com/innova_gen_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Instagram: @innova_gen
          </a>
          <a
            href="https://www.linkedin.com/company/innovagenn/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BM7kg4zFlRZeIulU0PkR1TQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            LinkedIn: Innova Gen LinkedIn
          </a>
          <a
            href="https://twitter.com/innova_gen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Twitter: @innova_gen
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
