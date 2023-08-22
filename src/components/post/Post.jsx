import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className='post'>
      <img 
      src="https://images.unsplash.com/photo-1621244249243-436b79b5eea8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb3dlcmluZyUyMGJhY2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
      alt="" 
      className="postImg"
       />
       <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
Feed Your Mind
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
       </div>
       <p className='postDesc'>
       I am called Onyia Eunice holding an HND in nursing and 
wishing to further to Bachelor Degree while working. I am called Onyia Eunice holding an HND in nursing and 
wishing to further to Bachelor Degree while working. I am called Onyia Eunice holding an HND in nursing and 
wishing to further to Bachelor Degree while working. I am called Onyia Eunice holding an HND in nursing and 
wishing to further to Bachelor Degree while working.
       </p>
    </div>
  )
}
