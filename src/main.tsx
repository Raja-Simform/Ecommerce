import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
   
  </StrictMode>,
)
