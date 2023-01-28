import React from 'react';
import "./trainer.css";
export default function Trainers(props) {
  return (
    <div className='trainer-section'>
        <div className='trainer-img'>
              <img src={props.trainerimg}/>
        </div>
        <div className='trainer-about'>
             <div className='nameandcours'>
                    <h2>{props.name}</h2>
                    <p>{props.course}</p>
             </div>
             <div className='para'>
                   <p>{props.para}</p>
             </div>
        </div>
    </div>
  )
}
