import React from 'react';
import Score from './Score';
import Card from './Card';

function Main() {
  return (
    <div className='main_container'>
      <div className='header'>
        <div className='title_container'>
          <p>MemoryGame</p>
        </div>
        <Score />
      </div>
      <Card />
      
      
    </div>
  )
}

export default Main