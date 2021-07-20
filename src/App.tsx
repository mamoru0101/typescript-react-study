import React, {useState} from 'react';
import Hello from './components/Hello'
const App = () => {

  const [name, setName] = useState<string>('Peter')

  return (
    <div>
      <Hello message={name}/>
      <input type="text" onChange={(e)=>{setName(e.target.value)}} />
    </div>
  );
}

export default App;
