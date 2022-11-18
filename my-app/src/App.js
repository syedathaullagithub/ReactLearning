import {useState , useEffect} from 'react'
import './App.css';

function App() {
  const [state, setState] = useState('red')
  useEffect(() => {
    console.log('hhh')
  }, [state])

  const handleBtn = () => {
    setState(s => s === 'red' ? 'green' : 'red')
  }
  return (
    <div className="App">
      <p style={{color :state }}>{state}</p>
      <button onClick={handleBtn}>Click</button>
    </div>
  ); 
}

export default App;