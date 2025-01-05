import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ClerkProvider} from '@clerk/clerk-react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import { publishableKey } from './constants/environment.js'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import "react-quill-new/dist/quill.snow.css";
import "react-toastify/ReactToastify.css"
import { ToastContainer } from "react-toastify";
if (!publishableKey) {
  throw new Error("Missing publishable key");
}
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer position="bottom-right" />
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>
);
