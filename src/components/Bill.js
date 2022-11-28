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
      {/* End Tip Selection */}

      {/* People */}
      <div className='people'>
        <div className='people__heading'>
          <h2>Number of People</h2>
          <h2 className='error'>Can't be zero</h2>
        </div>
        <input type='number' className='people__field' placeholder='0' /> 
      </div>
      {/* End People */}

    </div>
  )
}

export default Bill