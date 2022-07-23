import React from "react";
const Navigation = () => {
  return (
    <div className="lg:mx-10 mx-3">
      <div className="my-10">
        <h1 className="lg:lg:text-2xl md:text-xl text-md md:lg:text-2xl text-md text-xl text-black font-semibold text-center">
          We have everything you <br /> need to learn anything
        </h1>
        <p className="lg:text-xl text-md mb-5 mt-2 text-center text-gray-500">
          Choose your topic from our vast library to get started
        </p>
      </div>
      <div className="grid grid-cols-2 lg:gap-5 lg:grid-cols-4 gap-4 bg-gray-100 px-3 py-3 rounded-xl">
        <a
          href="#store"
          class="hover:border hover:border-primary border border-white hover:text-primary text-lg bg-base-100 rounded-xl text-black"
        >
          {" "}
          <div className="">
            {" "}
            <p className="justify-center text-center lg:flex md:flex py-6 lg:py-0">
              <i class="fa-solid fa-book-open text-4xl lg:pr-3 md:pr-3 lg:block md:block text-sky-500 lg:py-6 md:py-6"></i><br />
              <span className="lg:pt-7 md:pt-7">Book Store</span>
            </p>
          </div>
        </a>
        <a
          href="#admission"
          class="hover:border hover:border-primary border border-white hover:text-primary text-lg bg-base-100 rounded-xl text-black"
        >
          {" "}
          <div className="">
            {" "}
            <p className="justify-center text-center lg:flex md:flex py-6 lg:py-0">
            <i class="fa-solid fa-graduation-cap text-4xl lg:pr-3 md:pr-3 lg:block md:block text-green-500 lg:py-6 md:py-6"></i><br />
              <span className="lg:pt-7 md:pt-7">Admission</span>
            </p>
          </div>
        </a>
        <a
          href="#job"
          class="hover:border hover:border-primary border border-white hover:text-primary text-lg bg-base-100 rounded-xl text-black"
        >
          {" "}
          <div className="">
            {" "}
            <p className="justify-center text-center lg:flex md:flex py-6 lg:py-0">
            <i class="fa-solid fa-briefcase text-4xl lg:pr-3 md:pr-3 lg:block md:block text-purple-500 lg:py-6 md:py-6"></i><br />
              <span className="lg:pt-7 md:pt-7">Job Exam</span>
            </p>
          </div>
        </a>
        <a
          href="#courses"
          class="hover:border hover:border-primary border border-white hover:text-primary text-lg bg-base-100 rounded-xl text-black"
        >
          {" "}
          <div className="">
            {" "}
            <p className="justify-center text-center lg:flex md:flex py-6 lg:py-0">
            <i class="fa-solid fa-rocket text-4xl lg:pr-3 md:pr-3 lg:block md:block text-orange-500 lg:py-6 md:py-6"></i><br />
              <span className="lg:pt-7 md:pt-7">Courses</span>
            </p>
          </div>
        </a>
      </div>
      <div class="hidden flex flex-col w-full lg:flex-row mt-14 mb-8">
      <h1 className="text-3xl font-bold lg:mx-8">
          Webb School is the great platform for distance learning.
        </h1>
        <div class="lg:divider divide-primary lg:divider-horizontal"></div>
        <p className="text-lg mt-4">Here is our amazing teaching method thad suits for you. Read our features and know the best.</p>
      </div>
      <div className="grid grid-cols-2 lg:gap-5 md:grid-cols-4 lg:grid-cols-5 lg:mx-8 my-8">
        <div class="card bg-base-100 transform transition duration-500 hover:scale-110">
          <div class="card-body p-0 mt-9">
            <div class="avatar mx-auto lg:my-3 mb-3">
              <div class="w-18 rounded bg-[#D65B40] shadow-[#D65B40] shadow-lg">
                <i class="fa-solid fa-briefcase lg:text-2xl md: text-xl text-md text-white p-3"></i>
              </div>
            </div>
            <h2 class="text-md lg:text-lg text-center">
              An Easy Study Aproach
            </h2>
          </div>
        </div>
        <div class="card bg-base-100 transform transition duration-500 hover:scale-110">
          <div class="card-body p-0 mt-9">
            <div class="avatar mx-auto lg:my-3 mb-3">
              <div class="w-18 rounded bg-[#59D7FC] shadow-[#59D7FC] shadow-lg">
                <i class="fa-solid fa-school-flag lg:text-2xl md: text-xl text-md text-white p-3"></i>
              </div>
            </div>
            <h2 class="text-md lg:text-lg text-center">
            An Accredited School
            </h2>
          </div>
        </div>
        <div class="card bg-base-100 transform transition duration-500 hover:scale-110">
          <div class="card-body p-0 mt-9">
            <div class="avatar mx-auto lg:my-3 mb-3">
              <div class="w-18 rounded bg-[#8070FE] shadow-[#8070FE] shadow-lg">
                <i class="fa-solid fa-comment-dollar lg:text-2xl md: text-xl text-md text-white p-3"></i>
              </div>
            </div>
            <h2 class="text-md lg:text-lg text-center">
            An Easy Payment Credit
            </h2>
          </div>
        </div>
        <div class="card bg-base-100 transform transition duration-500 hover:scale-110 md:col-span-3/2">
          <div class="card-body p-0 mt-9">
            <div class="avatar mx-auto lg:my-3 mb-3">
              <div class="w-18 rounded bg-[#00AAA0] shadow-[#00AAA0] shadow-lg">
                <i class="fa-solid fa-brain lg:text-2xl md: text-xl text-md text-white p-3"></i>
              </div>
            </div>
            <h2 class="text-md lg:text-lg text-center">
              An Skill Development Platform
            </h2>
          </div>
        </div>
        <div class="card bg-base-100 transform transition duration-500 hover:scale-110 col-span-2 lg:col-span-1 md:col-start-2 md:col-end-4">
          <div class="card-body p-0 mt-9">
            <div class="avatar mx-auto lg:my-3 mb-3">
              <div class="w-18 rounded bg-[#77E13C] shadow-[#77E13C] shadow-lg">
                <i class="fa-solid fa-leaf lg:text-2xl md: text-xl text-md text-white p-3"></i>
              </div>
            </div>
            <h2 class="text-md lg:text-lg text-center">
              An Amazing Study Environment
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
