import { useState } from 'react'
import './App.css'

function App() {

  // stato dei prodotti
  const [products, setProducts] = useState([
    { id: 1, name: 'Microfono' },
    { id: 2, name: 'Webcam' },
    { id: 3, name: 'Mouse' },
    { id: 4, name: 'Tastiera' },
    { id: 5, name: 'Cuffie' }
  ])

  // stato per l'input del form
  const [newProduct, setNewProduct] = useState("")

  const submit = (e) => {
    e.preventDefault()


    const newItem = {
      id: products.length + 1,
      name: newProduct
    }

    setProducts([...products, newItem])
    setNewProduct('')
  }

  return (
    <>
      <div className='container'>
        <h1>Lista articoli</h1>

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
