import React from 'react'
import "./nav.css";
export default function 
Nav(props) {
  return (
    <div className='main'>
        <div className='logo'>
            <h2>{props.logo}</h2>
        </div>
        <ul>
            <li><a href="###" className='act-color'>{props.li1}</a></li>
            <li><a href="###">{props.li2}</a></li>
            <li><a href="###">{props.li3}</a></li>
            <li><a href="###">{props.li4}</a></li>
            <li><a href="###">{props.li5}</a></li>
            <li><a href="###">{props.li6}</a></li>
            <li><a href="###">
              {props.li7} <i class="fa-solid fa-angle-down"></i></a>
                <ul>
                  <li><a href="####">{props.li7a}</a></li>
                  <li><a href="####">{props.li7b}</a></li>
                  <li><a href="####">{props.li7c}</a></li>
                  <li><a href="####">{props.li7d}</a></li>
                </ul>
            </li>
            <li><a href="###">{props.li8}</a></li>
            <li><button>{props.li9}</button></li>
        </ul>
        <div className='manu-icon'><i class="fa-solid fa-bars"></i></div>
    </div>
  )
}
