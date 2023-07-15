import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const isDesktop = window.innerWidth > 768; // Adjust the breakpoint as needed

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_chu1503",
        "template_90dohpu",
        {
          from_name: form.name,
          to_name: "Shiv Akash",
          from_email: form.email,
          to_email: "shivakash2003@gmail.com",
          message: form.message,
        },
        "W0mg14nvrpmrC4pU5"
      )
      .then(() => {
        setLoading(false);
        toast.success(
          "Thank you. I will get back to you as soon as possible!",
          {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 5000,
          }
        );

        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);
        toast.error("Ahh, something went wrong. Please try again.", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 5000,
        });
      });
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#252424] p-8 rounded-2xl w-full"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name *"
              className="bg-[#020302] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email *"
              className="bg-[#020302] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type anything here..."
              className="bg-[#020302] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-[#020302] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className={`xl:flex-1 xl:h-auto md:h-[550px] h-[350px] contact-earth-canvas`}
      >
        <EarthCanvas />
      </motion.div>

      {isDesktop ? null : (
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 flex justify-center items-center xl:h-auto md:h-[550px] h-[350px] contact-image"
        >
          <div
            className="rounded-full overflow-hidden w-[300px] h-[300px]"
            style={{ maxWidth: "100%" }}
          >
            <img
              src="https://cdn.discordapp.com/attachments/894801439992475768/1129842946401894420/mobile_world.png"
              alt="Mobile view image"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </motion.div>
      )}

      <ToastContainer />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
