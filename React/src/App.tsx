// import { useState } from 'react'
import './App.css'
import { GlobalStateProvider } from './components/GlobalState'

// @ts-ignore
import Wizard from './components/Wizard'

function App() {
  return (
    <>
      <GlobalStateProvider>
        <Wizard />
      </GlobalStateProvider>
    </>
  )
}

export default App
