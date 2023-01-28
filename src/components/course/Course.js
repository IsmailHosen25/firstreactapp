import React from 'react'
import "./course.css";
export default function Course(props) {
  return (
    <div className='course'> 
        <div className='image'>
            <img src={props.courseimg}/>
        </div>
        <div className='course-about'>
          <div className='namefees'>
               <h3>{props.coursename}</h3>
               <p>{props.coursefees}</p>
          </div>
          <div className='about'>
            <h2>{props.coursehead}</h2>
            <p>{props.courseabout}</p>
            <hr/>
            <div className='teacher'>
              <img src={props.tutorimg}/>
              <p>{props.tutorname}</p>
            </div>
          </div>
        </div>
    </div>
  )
}
