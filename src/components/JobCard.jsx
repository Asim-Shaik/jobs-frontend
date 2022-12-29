import React from "react";
import { Link } from "react-router-dom";
const JobCard = ({ data }) => {
  // console.log(data);
  return (
    <li className="py-3 sm:py-4 hover:bg-slate-600 rounded-lg capitalize">
      <div className="flex items-center space-x-4 ">
        <div className="flex-shrink-0"></div>
        <div className="flex-1 min-w-0">
          <p className="text-base md:text-xl font-medium text-gray-900 truncate dark:text-white">
            Role : {data.job_title}
          </p>
          <p className="text-sm md:text-lg text-white truncate p-1 ">
            Type : {data.job_role}
          </p>
          <p className="text-sm md:text-lg text-white truncate p-1 ">
            Location : {data.location}
          </p>
          <p className="text-sm md:text-lg text-white truncate p-1">
            Company : {data.company}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white pr-4">
          <Link to={`/singlejob/${data._id}`}>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default JobCard;
