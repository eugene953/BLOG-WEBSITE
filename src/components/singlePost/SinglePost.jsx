import React from 'react'
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img 
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
         alt="" 
         className="singlePosting" />
         <h1 className="singlePostTitle">
            Enjoy Nature
           <div className="singlePostEdit">
           <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
           <i className="singlePostIcon fa-solid fa-trash"></i>
            </div> 
         </h1>
<div className="singlePostInfo">
    <span className="singlePostAuthor">
        Author:<b>Nfoua Eugene</b>
    </span>
    <span className="singlePostDate">1 hour ago</span>
</div>
<p className='singlePostDesc'>
Nature is a source of inspiration and
 creativity. Artists, writers, and musicians
  have long drawn inspiration from its beauty
   and serenity. Nature's landscapes, colors, 
   and patterns have influenced countless 
   works of art and literature. It evokes a 
   sense of wonder, inviting us to contemplate
    the mysteries of the universe and our
     place within it.Spending time in nature
has profound benefits for human well-being.
 It offers solace and tranquility, providing 
 an escape from the fast-paced modern world.
  Immersing oneself in nature can reduce
   stress, improve mental clarity, and promote
    a sense of peace. Nature has the power to 
    heal and rejuvenate, offering a respite 
    from the pressures of daily life.
Nature also teaches us valuable lessons. 
It reminds us of the cycles of life, the 
importance of adaptation and resilience, and 
the need for balance and harmony. It encourages
 us to appreciate the simple joys and beauty 
 of the world around us. Nature's vastness and
  timelessness put human existence into 
  perspective, reminding us of our 
  interconnectedness with all living things.

</p>
      </div>
    </div>
  )
}
