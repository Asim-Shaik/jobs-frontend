import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const SinglePage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [job, setJob] = useState({});

  useEffect(() => {
    const getJob = async () => {
      try {
        const res = await axios.get(
          `https://jobs-juzx.onrender.com/api/jobs/${id}`
        );
        setJob(res.data);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getJob();
    console.log(job);
  }, [id]);
  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white capitalize ">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center mt-24">
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-slate-300 p-3  rounded-lg">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {job.company}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {job.job_title}
              </h1>
              <h4 className="mr-3 text-blue-700">{job.job_role}</h4>
              <p className="leading-relaxed">{job.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3">{job.location}</span>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Vacancies : {job.openings}
                </span>
                <button
                  disabled
                  className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded disabled:opacity-50"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePage;
