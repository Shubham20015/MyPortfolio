import SocialBadge from "./SocialBadge";
import { motion } from "framer-motion";

export default function ContactPage() {
  const pageAnimation = {
    enter: {
      x: "-100vh",
      opacity: 0,
    },
    in: {
      x: 0,
      opacity: 1,
    },
    out: {
      x: "100vh",
      opacity: 0,
    },
    transition: {
      duration: 0.5,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const subject = e.target[2].value;
    const message = e.target[3].value;

    fetch("https://formsubmit.co/ajax/shubham_jain20@outlook.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Username: username,
        subject: subject,
        email: email,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Message Sent successfully 👍");
        e.target.reset();
      })
      .catch(() =>
        alert(
          "Something wrong happend ❎ \n Try Again later after some time 🤚"
        )
      );
  };

  return (
    <motion.div
      variants={pageAnimation}
      initial="enter"
      animate="in"
      exit="out"
      className="-sm:absolute flex justify-between w-full h-full md:-z-10 -sm:flex-col"
    >
      <div className="ml-5 w-3/5 -sm:w-full -sm:ml-0">
        <h1 className="text-gray-100 text-4xl p-4 -sm:p-3 font-medium ml-5 mt-3">
          Connect with me
        </h1>
        <form
          className="px-10 pb-10 -sm:pb-2 text-gray-200"
          onSubmit={handleSubmit}
        >
          <div className="flex -sm:flex-col">
            <div className="flex flex-col mr-16 w-1/2 -sm:w-full">
              <label htmlFor="name" className="uppercase py-3 text-lg">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="p-3 input-box outline-none"
                required
              />
            </div>
            <div className="flex flex-col w-1/2 -sm:w-full">
              <label htmlFor="email" className="uppercase py-3 text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="p-3 input-box outline-none"
                required
              />
            </div>
          </div>
          <div className="my-4 flex flex-col">
            <label htmlFor="subject" className="uppercase py-3 text-lg">
              Subject
            </label>
            <input
              type="text"
              name="_subject"
              className="p-3 input-box outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="uppercase py-3 text-lg">
              Message
            </label>
            <textarea
              name="message"
              className="p-3 input-box outline-none"
              required
            />
          </div>
          <input type="hidden" name="_captcha" value="false" />
          <button className="my-6 px-8 py-2 btn btn-4 text-black" type="submit">
            Submit
          </button>
        </form>
      </div>
      <SocialBadge />
    </motion.div>
  );
}
