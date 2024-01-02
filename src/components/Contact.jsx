import React from "react";

const Contact = () => {
  return (
    <div id='Contact' className="flex flex-row w-full items-start">
      <div
        id="Desktop"
        className="overflow-hidden bg-black relative flex flex-row w-full font-poppins items-start"
      >
        <div
          id="Ellipse"
          className="w-3/4  h-[1091px] bg-[linear-gradient(180deg,_#ffd600_0%,rgba(10,_10,_9,_0)_88%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-[-0px] left-[630px] flex flex-col gap-8 items-start pt-60 pb-[476px] px-[337px] rounded-[50%]"
        >
          <div className="relative flex flex-col ml-24 gap-8 w-5/6 font-poppins items-start">
            <div className="flex flex-col gap-5 w-full items-start">
              <div className="flex flex-row justify-between w-2/3 items-start">
                <div className="font-semibold leading-[16px] text-white mb-px">
                  Name *
                </div>
                <div className="font-semibold leading-[16px] text-white mt-px">
                  E-mail *
                </div>
              </div>
              <div className="flex flex-row gap-12 w-full items-start">
                <input
                  type="text"
                  className="bg-[#d9d9d9] text-black mt-px w-2/5 h-16 rounded-lg"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="bg-[#d9d9d9] text-black mt-px w-2/5 h-16 rounded-lg"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 w-full items-start">
              <label
                htmlFor="message"
                className="font-semibold leading-[16px] text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="bg-[#d9d9d9] text-black w-full h-48 rounded-lg resize-none"
                placeholder="Your Message"
              />
            </div>
          </div>
          <button
            id="Button2"
            className="font-semibold leading-[18px] text-center text-black border-solid border-[#f6f9fc] bg-[#ffd600] relative flex flex-row justify-center ml-[220px] py-3 text-bold w-1/3 h-12 cursor-pointer items-start border rounded-lg"
          >
            Submit
          </button>
        </div>
        <div
          id="Ellipse1"
          className="bg-[linear-gradient(73deg,_rgba(17,_16,_15,_0.3)_13%,rgba(238,_200,_0,_0)_82%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat relative flex flex-col gap-16 w-3/5 h-[1017px] items-start mt-[-93px] mb-[-92px] ml-[-163px] pt-56 pb-[269px] pl-48 rounded-[50%]"
        >
          <div className="flex flex-col gap-5 w-3/5 font-poppins items-start mb-1 ml-48">
            <div
              id="GetInTouch"
              className="text-5xl font-poppins tracking-[6.48] uppercase text-white "
            >
              Get in Touch.{" "}
            </div>
            <div className="text-wrap w-full text-xl font-poppins font-medium uppercase text-[#d3d0d0]">
              Have questions or need assistance?We'rehere tohelp.Contact our
              friendly team at AiRYY Rides for any inquiries, support or
              partnership opportunities.
            </div>
          </div>

          <iframe
            className="w-96 ml-40 h-96 rounded-[2rem]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.467957738305!2d75.86182427385859!3d22.687931523086643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd038adfe389%3A0x2aa0548bdd308fea!2sAiRYY%20Rides!5e0!3m2!1sen!2sin!4v1704033687769!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          <img
            src="https://file.rendit.io/n/CYL6aNzkpmmBpcEt2jeX.svg"
            alt="Group"
            className="ml-[203px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
