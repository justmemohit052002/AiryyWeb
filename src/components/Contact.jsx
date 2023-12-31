import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-row w-full items-start">
      <div
        id="Desktop"
        className="overflow-hidden bg-black relative flex flex-row w-full font-['Inter'] items-start"
      >
        <div
          id="Ellipse"
          className="w-3/4 h-[1191px] bg-[linear-gradient(180deg,_#ffd600_0%,rgba(10,_10,_9,_0)_88%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat absolute top-[-20px] left-[630px] flex flex-col gap-8 items-start pt-60 pb-[476px] px-[337px] rounded-[50%]"
        >
          <img
            src="https://file.rendit.io/n/FlkYTPPEkRwfLJ1MKSN4.png"
            alt="Line"
            id="Line"
            className="w-5 h-0 origin-top-left rotate-[-41.19deg] absolute top-[500px] left-[1030.681640625px]"
          />
          <div className="relative flex flex-col ml-24 gap-8 w-5/6 font-['Inter'] items-start">
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
                <div className="bg-[#d9d9d9] mt-px w-2/5 h-16 rounded-lg" />
                <img
                  src="https://file.rendit.io/n/55wbrTvk0p9wjYdVeomm.svg"
                  alt="Rectangle2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 w-full items-start">
              <div id="Message" className="font-semibold leading-[16px] text-white">
                Message{" "}
              </div>
              <div className="bg-[#d9d9d9] relative flex-row justify-center w-full h-48 rounded-lg">
                <img
                  src="https://file.rendit.io/n/KidhD4Dc8Iec8u5xtU2z.svg"
                  alt="Line1"
                  id="Line1"
                  className="w-3 h-0 origin-top-left rotate-[-41.19deg] absolute top-48 left-[495.50390625px]"
                />
              </div>
            </div>
          </div>
          <button
            id="Button2"
            className="font-semibold leading-[18px] border-solid border-[#f6f9fc] bg-[#ffd600] relative flex flex-row justify-center ml-[220px] pt-4 w-1/3 h-12 cursor-pointer items-start border rounded-lg"
          >
            Submit
          </button>
        </div>
        <div
          id="Ellipse1"
          className="bg-[linear-gradient(73deg,_rgba(17,_16,_15,_0.3)_13%,rgba(238,_200,_0,_0)_82%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat relative flex flex-col gap-16 w-3/5 h-[1017px] items-start mt-[-93px] mb-[-92px] ml-[-163px] pt-56 pb-[269px] pl-48 rounded-[50%]"
        >
          <div className="flex flex-col gap-5 w-3/5 items-start mb-1 ml-48">
            <div
              id="GetInTouch"
              className="text-5xl font-['Franklin_Gothic_Demi'] tracking-[6.48] uppercase text-white ml-4"
            >
              Get in Touch{" "}
            </div>
            <div className="text-justify text-xl font-medium uppercase text-[#d3d0d0]">
              Have questions or
              {"  "}
              need assistance?
              {"  "}
              We're
              {"  "}
              here to <br />
              help.
              {"  "}
              Contact our friendly
              {"  "}
              team at
              {"  "}
              AiRYY Rides for <br />
              any inquiries, support or partnership opportunities.
            </div>
          </div>
          <img
            src="https://file.rendit.io/n/mPsUgRQRQ5AnbXoiZvb4.png"
            alt="Rectangle"
            className="ml-48"
          />
          <img
            src="https://file.rendit.io/n/CYL6aNzkpmmBpcEt2jeX.svg"
            alt="Group"
            className="ml-[203px]"
          />
        </div>
      </div>
    </div>

  )
}

export default Contact
