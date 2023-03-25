import React from 'react';
import { useEffect, useState } from 'react';

import './App.css'
import Name from './components/Name';
import Show from './components/Show';
import Age from './components/Age';
import ClickTitle from './components/ClickTitle';
import AddAge from './components/AddAge';
import BtnShow from './components/BtnShow';

function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [cont, setCont] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${cont} vezes`;
  }, [cont]);

  return (
    <div className='content'>
      <div>
        <Show />
      </div>

      <Name setNome={setNome} />
      <Age setIdade={setIdade} />

      <div id='list'>
        <ul>
          <ClickTitle setCont={setCont} cont={cont} />
          <AddAge idade={idade} setIdade={setIdade} />
          <BtnShow idade={idade} nome={nome}/>        
        </ul>
      </div>
    </div>
  );
}

export default App;
