import React from 'react'
import "./write.css";

export default function Write() {
  return (
    <div className='write'>
        <img 
        src="https://images.unsplash.com/photo-1455156218388-5e61b526818b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
         alt="" 
         className="writeImg" />
      <form className='writeForm'>
<div className="writeFormGroup">
    <label htmlFor='fileinput'>
    <i className="writeIcon fa-regular fa-plus"></i>
</label>
<input type="file" className=""  id='fileinput' style={{display:"none"}}/>
    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />

</div>
<div className="writeFormGroup">
    <textarea placeholder="Tell your story..."  type="text" name="" id="" cols="30" rows="10" className="writeInput writeText"></textarea>

</div>
<button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
