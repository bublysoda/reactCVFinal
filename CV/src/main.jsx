import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WholePageLmao } from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WholePageLmao />
  </StrictMode>,
)
