import React from "react";
import contactImg from "../../assets/Contact/contact-img.avif";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="section-container w-full h-auto min-h-screen bg-[#0c2461] text-slate-200 pt-14 px-8 md:px-8 lg:px-20">
      <section>
        <SectionTitle heading={"Let's Talk"}></SectionTitle>
      </section>
      <section className="main-content">
        <div className="parent-div flex flex-col md:flex-col lg:flex-row gap-4 pt-14 items-center">
          <div className="child-one w-full md:w-full lg:w-3/6 flex flex-col gap-5 ">
            <picture>
              <img
                src={contactImg}
                alt="Contact Image"
                className="w-full md:w-3/4 lg:w-3/4 rounded-lg"
              />
            </picture>
            <div className="texts">
              <div className=" flex flex-col gap-4 text-start text-xl md:text-2xl lg:text-2xl">
                <h1>Mohammad Shafayet Hossain</h1>
                <h2 className="flex gap-2">
                  <FaLocationDot></FaLocationDot>Forskarbacken 03, Lappis,
                  Stockholm
                </h2>
                <h2 className="flex gap-2">
                  <TfiEmail></TfiEmail>shafayethossain957@gmail.com
                </h2>
                <h2 className="flex gap-2">
                  <FaPhoneVolume></FaPhoneVolume>+33-745639099
                </h2>
              </div>
            </div>
          </div>
          <div className="child-two w-full  md:w-full lg:w-3/6 ">
            <form className="flex flex-col gap-5">
              <span className="block">Your Name</span>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered w-full "
              />
              {/* email */}
              <span className="block">Your Email</span>
              <input
                type="Your Email"
                placeholder="Type here"
                name="email"
                className="input input-bordered w-full "
              />
              {/* subject */}
              <span className="block">Subject</span>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="input input-bordered w-full "
              />
              {/* message */}
              <span className="block">Message (Optional)</span>
              <textarea
                className="textarea textarea-bordered textarea-lg w-full"
                placeholder="Your Message"
                name="message"
              ></textarea>

              <input
                type="submit"
                value="Sent"
                className="btn btn-outline text-slate-200 w-3/12 mx-auto hover:bg-slate-200 hover:text-slate-900"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
