"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0zqifmo",
        "template_y22vs43",
        formData,
        "lG3AmMgXExhdJmOID",
      )
      .then((result) => {
        toast.success("Message sent successfully!");
      })
      .catch((error) => {
        toast.error("Failed to send message, please try again later.");
      });
  };

  return (
    <section className="">
      <div className="mx-auto max-w-screen-md rounded-lg bg-[#fff] px-4 py-8">
        <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-accent md:text-4xl">
          Contact Us
        </h2>
        <p className="mb-8 text-center text-xs font-light text-gray-500 sm:text-lg lg:mb-10">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form onSubmit={sendEmail} className="space-y-4">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-0">
            <div className="w-full md:w-[47%]">
              <label
                htmlFor="from_name"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Your Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                onChange={handleInputChange}
                className="block w-full rounded-lg bg-gray-50 p-2.5 text-sm shadow-sm"
                required
              />
            </div>
            <div className="w-full md:w-[47%]">
              <label
                htmlFor="reply_to"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Your Email
              </label>
              <input
                type="email"
                id="reply_to"
                name="reply_to"
                onChange={handleInputChange}
                className="block w-full rounded-lg bg-gray-50 p-2.5 text-sm shadow-sm"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              onChange={handleInputChange}
              className="block w-full rounded-lg bg-gray-50 p-2.5 text-sm shadow-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              onChange={handleInputChange}
              className="block w-full rounded-lg bg-gray-50 p-2.5 text-sm shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white"
          >
            Send message
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
