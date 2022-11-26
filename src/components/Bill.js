import React from 'react'

const Bill = () => {
  return (
    <div className='bill-content'>
      <h1>Bill</h1>
      <div className='bill-input'>
        <input type='number' id='bill' className='bill' placeholder='0' />
      </div>
    </div>
  )
}

export default Bill