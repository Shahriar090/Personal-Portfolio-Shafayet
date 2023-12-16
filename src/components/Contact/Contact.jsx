import contactImg from "../../assets/Contact/contact-img.avif";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const Contact = () => {
  // form ref
  const form = useRef();

  // send email function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6niuyk5",
        "template_9m3cbpj",
        form.current,
        "E9LXZxPlYpHSSOFlB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //   return div start
  return (
    <div className="section-container w-full h-auto min-h-screen bg-[#0c2461] text-slate-200 pt-14 px-8 md:px-8 lg:px-20">
      <section>
        <SectionTitle heading={"Let's Talk"}></SectionTitle>
      </section>
      <section className="main-content">
        <div className="parent-div flex flex-col md:flex-row lg:flex-row gap-5 pt-14 pb-10">
          {/* contact section image, address related topic */}
          <div className="child-one shadow-2xl p-4 w-full  md:w-full lg:w-3/6 ">
            <picture>
              <img
                src={contactImg}
                alt="Contact Image"
                className="w-full md:w-3/4 lg:w-3/6 rounded-lg opacity-80"
              />
            </picture>

            <div className="texts pt-5 flex flex-col  gap-4  text-lg md:text-2xl lg:text-2xl">
              <h1 className="flex gap-3 items-center">
                <GoPerson></GoPerson>Mohammad Shafayet Hossain
              </h1>
              <h2 className="flex gap-3 items-center">
                <FaLocationDot></FaLocationDot>Forskarbacken 03, Lappis,
                Stockholm
              </h2>
              <h2 className="flex gap-3 items-center">
                <HiOutlineMailOpen></HiOutlineMailOpen>
                shafayethossain957@gmail.com
              </h2>
              <h2 className="flex gap-3 items-center">
                <FaPhoneVolume></FaPhoneVolume>+33-745639099
              </h2>
            </div>
          </div>
          <div className="child-two w-full   md:w-full lg:w-3/6 shadow-2xl p-4">
            {/* contact form start from here */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-5"
            >
              <span className="block">Your Name</span>
              <input
                type="text"
                placeholder="Your Name"
                name="from_name"
                className="input input-bordered w-full  bg-slate-200 text-black"
              />
              {/* email */}
              <span className="block">Your Email</span>
              <input
                type="Your Email"
                placeholder="Your Email"
                name="from_email"
                className="input input-bordered w-full  bg-slate-200 text-black"
              />
              {/* subject */}
              <span className="block">Subject</span>
              <input
                type="text"
                placeholder="Your Subject"
                name="from_subject"
                className="input input-bordered w-full  bg-slate-200 text-black"
              />
              {/* message */}
              <span className="block">Message</span>
              <textarea
                className="textarea textarea-bordered textarea-lg w-full  bg-slate-200 text-black"
                placeholder="Your Message"
                name="message"
              ></textarea>

              <input
                type="submit"
                value="Sent"
                className="btn btn-outline text-slate-200 w-3/6  mx-auto hover:bg-slate-200 hover:text-slate-900 mt-2"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
