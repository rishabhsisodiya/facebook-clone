import React from 'react';

import Story from "./Story"
import "./StoryReel.css"
const StoryReel = (props) => {
  return (
    <div className="storyReel">
      <Story 

        image = "https://www.biography.com/.image/t_share/MTQyMDA0NDYzNDQyMzM4ODc4/gettyimages-512304736jpg.jpg"
        profilePic ="https://cdn.vox-cdn.com/thumbor/4Jt1PO8mqjDix-hMnwCgLH7rwfM=/0x0:2040x1360/1400x1400/filters:focal(722x96:1048x422):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/51810311/DSC01391.0.0.jpg" 
      	title = "Mark"
      />
      <Story 
        image ="https://static.toiimg.com/photo/msid-71772335/71772335.jpg?158044" 
      	profileSrc= "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/12/01/629180-srk-120217.jpg"
      	title = "ShahRukh Khan"
      />
      <Story 
        image ="https://www.biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg" 
      	profileSrc= "https://www.psu.com/wp/wp-content/uploads/2020/07/PS5-5-4-1024x576.jpg"
      	title = "Jeff"
      />
      <Story 
        image ="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg" 
      	profileSrc= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1Bu4iWw5zfTzn8uA_PedokWiLzkU5k9F4xg&usqp=CAU"
      	title = "Elon Musk"
      />
    </div>
  )
}

export default StoryReel;