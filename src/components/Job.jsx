import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import axios from "axios";

const Job = () => {
  const [data, setData] = useState([]);
  const [stat, setStatic] = useState([]);
  const [array, setArray] = useState([]);
  const [locationArray, setLocationArray] = useState([]);
  const [filterRole, setFilterRole] = useState(String);
  const [filterLocation, setFilterlocation] = useState(String);

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get("https://jobs-juzx.onrender.com/api/jobs");
        const data = setStatic(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getdata();
    console.log(stat);
  }, [array, locationArray]);

  useEffect(() => {
    const filter = () => {
      for (let i = 0; i < stat.length; i++) {
        if (!array.includes(stat[i].job_title)) {
          array.push(stat[i].job_title);
        }
      }
      for (let i = 0; i < stat.length; i++) {
        if (!locationArray.includes(stat[i].location)) {
          locationArray.push(stat[i].location);
        }
      }
    };
    filter();
  }, [stat]);

  // console.log(array);
  useEffect(() => {
    console.log(filterRole);
    console.log(filterLocation);
    const filteredData = async () => {
      try {
        if (filterRole === "None") {
          window.location.reload();
        }
        if (filterLocation === "None") {
          window.location.reload();
        }
        const res = await axios.get(
          `https://jobs-juzx.onrender.com/api/jobs?role=${filterRole}&location=${filterLocation}`
        );
        const data = setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    filteredData();
  }, [filterLocation, filterRole]);
  return (
    <div>
      <div className="w-full  p-4 bg-white border  shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between  mb-4">
          <h5 className="text-xl  font-bold leading-none text-gray-900 dark:text-white">
            Latest Postings
          </h5>
          {/* <label htmlFor="role-select"> Roles</label> */}
          <select
            onChange={(e) => setFilterRole(e.target.value)}
            className="rounded-md bg-slate-500 text-white p-0.5 w-24"
            id="role-select"
          >
            <option>None</option>
            {array.map((item) => {
              return <option key={item._id}>{item}</option>;
            })}
          </select>
          <select
            onChange={(e) => setFilterlocation(e.target.value)}
            className="rounded-md bg-slate-500 text-white p-0.5 w-24"
          >
            <option>None</option>
            {locationArray.map((item) => (
              <option key={item._id}>{item}</option>
            ))}
          </select>
        </div>
        {data.map((item) => (
          <div className="flow-root" key={item._id}>
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700 "
            >
              <JobCard data={item}></JobCard>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
