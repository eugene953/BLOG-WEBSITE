import React from 'react'
import "./settings.css"
import Sidebar from '../../components/sidebar/Sidebar'
//import me from "../../assets/me.png"
export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingswrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle"> Update Your Account</span>
          <span className="settingsDeleteTitle"> Delete Account</span>
          </div>
          <form action="" className="settingsForm">
            <label htmlFor="">Profile Picture </label>
          <div className="settingsPP">
            <img 
            src="https://images.unsplash.com/photo-1515268064940-5150b7c29f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
             alt="" 
             className="settingsImg" />
          
          <label htmlFor="fileInput">
           <i className="settingsPPIcon fa-solid fa-circle-user"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}} className="" />
         </div>
         <label >Username</label>
         <input type="text" placeholder="eugene" />
         <label >Email</label>
         <input type="email" placeholder="nfouaeugene953@gmail.com" />
         <label >Password</label>
         <input type="Password" />
         <button className="settingsSubmit">Update</button>
          </form>
      </div>
   <Sidebar/>
    </div>
  )
}
