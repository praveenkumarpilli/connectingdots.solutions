"use client";
import BackgroundOverlay from "@/components/BackgroundOverlay";
import Banner from "@/components/Banner";
import Container from "@/components/Container";
import HeaderComponent from "@/components/header/HeaderComponent";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Services = [
  {
    id: 1,
    name: "Consulation",
  },
  {
    id: 2,
    name: "Design Development",
  },
  {
    id: 3,
    name: "Concept Development",
  },
  {
    id: 4,
    name: "Space Planning",
  },
  {
    id: 5,
    name: "3D Visualization",
  },
  {
    id: 6,
    name: "Lighting Design",
  },
  {
    id: 7,
    name: "Furniture Selection and Procurement",
  },
  {
    id: 8,
    name: "Project Management",
  },
  {
    id: 9,
    name: "Custom Design Elements",
  },
];

interface HoveredInterface {
  index: number;
  isHovered: boolean;
}

export default function Home() {
  const [isHovered, setIsHovered] = useState<HoveredInterface>({
    index: 0,
    isHovered: false,
  });

  const marqueeVariants = {
    animate: {
      x: [0, -1000], // Change -1000 to a larger number if the text is longer
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };

  const hoverEffectVariants = {
    initial: {
      y: "100%",
    },
    hover: {
      y: "20%",
      transition: {
        type: "linear",
        stiffness: 300,
        duration: 0.3,
      },
    },
  };

  return (
    <main className="">
      <Container className="bg-[url('https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/green-interior-modern-interior-living-room-style-with-soft-sofa-green-wall-3d-rendering.jpg')] bg-center bg-cover relative">
        <BackgroundOverlay />
        <HeaderComponent />
        <div className="relative">
          <h1>Build Locally</h1>
          <h1>Serve Globally</h1>
        </div>
      </Container>
      <Container className="my-[10%] text-slate-900">
        <div className=" border-b border-t-slate-500 w-4/6">
          <h1 className="font-bold text-9xl leading-24">Elevate Your</h1>
          <h1 className="font-bold text-9xl leading-24">Interiors</h1>
        </div>
        <div className="flex flex-col gap-y-24 justify-center w-full py-4 gap-16">
          <div className="flex justify-between">
            <p className="text-xl font-medium">
              Designing Interiors That Leave a Lasting Impression
            </p>
            <div className="flex items-center gap-1 underline underline-offset-8">
              <Link href={"/"}>
                <p className="font-normal text-xl ">All Services</p>
              </Link>
              <MdOutlineArrowOutward className="text-2xl" />
            </div>
          </div>
          <div className="mx-auto">
            <div className="grid grid-rows-3 grid-flow-col gap-x-[10rem] gap-y-2">
              {Services?.map((list) => {
                return (
                  <div key={list?.id} className="">
                    <div className="flex items-center gap-1">
                      <IoIosArrowForward />
                      <p className="font-normal text-md whitespace-nowrap">
                        {list.name}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between items-center w-4/6 mx-auto gap-5">
            <div className="flex flex-col w-4/6 gap-5">
              <h1
                className="text-8xl font-bold text-white"
                style={{
                  WebkitTextStrokeColor: "black",
                  WebkitTextStrokeWidth: "2px",
                }}
              >
                64
              </h1>
              <div className="border-t border-slate-200"></div>
              <p className="text-lg">Client around the world</p>
            </div>
            <div className="flex flex-col w-4/6 gap-5">
              <h1
                className="text-8xl font-bold text-white"
                style={{
                  WebkitTextStrokeColor: "black",
                  WebkitTextStrokeWidth: "2px",
                }}
              >
                128
              </h1>
              <div className="border-t border-slate-200"></div>
              <p className="text-lg">Client around the world</p>
            </div>
            <div className="flex flex-col w-4/6 gap-5">
              <h1
                className="text-8xl font-bold text-white"
                style={{
                  WebkitTextStrokeColor: "black",
                  WebkitTextStrokeWidth: "2px",
                }}
              >
                224k
              </h1>
              <div className="border-t border-slate-200"></div>
              <p className="text-lg">Client around the world</p>
            </div>
          </div>
        </div>
      </Container>
      <Banner className="h-[450px] bg-[url('https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-clean-lines-neutral-colors-natural-elements-design-concept-1-1300x650.jpg')] bg-fixed bg-contain relative overflow-hidden">
        <BackgroundOverlay />
        <motion.div
          animate="animate"
          variants={marqueeVariants}
          className="h-full flex justify-center items-center"
        >
          <motion.div
            className="text-9xl whitespace-nowrap text-transparent font-bold px-5"
            style={{
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "white",
            }}
          >
            Decoration
          </motion.div>
          <motion.div
            className="text-9xl whitespace-nowrap text-transparent font-bold px-5"
            style={{
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "white",
            }}
          >
            Interior Design
          </motion.div>
          <motion.div
            className="text-9xl whitespace-nowrap text-transparent font-bold px-5"
            style={{
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "white",
            }}
          >
            Modern Structure
          </motion.div>
          <motion.div
            className="text-9xl whitespace-nowrap text-transparent font-bold px-5"
            style={{
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "white",
            }}
          >
            Thinking outside of box
          </motion.div>
        </motion.div>
      </Banner>
      <Container className="my-[10%] text-slate-900">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="font-bold text-9xl leading-24">About Our Design</h1>
            <h1 className="font-bold text-9xl leading-24">Philosophy</h1>
          </div>
          <div className="border-t border-t-slate-200"></div>
          <p className="text-3xl font-medium">
            Your Vision, Our Design Expertise
          </p>
          <div className="flex justify-between gap-5 items-center w-full my-[10%]">
            {[1, 2, 3, 4]?.map((el) => {
              return (
                <div className="flex flex-col" key={el}>
                  <div className="flex flex-col gap-3">
                    <p className="text-2xl font-normal">Initial Consultation</p>
                    <p className="text-sm font-light">
                      The process begins with an initial consultation where a
                      representative from Inspired Interiors meets with the
                      client to discuss their project requirements, goals, and
                      vision.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <Container className="my-[10%] text-slate-900">
        <div className="flex flex-col gap-8">
          <div className="whitespace-nowrap">
            <h1 className="font-bold text-9xl leading-24">
              Meet the Masters of
            </h1>
            <h1 className="font-bold text-9xl leading-24">Interior Design</h1>
          </div>
          <div className="border-t border-t-slate-200"></div>
          <p className="text-3xl font-medium">
            One Team, Infinite Possiblities
          </p>
          <div className="flex justify-between items-center py-[10%] relative">
            {[1, 2, 3]?.map((el, i) => {
              return (
                <div
                  key={i}
                  className={`${i === 1
                      ? "absolute top-[12%] left-[50%] translate-x-[-50%]"
                      : "relative"
                    }`}
                >
                  <div
                    className="relative w-[350px] overflow-hidden"
                    onMouseEnter={() =>
                      setIsHovered({
                        index: i,
                        isHovered: true,
                      })
                    }
                    onMouseLeave={() =>
                      setIsHovered({
                        index: i,
                        isHovered: false,
                      })
                    }
                  >
                    <Image
                      className={`${isHovered?.isHovered && isHovered?.index === i
                          ? "scale-105 duration-500"
                          : ""
                        }`}
                      width={400}
                      height={400}
                      src={`/assets/t-${0 + "" + i}.jpg`}
                      alt=""
                    />
                    <motion.div
                      className="w-[350px] h-[170px] bg-white absolute bottom-0"
                      variants={hoverEffectVariants}
                      initial="initial"
                      animate={
                        isHovered?.isHovered && isHovered?.index === i
                          ? "hover"
                          : "initial"
                      }
                    >
                      <div className="flex flex-col gap-1 p-5">
                        <p className="text-xl font-medium">Boaz Dandu</p>
                        <p className="text-md font-light">
                          Full Stack Engineer
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <Container className="my-[25%] text-slate-900 relative">
        <div className="relative">
          <div className="flex items-center justify-end gap-1 underline underline-offset-8">
            <Link href={"/"}>
              <p className="font-medium text-xl ">Contact us</p>
            </Link>
            <MdOutlineArrowOutward className="text-2xl" />
          </div>
          <div className="flex flex-col gap-8">
            <div className="whitespace-nowrap">
              <h1 className="font-bold text-9xl leading-24">Get in Touch</h1>
            </div>
            <div className="border-t border-t-slate-200"></div>
            <p className="text-3xl font-medium">
              Building Relationships, One Conversation at a Time
            </p>
          </div>
        </div>
        <Banner className="bg-[url('https://themes.pixelwars.org/renovatio/demo-01/wp-content/uploads/sites/2/2023/06/modern-living-room-clean-lines-neutral-colors-natural-elements-design-concept-1-1300x650.jpg')] absolute my-10 w-screen left-0 h-4/6">
          <BackgroundOverlay />
          <div className="relative flex flex-col gap-5 justify-center items-center text-white h-full">
            <h1 className="text-7xl font-bold">Have a project in mind?</h1>
            <p className="text-3xl font-medium">Do not hesitate to say Hello</p>
            <button className="border-2 border-white rounded-3xl bg-transparent hover:bg-white duration-300 hover:text-black w-[180px] h-[70px] flex items-center gap-2 justify-center my-5">
              <p className="text-xl font-semibold">Let's Talk</p>
              <MdOutlineArrowOutward className="text-2xl" />
            </button>
          </div>
          <div className="relative">
            <iframe
              width="100%"
              height={"300"}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
            <div className="flex flex-col bg-white p-10 absolute top-5 right-10">
              <p>Hyderabad Office</p>
              <p>Ameerpet X - Road, SR Nagar</p>
              <p>Hyderabad, 500056</p>
            </div>
          </div>
        </Banner>
      </Container>
    </main>
  );
}
