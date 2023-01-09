import { useState, useCallback } from 'react'
import './App.css'
import Forms from './Components/Froms'

function App() {
  const [form, setForm] = useState([1])
  const addForm = useCallback(() => {
    setForm(form => [...form, form.length + 1])
  }, [form])
  return (
    <div className='App'>
      {form?.map(el => {
        return <Forms id={el} />
      })}
      <hr />{' '}
      <button
        className='btn btn-primary rounded-pill position-relative'
        style={{ marginTop: '-6%' }}
        onClick={addForm}>
        +
      </button>
    </div>
  )
}

export default App
