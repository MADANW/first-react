import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/madanw" target="_blank">
          <img src="/nobg.png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://linkedin.com/in/madanw" target="_blank">
          <img src="/nobg.png" className="logo react" alt="React logo" /> {/* I'm too lazy to change the names in both the .jsx and .css files. Imagine they both say madanw logo. */}
        </a>
      </div>
      <h1>Welcome to my first react + vite project</h1>
      <h2>I'm just trying stuff out</h2>
      <p> I never knew that web dev would be this cool! (I'm changing some of the code months after this project was first created. -08/19/25) </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the logos to go to my github and linkedin! (please connect)
      </p>
    </>
  )
}

export default App
