import React from 'react'
import Courses from './Course'
import CourseData from './course.json';
import "./course.css";
export default function main() {
  return (
    <div className='course-section'>
    <div className='heading'>
      <h3>COURSE</h3>
      <h1>POPULAR COURSES</h1>
    </div>
    <div className='courses'>
        { CourseData.map((item,index) => <Courses key={index} courseimg={item.CourseImg} coursename={item.courseName} coursefees={item.courseFees} coursehead={item.courseHead} courseabout={item.courseAbout} tutorimg={item.tutorImg} tutorname={item.tutorName}/>)}
    </div>
  </div>
  )
}
