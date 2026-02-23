import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App.tsx";
import "./index.css";

// Clerk publishable key
const CLERK_PUBLISHABLE_KEY = "pk_test_bW92aW5nLWFwaGlkLTQ2LmNsZXJrLmFjY291bnRzLmRldiQ" as const;


if (!CLERK_PUBLISHABLE_KEY) {
  console.warn("⚠️ Clerk publishable key not set. Please update src/main.tsx with your key from https://dashboard.clerk.com");
}

createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
    <App />
  </ClerkProvider>
);
