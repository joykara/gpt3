import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin'>
      <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati porro, quo provident officiis consequuntur autem repellat libero itaque voluptatem enim tenetur vero, id impedit reprehenderit. Enim quia recusandae modi quisquam!" />
      </div>

    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
      </div>

    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati porro, quo provident officiis consequuntur autem repellat " />
      <Feature title="Knowledgebase" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati porro," />
      <Feature title="Education" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati porro, quo provident officiis consequuntur autem " />
    </div>
    
  </div>
  )
}

export default WhatGPT3