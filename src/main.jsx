import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
    <QueryClientProvider client={queryClient}>
       <App />  
    </QueryClientProvider> 
    </ChakraProvider>
  </StrictMode>,
)
