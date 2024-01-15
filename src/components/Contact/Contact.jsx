import contactImg from "../../assets/Contact/contact-img.avif";
import SectionTitle from "../../SectionTitle/SectionTitle";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";

const Contact = () => {
  // form ref
  const form = useRef();

  // send email function
  const sendEmail = (e) => {
    e.preventDefault();

    // Checking if required fields are empty
    const { from_name, from_email, from_subject, message } =
      form.current.elements;
    if (
      (!from_name.value || !from_email.value,
      !from_subject.value,
      !message.value)
    ) {
      toast.warning("Please Fill In All Required Fields.");
      return;
    }

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
          toast.success("Message Sent Successfully");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Error Sending Message, Please Try Again");
        }
      );
  };

  //   return div start
  return (
    <div className="section-container w-full h-auto  bg-[#111122] text-slate-200  px-5 md:px-8 lg:px-20">
      <ToastContainer position="top-center" />
      <section>
        <SectionTitle heading={"Let's Talk"}></SectionTitle>
      </section>
      {/* main content */}
      <section className="main-content">
        <div className="parent-div flex flex-col md:flex-row lg:flex-row gap-5 pt-5 pb-10">
          {/* contact section image, address related topic */}
          <div className="child-one shadow-2xl p-4 w-full  md:w-full lg:w-3/6 ">
            <picture>
              <img
                src={contactImg}
                alt="Contact Image"
                className="w-full md:w-3/4 lg:w-3/6 rounded-lg opacity-80"
              />
            </picture>

            <div className="texts pt-5 flex flex-col  gap-4  text-sm md:text-2xl lg:text-2xl">
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
              <span className="block">Your Name *</span>
              <input
                type="text"
                placeholder="Your Name"
                name="from_name"
                className="input input-bordered w-full  bg-slate-300 text-black"
              />
              {/* email */}
              <span className="block">Your Email *</span>
              <input
                type="Your Email"
                placeholder="Your Email"
                name="from_email"
                className="input input-bordered w-full  bg-slate-300 text-black"
              />
              {/* subject */}
              <span className="block">Subject *</span>
              <input
                type="text"
                placeholder="Your Subject"
                name="from_subject"
                className="input input-bordered w-full  bg-slate-300 text-black"
              />
              {/* message */}
              <span className="block">Message *</span>
              <textarea
                className="textarea textarea-bordered textarea-lg w-full  bg-slate-300 text-black"
                placeholder="Your Message"
                name="message"
              ></textarea>

              <input
                type="submit"
                value="Sent"
                className="btn btn-outline rounded-full text-slate-300 hover:bg-[#F8B90C] w-3/6  mx-auto   mt-2"
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
