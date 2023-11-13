import React from 'react'

function Score() {
  return (
    <div className='score_container'>
      <div className='score_area'>
        <p className='score_title'>Your score is:</p>
        <p className='score'>10</p>
      </div>
      <div className='button_area'>
        <button className='replay'>REPLAY</button>
      </div>
    </div>
  )
}

export default Score