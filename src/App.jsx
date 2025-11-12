import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const products = [
    { id: 1, name: 'Microfono' },
    { id: 2, name: 'Webcam' },
    { id: 3, name: 'Mouse' },
    { id: 4, name: 'Tastiera' },
    { id: 5, name: 'Cuffie' }
  ]

  return (
    <>
      <div className='container'>
        <h1>Lista articoli</h1>

        {/* todo - lista di articoli */}
        <div className='list-group'>
          {products.map(product => (

            <div key={product.id} className='list-group-item'>{product.name}</div>

          ))}
        </div>

      </div>
    </>

  )
}

export default App
