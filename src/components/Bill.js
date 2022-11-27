import React from 'react'

const Bill = () => {
  return (
    <div className='bill-content'>
      <h1>Bill</h1>
      <div className='bill-input'>
        <input type='number' id='bill' className='bill' placeholder='0' />
      </div>

      {/* Tip Selection */}
      <h2>Select Tip %</h2>
      <div className='tips'>
        <button>5%</button>
        <button>10%</button>
        <button>15%</button>
        <button>25%</button>
        <button>50%</button>
        <input type='number' className='custom' placeholder='Custom' />
      </div>
      {/* Tip Selection */}

    </div>
  )
}

export default Bill