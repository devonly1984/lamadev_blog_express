import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ClerkProvider} from '@clerk/clerk-react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import { publishableKey } from './constants/environment.js'
import "react-quill-new/dist/quill.snow.css";
if (!publishableKey) {
  throw new Error("Missing publishable key");
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
