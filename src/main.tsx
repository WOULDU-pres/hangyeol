import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import { StagewiseToolbar } from '@stagewise/toolbar-react';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <StagewiseToolbar />
  </StrictMode>,
)
