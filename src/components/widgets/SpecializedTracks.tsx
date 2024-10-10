"use client"
import React, { useState } from "react";
import Wrapper from "@/components/shared/Wrapper";
import QuarterBox from "../shared/QuarterBox";
import Image from "next/image";
import metaverse from "@/assets/image/metaverse.webp"
import ai from "@/assets/image/ai.webp"
import cloud from "@/assets/image/cloud.webp"
import ambient from "@/assets/image/ambient.webp"
import genomics from "@/assets/image/genomics.webp"
import network from "@/assets/image/network.webp"


const programsData=[
  {
    slug:"web3",  // slugs means alternate of id
    header:"Web 3.0 (Blockchain) and Metaverse Specialization",
    description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image:metaverse,
    quarters:[
      {
        header:"Quarter IV",
    description:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
    number:4
      },
      {
        header:"Quarter V",
    description:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",

    number:5
      }
    ]
  },
  {
    slug:"ai",
    header:"Artificial Intelligence (AI) and Deep Learning Specialization",
    description:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    image:ai,
    quarters:[
      {
        header:"Quarter IV",
    description:"AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
    number:4
      },
      {
        header:"Quarter V",
    description:"AI-361: Deep Learning and MLOps",
    number:5
      }
    ]
  },
  {
    slug:"cloud",
    header:"Cloud-Native Computing Specialization",
    description:"The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    image:cloud,
    quarters:[
      {
        header:"Quarter IV",
    description:"CN-351: Certified Kubernetes Application Developer (CKAD)",
    number:4
      },
      {
        header:"Quarter V",
    description:"CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
    number:5
      }
    ]
  },
  {
    slug:"ambious",
    header:"Ambient Computing and IoT Specialization",
    description:"The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    image:ambient,
    quarters:[
      {
        header:"Quarter IV",
    description:"AC-351: Ambient Computing with Voice Assistants and Matter Devices",
    number:4
      },
      {
        header:"Quarter V",
    description:"AC-361: Embedded Programming using C and Rust",
    number:5
      }
    ]
  },
  {
    slug:"genomics",
    header:"Genomics and Bioinformatics Specialization",
    description:"Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    image:genomics,
    quarters:[
      {
        header:"Quarter IV",
    description:"Bio-351: Python for Biologists",
    number:4
      },
      {
        header:"Quarter V",
    description:"Bio-361: Bioinformatics with Python",
    number:5
      }
    ]
  },
  {
    slug:"network",
    header:"Network Programmability and Automation Specialization",
    description:"More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image:network,
    quarters:[
      {
        header:"Quarter IV",
    description:"NPA-351: CCNA 200-301 Certification",
    number:4
      },
      {
        header:"Quarter V",
    description:"NPA-361: Network Programmability and Automation",
    number:5
      }
    ]
  }
]



const SpecializedTracks = () => {
  const [selectedItem, setSelectedItem] = useState("web3");

  const selectedItemData = programsData.find(
    (item) => item.slug === selectedItem
  );

  return (
    <section className="mt-20">
      <Wrapper>
        {/* Header */}
        <div>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Specialized Tracks:
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            After completing the first three quarters, the participants will
            select one or more specializations consisting of two courses each.
          </p>
        </div>

        {/* Parent div */}
        <div className="flex mt-10 gap-8 flex-col-reverse lg:flex-row">
          {/* Left content */}
          <div className="shadow-xl sticky top-20 rounded-xl border py-8 px-5 basis-9/12 max-h-fit">
            <h4 className="text-[#00616c] font-semibold text-lg mt-4 mb-2">
              Specialized Track
            </h4>
            <h3 className="text-3xl font-bold mb-3">{selectedItemData?.header}</h3>
            <p className="text-lg text-slate-600 mt-4">
              {selectedItemData?.description}
            </p>
            <button className="bg-transparent border border-[#00616c] p-2 rounded px-4 mb-5 mt-4 font-medium text-[#00616c] text-lg hover:bg-slate-100 flex items-center gap-x-1">
              Learn More
              <svg
                viewBox="0 0 24 24"
                className="w-5"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                ></path>
              </svg>
            </button>

            {/* Quarters */}
            <div className="flex flex-col sm:flex-row">
              {selectedItemData?.quarters.map((quarter) => (
                <QuarterBox
                  key={quarter.number}
                  header={quarter.header}
                  description={quarter.description}
                  number={quarter.number}
                  haveBorder={false}
                />
              ))}
            </div>
          </div>

          {/* Right content div */}
          <div className="basis-7/12 space-y-5 cursor-pointer">
            {programsData.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedItem(item.slug)}
                className={`flex p-4`}
              >
                <div className="px-3">
                {/* Image Section */}
                  <div className="w-40 rounded">
                    <Image
                      src={item.image}
                      alt={item.header}
                      width={184}
                      height={112}
                      objectFit="cover"
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div>
                  <h4 className="text-[#00616c] font-semibold text-lg mt-4 mb-2">
                    Specialized Track
                  </h4>
                  <h3 className="text-xl font-bold mb-3">{item.header}</h3>
                </div>
              </div>
          
            
        ))}
        </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
