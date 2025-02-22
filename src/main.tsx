import React from 'react'
import ReactDOM from 'react-dom/client'
import MainComponent from './MainComponent.tsx'
import URL from './view/EindhovenURL.ts'
import './index.css'


const root = document.getElementById('root')
if (root == null) throw new Error()

ReactDOM.createRoot(root).render(
  <MainComponent />
)
