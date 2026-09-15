import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {

  return (
    <>
      <Button startIcon={<PlusIcon size="lg"/>} size="sm" variant="primary" text="Share"/>
      <Button size="md" variant="secondary" text="Add Content"/>
      <Button size="lg" variant="secondary" text="Add Content"/>
    </>
  )
}

export default App
