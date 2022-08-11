import React from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useQuery } from "react-query";
import CourseSyllabus from "./CourseSyllabus";

const AllCourseView = () => {
  const { uname } = useParams();
  const { data: language } = useQuery(["languageCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/language`).then(
      (res) => res.json()
    )
  );
  const { data: job } = useQuery(["jobCourse"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/job`).then(
      (res) => res.json()
    )
  );
  const { data: admission } = useQuery(["admissionCourses"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/admission`).then(
      (res) => res.json()
    )
  );
  const courseData = admission?.find((allcard) => allcard.uname === uname)
  || language?.find((allcard) => allcard.uname === uname) || job?.find((allcard) => allcard.uname === uname);
  // const courseIndex = courseData?.file[0].details[0].fileName;
  // console.log(courseIndex);
  
  return (
    <div className="hero bg-base-100 my-10">
      <div className="flex justify-center lg:w-full w-11/12 gap-10 flex-col-reverse lg:flex-row-reverse md:flex-row-reverse items-start">
        <div className="card lg:w-1/3 md:w-2/3 bg-[#354795] lg:sticky lg:top-20 md:sticky md:top-20 shadow-xl text-white">
          <div className="card-body">
            <h2 className="text-2xl pb-2">
              Everything that is included in this course
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <p>
                <i className="fa-solid fa-video pr-2 text-[#efad1e]"></i>120H
                Videos
              </p>
              <p>
                <i className="fa-solid fa-users pr-2 text-[#efad1e]"></i>758
                Students
              </p>
              <p>
                <i className="fa-solid fa-headset pr-2 text-[#efad1e]"></i>Mentor
                Support
              </p>
              <p>
                <i className="fa-solid fa-circle-question pr-2 text-[#efad1e]"></i>
                Quizzes
              </p>
              <p>
                <i className="fa-solid fa-certificate pr-2 text-[#efad1e]"></i>
                Certificate
              </p>
              <p>
                <i className="fa-solid fa-clock pr-2 text-[#efad1e]"></i>6 Month
              </p>
            </div>
            <div className="flex text-lg font-bold bg-[#495CA9] p-4 my-4 rounded-xl justify-between">
              <div>
                <p>Course Price</p>
              </div>
              <div>
                <p className="text-2xl">৳{courseData?.price}</p>
              </div>
            </div>
            <Link to={`/checkout/${uname}`}>
              <button className="text-lg font-bold p-4 rounded-xl bg-[#efad1e] w-full text-blue-900 hover:bg-secondary hover:text-white">
                Buy Course
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-6/12 md:w-full">
          <h1 className="text-4xl font-bold text-warning">{courseData?.name}</h1>
          <p className="py-3 text-lg">
            {courseData?.desc}
          </p>
          <div className="lg:h-80 h-48 md:h-96 border-4 rounded-lg border-neutral w-full">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              controls
              light={true}
              url={courseData?.introvdo}
              playing
            />
          </div>
          <h1 className="text-2xl mt-10 mb-1">Instructor:</h1>
          <div className="w-full border border-neutral rounded-md mb-4 grid lg:grid-cols-2 md:grid-cols-2">
            <div className="p-3 flex items-center gap-3">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src={courseData?.instructorimg} />
                </div>
              </div>
              <div>
                <p className="text-lg">{courseData?.instructor}</p>
                <p>Ctg, Bangladesh</p>
              </div>
            </div>
            <div className="p-3 flex items-center gap-3">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src={courseData?.instructorbimg} />
                </div>
              </div>
              <div>
                <p className="text-lg">{courseData?.instructorb}</p>
                <p>Ctg, Bangladesh</p>
              </div>
            </div>
          </div>
          <h1 className="text-2xl mt-10 mb-1">
            What will you learn from this course
          </h1>
          <div className="w-full border border-neutral rounded-md">
            <div className="border-b border-neutral px-5 py-6">
              <p className="text-lg">
                <i className="fa-solid text-success fa-check mr-4"></i>{courseData?.topica}{" "}
              </p>
              <p className="text-lg">
                <i className="fa-solid text-success fa-check mr-4"></i>{courseData?.topicb}{" "}
              </p>
              <p className="text-lg">
                <i className="fa-solid text-success fa-check mr-4"></i>{courseData?.topicc}{" "}
              </p>
              <p className="text-lg">
                <i className="fa-solid text-success fa-check mr-4"></i>{courseData?.topicd}{" "}
              </p>
            </div>
            <div className="px-5 py-6">
              <p className="text-lg font-bold mb-2">About this course</p>
              <p className="text-lg mb-3">
                {courseData?.abouta}
              </p>
              <p className="text-lg mb-3">
                {courseData?.aboutb}
              </p>
              <p className="text-lg mb-3">
                {courseData?.aboutc}
              </p>
            </div>
          </div>
          <h1 className="text-2xl mt-10 mb-1">Course Syllabus</h1>
          <div className="card rounded-md w-full border border-neutral">
            {courseData?.file ? (
              <div className="card-body">
              {
                courseData?.file.map(course => <CourseSyllabus
                  key={course.id}
                  course={course}
                  ></CourseSyllabus>)
              }
              </div>
            ):(<div>Coming Soon</div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourseView;
