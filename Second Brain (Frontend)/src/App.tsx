import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <>
      <Button startIcon={<ShareIcon size="md"/>} size="md" variant="primary" text="Share Brain"/>
      <Button startIcon={<PlusIcon size="lg"/>}size="md" variant="secondary" text="Add Content"/>
    </>
  )
}

export default App
