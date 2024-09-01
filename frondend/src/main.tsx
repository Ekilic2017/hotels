import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// queryClient classından örnek al
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Provide ile app bileşenini kapsadık */}
    <QueryClientProvider client={queryClient}>
      <App />

      {/* devtools bileşeni (ekranın sağ altına gelir) */}
      <ReactQueryDevtools initialIsOpen={false} />

      {/* Bildirim bileşeni */}
      <ToastContainer />
    </QueryClientProvider>
  </React.StrictMode>
);