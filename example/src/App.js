import React from 'react'
import { Button } from './index2'

const App = () => {
  return(
    <>
       <div className="App">
       <p>My Buttons </p>
      <Button type="primary">Primary Button</Button>
      <Button type="default">Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
    </>
  )
}

export default App
