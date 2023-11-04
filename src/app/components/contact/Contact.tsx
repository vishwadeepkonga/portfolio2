import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Mailicon from "./mailicon";
import PhoneIcon from "./PhoneIcon";
import Fbicon from "./Fbicon";
import Twitter from "./twitter";
import Instagram from "./instagram";
import Linkedin from "./Linkedin";
const Contact = () => {
  return (
    <div className="border-2 border-orange-500 mt-16 rounded-lg ">
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center ">Lets Connect</h1>
      <div className="flex justify-between  mt-16">
        <div className="flex flex-col  gap-10  w-1/2">
          <div className="flex gap-2">
            <div>
              <Mailicon />
            </div>
            <h1> vishwadeepkonga99@gmail.com</h1>
          </div>
          <div className="flex gap-2">
            <div>
              <PhoneIcon />
            </div>
            <h1>6305937132</h1>
          </div>
          <div className="flex gap-4">
            <Fbicon/>
            <Twitter/>
            <Instagram/>
            <Linkedin/>
          </div>
        </div>
        <div className=" w-1/2 flex flex-col gap-3 ">
        <label>Name</label>
          <input type="text" name="message" className="w-full border-2 border-black-100" />
            <label>Email</label>
          <input type="text" name="message" className="w-full border-2 border-black-100" />
          <label>Message</label>
          <input type="text" name="message" className="w-full h-32 border-2 border-black-100 " />
          <button className="bg-blue-500 text-white rounded-lg">submit</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
