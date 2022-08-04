import React from "react";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Courses from "../Course/Courses";
import Admission from "./Admission/Admission";
import Banner from "./Banner/Banner";
import Navigation from "./Navigation";
import Review from './Review/Review'
import Reviews from "./Reviews/Reviews";
import JobCourses from "./JobCourses/JobCourses";
import CoursesTabs from "./CoursesTabs";
import Hero from "./Hero/Hero";
import Promotional from "./Promotional";
import FooterTwo from "../Shared/FooterTwo";
import Question from "./Question/Question";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Navigation></Navigation>
      <Banner></Banner>
      <Courses></Courses>
      <Admission></Admission>
      <JobCourses></JobCourses>
      <CoursesTabs></CoursesTabs>
      <Reviews></Reviews>
      <Review></Review>
      <Promotional></Promotional>
      <Question></Question>
      <FooterTwo></FooterTwo>
      
      {/* messenger chat */}
      <MessengerCustomerChat
    pageId="101878912628102"appId="3150275291906230"
  />
    </div>
  );
};

export default Home;