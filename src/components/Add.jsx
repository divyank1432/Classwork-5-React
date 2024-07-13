import React from 'react'
import './Add.css'

function Add({addBtnClicked}) {
  
  return (
    <div className='btn'>
      <button className='addBtn' onClick={addBtnClicked}>+</button>
    </div>
  )
}

export default Add