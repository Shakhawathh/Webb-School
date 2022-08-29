import React, { useEffect, useState } from 'react';
import Course from "../Course/Course";
import { useQuery } from "react-query";

const Courses = () => {
    const { data: special, isLoading } = useQuery(["specialManage"], () =>
    fetch(`https://rocky-escarpment-87440.herokuapp.com/special`).then((res) =>
      res.json()
    )
  );
  if(isLoading){
    return <div className="mx-auto mt-16" id="preloaders"></div>;
  }
    return (
        <div>
            <div id='courses' className='p-10 bg-base-100  border-b border-neutral'>
                <h1 className='lg:text-4xl md:text-3xl mb-16 mt-8 text-2xl uppercase font-sub font-bold text-center'>Special Courses</h1>
                <div className='grid  sm:grid-cols-2 lg:grid-cols-3 gap-12 '>
                    {
                        special?.slice(0,3).reverse().map(course => <Course
                        key={course._id}
                        course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;