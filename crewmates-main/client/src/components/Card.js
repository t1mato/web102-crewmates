import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { supabase } from '../client' 
import crewmate2 from '../components/crewmate2.png'


const Card = (props) =>  {

  const [count, setCount] = useState(0)
  const updateCount = async (event) => {
    event.preventDefault()

    await supabase 
      .from('Crewmates')
      .update({ betCount: count + 1 })
      .eq('id', props.id)

    setCount((count) => count + 1);
  }

  return (
    <>
      <div className="Card">
        <Link to={'info/' + props.id}><img src={crewmate2} alt="crewmate" height="30%" width="30%" /></Link>
        <h6 className="title">Name of Crewmate: {props.title}</h6>
        <h6 className="author">Speed of Crewmate: {props.author} mph</h6>
        <h6 className="description">Color of Crewmate: {props.description}</h6>
        <Link to={'edit/' + props.id}>
          <button className="betButton">Edit Crewmate</button>
        </Link>
      </div>
    </>
  );
};

export default Card;