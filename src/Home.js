import React from 'react';
import Nav from "./components/Nav"
import "./home.css";
import aboutimg from "./image/about.jpg"
export default function Home() {
  return (
    <>
    <div className='header'>
    <Nav logo="MENTOR" li1="Home" li2="About" li3="Courses" li4="Trainers" li5="Events" li6="Pricing" li7="Drop Down" li7a="Drop Doen 1" li7b="Drop Doen 2" li7c="Drop Doen 3" li7d="Drop Doen 4" li8="Contact" li9="Get Started"/>
    <div className='banner'>
        <h1>Learnig Today,<br/>Leading Tomorrow</h1>
        <p>We are team of talented designers making websites with Bootstrap</p>
        <button className='btn'>Get Started</button>
    </div>
    </div>
    <div className='section-1'>
        <div className='left'>
           <h2>
                Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
            </h2>
            <p className='first'><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>
            <p><span className='rounded-circle'><i class="fa-solid fa-check"></i></span>  Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p><span className='rounded-circle'><i class="fa-solid fa-check"></i></span>  Duis aute irure dolor in reprehenderit in voluptate velit.</p>
            <p><span className='rounded-circle'><i class="fa-solid fa-check"></i></span>   Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
            <p className='last'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
        </div>
        <div className='right'>
             <img src={aboutimg}/>
        </div>
    </div>
     </>
  )
}
