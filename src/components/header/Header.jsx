import React from 'react'
import "./header.css"
import fbg from "../../assets/fbg.jpg"

export default function Header() {
  return (
    <div className='header'>
<div className="headerTitles">
    <span className="headerTitleSm">EXPIRIENCES & IDEAS</span>
    <span className="headerTitleLg">BLOG</span>
</div>
<img className="headerImg" src={fbg} alt=""  />
    </div>
  )
}
