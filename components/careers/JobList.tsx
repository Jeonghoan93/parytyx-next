"use client";

import Link from "next/link";
import React from "react";

interface Job {
  title: string;
  location: string;
  category: string;
  type: string;
  contract: string;
}

interface JobListProps {
  jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  const groupedJobs: { [category: string]: Job[] } = {};

  const positionId = "positionId";

  jobs.forEach((job) => {
    if (!groupedJobs[job.category]) {
      groupedJobs[job.category] = [];
    }
    groupedJobs[job.category].push(job);
  });

  return (
    <div className="max-w-3xl mx-auto p-5 bg-white">
      {Object.keys(groupedJobs).map((category, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold my-2">{category}</h2>
          <hr className="mb-4" />
          {groupedJobs[category].map((job, jIndex) => (
            <div key={jIndex} className="py-2 mb-5">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[13pt] font-bold text-gray-700 mb-2">
                    {job.title.length > 20
                      ? job.title.substring(0, 20) + "..."
                      : job.title}
                  </span>

                  <div className="flex flex-row gap-1 text-[8pt] font-bold text-gray-600">
                    <span className="mb-1">
                      {job.location.length > 13
                        ? job.location.substring(0, 13) + "..."
                        : job.location}
                    </span>
                    <span className="mb-1">{job.type}</span>
                    <span className="mb-3">{job.contract}</span>
                  </div>
                </div>

                <Link href={`/careers/positions/${positionId}`}>
                  <div className="bg-gray-900 px-5 py-1 rounded cursor-pointer">
                    <span className="text-[11pt] text-white font-semibold">
                      APPLY
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default JobList;
