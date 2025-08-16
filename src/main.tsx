import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppSupport } from './AppSupport.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppSupport />
  </StrictMode>,
)
