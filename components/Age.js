import React from 'react'

const Age = ({setIdade}) => {
  return (
    <div className='content'>
    <label htmlFor="idade">Informe sua idade</label>
    <input className='input' min={0} max={113} type="number" id='idade' onChange={(e) => setIdade(e.target.valueAsNumber)} placeholder="ex: '0'" />
    </div>
  )
}

export default Age