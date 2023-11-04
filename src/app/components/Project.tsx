import React from "react";
import Image from "next/image";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import Link from "next/link";
import image from "./crypto.png";
import quiz from "./shop.png";
const Project = () => {
  const projects = [
    {
      name: "Crypto App",
      description:
        "CryptoApp is a cryptocurrency dashboard built using react js. The technologies used also consists of chart js, mui and framer motion. The data fetching is done using Axios and the Public API we’re using is from Coingecko. The website serves as a platform for people to view all details of the top 100 cryptocurrencies in the world and allows them to search, filter, compare and view details of specific cryptocurrencies. ",
      image: image,
      github: "https://github.com/hqasmei/thankful-thoughts",
      link: "https://thankfulthoughts.io/",
    },
    {
      name: "E-commerce App",
      description:"The E-commerce Web Application is a comprehensive online shopping platform built using React and Node.js, designed to offer users a seamless and feature-rich shopping experience. This project reflects my expertise in full-stack development, showcasing my ability to create a user-friendly and dynamic e-commerce platform.",
      image: quiz,
      github: "https://github.com/hqasmei/platoio",
      link: "https://platoio.com/register",
    },
  ];
  return (
    <section className="mt-16">
      <div className="flex justify-center md:my-28">
        <div className="text-2xl">
          <div>
            <h1 className="my-10 text-center font-bold text-4xl">Projects</h1>
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-28">
        {projects.map((item, index) => (
          <div className="flex flex-col items-center animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12  ">
<div className={item.name === 'Quiz App' ? "w-1/2  flex items-center" : "w-1/2 flex items-center"}>
              {" "}
              <Image
                src={item.image}
                alt=""
                width={1000}
                height={1000}
                className="rounded-xl shadow-xl hover:opacity-70 h-1/2 "
              />
            </div>
            <div className={item.name=='Quiz App'? "w-1/2": "w-1/2"}>
              <h1 className="text-4xl font-bold mb-6"> {item.name}</h1>
              <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                {item.description}
              </p>
              <div className="flex flex-row align-bottom space-x-4">
                <Link href={item.github} target="_blank">
                  <BsGithub
                    size={30}
                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                  />
                </Link>
                <Link href={item.link} target="_blank">
                  <BsArrowUpRightSquare
                    size={30}
                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
0;
