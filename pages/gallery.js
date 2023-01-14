import React, { useState } from 'react'
import Image from 'next/image'
import TinderCard from "react-tinder-card";
const Gallery = () => {
  const [people, setPeople] = useState([
    {
      url: "/gallery1.jpg",
    },
    {
      url: "/gallery2.jpg",
    },
    {
      url: "/gallery3.jpg",
    },
    {
      url: "/gallery4.jpg",
    },
    {
      url: "/gallery5.jpg",
    },
    {
      url: "/gallery6.jpg",
    },
    {
      url: "/gallery7.jpg",
    }
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };
  const outofFrame = (name) => {
    console.log(name + " left the  screen!");
  };
  return (
      <div className="flex flex-wrap justify-center items-center">
        {people.map((person) => {
        return  <TinderCard
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outofFrame(person.name)}
          >
            <div className='glass-blur p-2 m-2 flex w-72 '>
              <img src={`${person.url}`} className="w-full" />
            </div>
          </TinderCard>;
        })}
      </div>
  

  )
}

export default Gallery
