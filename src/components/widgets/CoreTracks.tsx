import React from "react";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import QuarterBox from "../shared/QuarterBox";

const coreTracksData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1,
  },
  {
    header: "Quarter II",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2,
  },
  {
    header: "Quarter III",
    description:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3,
  },
];

const CoreTracks = () => {
  const header = `Core Courses \n (Common in All Specializations)`;

  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        <div className="max-w-screen-md">
          <h4 className="text-[#00616c] font-bold text-lg mt-4">
            Program of Studies
          </h4>
          <h2 className="text-4xl font-bold whitespace-pre-line max-w-screen-md sm:text-5xl">
            {header}
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Every participant of the program will start by completing the
            following three core courses.
          </p>
          <div className="mt-8">
            <Button text={"Enroll Now"} />
          </div>
        </div>

        {/* Render each quarter dynamically */}
        <div className="flex flex-1 flex-col md:flex-row items-center justify-center mt-12 max-w-screen-xl">
          {coreTracksData.map((item, i) => (
         <QuarterBox key={item.number} description={item.description} header={item.header} number={i + 1} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;
