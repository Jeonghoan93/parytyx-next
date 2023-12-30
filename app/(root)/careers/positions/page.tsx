"use client";

import JobList from "@/components/careers/JobList";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const PositionsPage = () => {
  const [showRemote, setShowRemote] = useState(false);

  return (
    <>
      <div className="bg-black text-gray-50 p-6 flex flex-col items-center">
        <div style={{ maxWidth: "400px" }} className="text-center">
          <span className="font-semibold text-[25pt]">
            {jobList.length} Jobs across all teams and all locations
          </span>
        </div>
      </div>

      <div className="bg-gray-100 z-0 py-10 px-5 flex flex-col items-center">
        {/* Input Fields */}
        <div className="flex flex-col lg:flex-row gap-4 w-full lg:max-w-3xl">
          {/* Job Titles */}
          <div className="w-full lg:w-1/3">
            <input
              type="text"
              id="jobTitle"
              placeholder="Title"
              className="w-full px-6 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Job Category */}
          <div className="relative w-full lg:w-1/3">
            <input
              type="text"
              id="locations"
              placeholder="Department"
              className="w-full px-6 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 pl-6"
            />
            <span className="absolute cursor-pointer inset-y-0 right-6 flex items-center">
              <AiOutlineDown />
            </span>
          </div>

          {/* All Locations */}
          <div className="relative w-full lg:w-1/3">
            <input
              type="text"
              id="locations"
              placeholder="Location"
              className="w-full px-6 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 pl-6"
            />
            <span className="absolute cursor-pointer inset-y-0 right-6 flex items-center">
              <AiOutlineDown />
            </span>
          </div>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center mt-6 w-full lg:max-w-3xl">
          <span className="text-lg font-semibold mr-3">
            Show Only Remote Jobs
          </span>
          <div
            className={`relative inline-block w-10 align-middle select-none transition duration-200 ease-in ${
              showRemote ? "bg-blue-400" : "bg-gray-400"
            } rounded-xl cursor-pointer`}
            onClick={() => setShowRemote(!showRemote)}
          >
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              checked={showRemote}
              onChange={() => setShowRemote(!showRemote)}
              className="opacity-0 w-0 h-0"
            />
            <div
              className={`toggle-dot absolute top-0.5 left-0.5 transform-gpu ${
                showRemote ? "translate-x-4" : ""
              } transition-transform duration-300 ease-in-out w-5 h-5 bg-gray-200 border-2 rounded-full`}
            ></div>
          </div>
        </div>
      </div>

      <JobList jobs={jobList} />
    </>
  );
};

export default PositionsPage;

const jobList = [
  {
    title: "Business Development Manager",
    location: "STOCKHOLM, SWEDEN",
    category: "BUSINESS DEVELOPMENT",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Sales Executive",
    location: "STOCKHOLM, SWEDEN",
    category: "BUSINESS DEVELOPMENT",
    type: "FULL-TIME",
    contract: "ON-SITE",
  },
  {
    title: "Partnership Coordinator",
    location: "STOCKHOLM, SWEDEN",
    category: "BUSINESS DEVELOPMENT",
    type: "PART-TIME",
    contract: "HYBRID",
  },
  {
    title: "Lead Generation Specialist",
    location: "STOCKHOLM, SWEDEN",
    category: "BUSINESS DEVELOPMENT",
    type: "FULL-TIME",
    contract: "ON-SITE",
  },
  {
    title: "Account Manager",
    location: "STOCKHOLM, SWEDEN",
    category: "BUSINESS DEVELOPMENT",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Sales Operations Analyst",
    location: "STOCKHOLM, SWEDEN",
    category: "BUSINESS DEVELOPMENT",
    type: "FULL-TIME",
    contract: "ON-SITE",
  },
  {
    title: "Software Engineer",
    location: "STOCKHOLM, SWEDEN",
    category: "IT",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Backend Developer",
    location: "STOCKHOLM, SWEDEN",
    category: "IT",
    type: "FULL-TIME",
    contract: "ON-SITE",
  },
  {
    title: "Frontend Developer",
    location: "STOCKHOLM, SWEDEN",
    category: "IT",
    type: "PART-TIME",
    contract: "HYBRID",
  },
  {
    title: "System Administrator",
    location: "STOCKHOLM, SWEDEN",
    category: "IT",
    type: "FULL-TIME",
    contract: "ON-SITE",
  },
  {
    title: "Network Engineer",
    location: "STOCKHOLM, SWEDEN",
    category: "IT",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Security Specialist",
    location: "STOCKHOLM, SWEDEN",
    category: "IT",
    type: "FULL-TIME",
    contract: "ON-SITE",
  },
  {
    title: "Accountant",
    location: "BERLIN, GERMANY",
    category: "ACCOUNTING",
    type: "FULL-TIME",
    contract: "ON-SITE",
  },
  {
    title: "Technical Accounting Specialist",
    location: "STOCKHOLM, SWEDEN",
    category: "ACCOUNTING",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Technical Accounting Specialist",
    location: "STOCKHOLM, SWEDEN",
    category: "ACCOUNTING",
    type: "HYBRID",
    contract: "",
  },
  {
    title: "2nd Line Operational Risk Manager: Third Party",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "AML Data Analyst",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Business Data Analyst - Credit",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Credit Risk Analyst",
    location: "BERLIN, GERMANY",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Financial Controller",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Financial Controller",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Financial Risk Manager",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Recoveries Senior Manager",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "PartyX UK Collections & Recoveries Senior Manager",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Product Analyst",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Product Analyst",
    location: "BERLIN, GERMANY",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Risk Manager",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Senior Analyst",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Senior Analyst",
    location: "BERLIN, GERMANY",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Senior Analyst",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Senior Analyst - Partner Success Team",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Senior Analyst - Partner Success Team",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Senior Cash Manager - Treasury",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Senior Cash Manager - Treasury",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Senior Credit Risk Analyst",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "ON-SITE",
  },
  {
    title: "Senior Data Analyst - Customer Service",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Senior Product Analyst",
    location: "STOCKHOLM, SWEDEN",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
  {
    title: "Senior Product Analyst",
    location: "BERLIN, GERMANY",
    category: "ANALYTICS",
    type: "FULL-TIME",
    contract: "HYBRID",
  },
];
