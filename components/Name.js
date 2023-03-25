import React from 'react'

const Name = ({setNome}) => {
  return (
    <div className='content'>
        <label htmlFor="nome">Informe seu nome</label>
        <input type="text" id='nome' className='input'  onChange={(e) => setNome(() => e.target.value)} placeholder="ex: 'nome'"/>
    </div>
  )
}

export default Name