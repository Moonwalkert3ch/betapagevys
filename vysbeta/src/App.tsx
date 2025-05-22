import { useState } from 'react'
import { clsx } from 'clsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const isEven = count % 2 === 0

  return (
    <>
      <div className="flex gap-4 justify-center my-6">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-3xl font-bold text-center">Vite + React + Tailwind</h1>

      <h2 className="text-red-500 text-2xl font-bold">This should be red text</h2>

      <h1 className="text-3xl font-bold text-red-500">Tailwind is working!</h1>

      <div className="card text-center my-6">
        <button
          onClick={() => setCount((count) => count + 1)}
          className={clsx(
            'px-4 py-2 rounded text-white font-semibold transition',
            isEven ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'
          )}
        >
          Count is {count}
        </button>
        <p className="mt-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs text-center text-sm text-gray-600">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
