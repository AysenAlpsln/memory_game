import React from 'react';
import { useSelector } from 'react-redux';

function Score() {

  const score = useSelector(state => state.cards.score);
  const matchCount = useSelector(state => state.cards.matchCount);

  const handleReplay = () => {
    window.location.reload();
  }
  
  return (
    <div className='score_container'>
      <div className='score_area'>
        <p className='score_title'>Score</p>
        <p className='score'>{score}</p>
      </div>
      <div className={"button_area" + (matchCount === 15 ? ' finish' : '')}>
        <button className='replay' onClick={handleReplay}>REPLAY</button>
      </div>
    </div>
  )
}

export default Score