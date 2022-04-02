import React from "react";
import "./Contact.css";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";

export default function Contact() {
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.send(
  //     "service_0ahpfbn",
  //     "template_2s53cw7",
  //     e.target,
  //     "template_2s53cw7"
  //   ).then((res)=>{
  //     console.log(res);
  //     // window.location.reload()
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5qj9tci",
        "template_0pi9hgj",
        e.target,
        "cU7mxWReqrguhKu1I"
      )
      .then((res) => {
        console.log(res);
        window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className="flex justify-center mb-20 mt-10 contact space-x-10 "
      id="Contact"
    >
      <div className="flex w-96 mr-9 mt-24 flex-col">
        <span className="text-4xl font-semibold text-lime-600 italic">
          Contact Me
        </span>
        <span className="mt-10 text-lg font-light">
          Need to get in touch with me or contact with me? Then fill those input
          I am Very Responsive
        </span>
      </div>
      <div className=" h-fit border-b-4 border-r-2  border-lime-500  rounded-lg shadow-lg shadow-gray-300">
        <div className="flex flex-col justify-center items-center space-y-2  ">
          <span className="text-4xl p-3 font-semibold italic text-lime-600 ">
            Contact Me
          </span>
        </div>

        <form action="" onSubmit={sendEmail}>
          <div className="p-3 justify-between">
            <input
              className="p-2 mx-2 border-b-4 border-lime-500 rounded-lg outline-none "
              type="text"
              placeholder="First Name"
              id=""
              name="firstname"
            />
            <input
              className="p-2 border-b-4 border-lime-500 rounded-lg outline-none "
              type="text"
              placeholder="Last Name"
              id=""
              name="lastname"
            />
          </div>
          <div>
            <div className="p-3 space-y-3 flex flex-col ">
              <input
                className="p-2 mx-2 border-b-4 border-lime-500 rounded-lg outline-none"
                type="email"
                placeholder="Email Address"
                name="user_email"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="p-2 mx-2 border-b-4 border-lime-500 rounded-lg h-40 resize-none outline-none "
                id=""
                cols="10"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div className=" w-96 flex flex-col items-center justify-center text-center mx-5">
            <input
              type="submit"
              value="Send"
              className="w-32 py-2 rounded-lg bg-lime-600  mt-2  border-2 font-bold text-white cursor-pointer "
            />
          </div>
        </form>
          <p className="text-xs mb-5 text-center"><b>Note:</b> If Page Reload then Your email was send</p>
      </div>
    </div>
  );
}
