import { createRoot } from 'react-dom/client'
import '../src/style/normalize.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <App />
)
