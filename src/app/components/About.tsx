import React from "react";
import Image from "next/image";
function About() {
  const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Python" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "Jupyter Notebooks" },
  ];

  return (
    <section>
      <div className="flex justify-center md:my-28">
        <div className="text-2xl">
          <div className="my-10 text-center font-bold text-4xl">
            About Me
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className=" flex flex-col justify-center">
          <div className="text-2xl font-bold py-5">
            <h1>Know About Me</h1>
          </div>
          <div className="md:w-3/4">
            <p>
              Hi, my name is viswadeep and I am a{" "}
              <span className="font-bold">highly ambitious</span> ,
              <span className="font-bold"> self-motivated</span>, and driven
              software engineer based in Hyderabad, India.
            </p>
          </div>
          <br />
          <div className="md:w-3/4">
            <p>
              I graduated from CVR college of engineering, Hyderabad 2019 with a
              B.tech in Civil Engineering and have been working in the IT sector
              ever since.
            </p>
          </div>
          <br />
          <div className="md:w-3/4">
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to making YouTube videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
          </div>
          <br />
          <div className="md:w-3/4">
            <p>
              I believe that you should{" "}
              <span className="font-bold  text-teal-500">
                never stop growing
              </span>{" "}
              and thats what I strive to do, I have a passion for technology
              and a desire to always push the limits of what is possible. I am
              excited to see where my career takes me and am always open to new
              opportunities. 🙂
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          {" "}
          <div className="text-2xl font-bold py-5">My Skills</div>
          <div className="  flex flex-wrap flex-row ">
            {skills.map((item, index) => (
              <div key={index} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                {item.skill}
              </div>
            ))}
          </div>
          <Image
              src="/skills.avif"
              alt=""
              width={325}
              height={325}
              className="mt-5 rounded-md"
            />

        </div>
      </div>
    </section>
  );
}

export default About;
