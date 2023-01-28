import React from 'react'
import Trainer from "./Trainers"
import  TrainerData from './trainers.json';
import "./trainer.css";
export default function Maintrainer() {
  return (
    <div className='trainers'>
      {TrainerData.map((item,index) => <Trainer key={index} trainerimg={item.img} name={item.name} course={item.course} para={item.para}/>)}
    </div>
  )
}
