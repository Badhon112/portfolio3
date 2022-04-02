// // import React from "react";
// // import "./Contact.css"

// // export default function Contact() {
// //   return (
// //     <div id="Contact" className="contact ">
// //       <div className="flex  itemr">
// //         <div className="left bg-slate-200 flex-1">Hello</div>
// //         <div className="right bg-gray-500 flex-1">Hello</div>
// //       </div>
// //     </div>
// //   );
// // }

// import React from 'react'
// import "./Contact.css"

// export default function Contact() {
//   return (
//     <div id='Contact' className='contact '>
//       <div className='flex justify-between items-center pl-96'>
//       <div className='left flex flex-1 bg-slate-300'> Hello </div>
//       <div className='right flex-1 flex '> Hello </div>
//       </div>
//     </div>
//   )
// }
// import React from 'react'
// export default function  Contact() {
//   return (
//     <div className='flex justify-around contact min-h-screen items-center' id='Contact' >
//       <div className=''>
//         <span className='text-5xl text-orange-600  font-semibold italic'>Contact Me</span>
//       </div>
//       <div className=' mt-10 mr-40' >
//         <form action="" className='flex flex-col space-y-10'>
//           <input type="text" name="name" placeholder='Name' id="" className='rounded-lg border-2 border-yellow-600 p-3 w-80'/>
//           <input type="email" name="name" placeholder='Email' id="" className='rounded-lg border-2 border-yellow-600 p-3 w-80' />
//           <textarea name="message" placeholder='Message' id="" cols="30" rows="10" className='rounded-lg border-2 border-yellow-600 p-3 h-24 w-80'></textarea>
//         </form>
//       </div>

//     </div>
//   )
// }

import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="flex justify-center mb-20 mt-10 contact space-x-10 " id="Contact">
      <div className="flex w-96 mr-9 mt-24 flex-col">
        <span className="text-4xl font-semibold text-lime-600 italic">Contact Me</span>
        <span className="mt-10 text-lg font-light">Need to get in touch with me or contact with me? Then fill those input I am Very Responsive</span>
      </div>
      <div className=" h-fit border-2  rounded-lg shadow-lg shadow-gray-300">
        <div className="flex flex-col justify-center items-center space-y-2 border-b-2 border-gray-500">
          <span className="text-4xl p-3 font-semibold italic text-lime-600 ">
            Contact Me
          </span>
        </div>

        <form action="">
          <div className="p-3 justify-between">
            <input
              className="p-2 mx-2 border-b-4 border-lime-500 rounded-lg outline-none"
              type="text"
              placeholder="First Name"
              id=""
              name="firstname"
            />
            <input
              className="p-2 border-b-4 border-lime-400 rounded-lg outline-none"
              type="text"
              placeholder="Last Name"
              id=""
              name="lastname"
            />
          </div>
          <div>
            <div className="p-3 space-y-3 flex flex-col ">
              <input
                className="p-2 mx-2 border-b-4 border-lime-400 rounded-lg outline-none"
                type="email"
                placeholder="Email Address"
                name="user_email"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="p-2 mx-2 border-b-4 border-lime-500 rounded-lg h-40 resize-none outline-none"
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
              className="w-32 mb-5 py-2 rounded-lg bg-lime-600  mt-2  border-2 font-bold text-white cursor-pointer "
            />
          </div>
        </form>
      </div>
    </div>
  );
}
