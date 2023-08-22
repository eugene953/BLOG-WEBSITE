import React from 'react'
import "./sidebar.css"
import eu from "../../assets/eu.jpg"

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <p className="sidebarTitle1">ABOUT ME</p>
        <img src={eu} alt="" className="" />
        <p className='introText'>
          I am Nfoua Eugene an intern in Summit Tech. 
          Hoping to acquire skills in software developement.
        </p>

        <div className="sidebarItems">
          <p className="sidebarTitle2">CATEGORIES</p>
          <div className="sidebarList">
            <div className="sideListItemone">
              <p className="sideListItem">Life</p>
              <p className="sideListItem">Music</p>
              <p className="sideListItem">Style</p>
            </div>
            <div className="sideListItemtwo">
              <p className="sideListItem">Sport</p>
              <p className="sideListItem">Tech</p>
              <p className="sideListItem">Cinema</p>
            </div>
          </div>
        </div>

        <div className="sidebarItem">
          <p className="sidebarTitle3">FOLLOW US</p>
          <div className="sidebarSocial">
            <i className="sideIcon fa-brands fa-square-facebook"></i>
            <i className="sideIcon fa-brands fa-square-pinterest"></i>
            <i className=" sideIcon fa-brands fa-square-instagram"></i>
            <i className="sideIcon fa-brands fa-square-twitter"></i>
          </div>
        </div>
      </div>


    </div>
  )
}
