import { SignUp } from "@clerk/clerk-react";
import { motion } from "framer-motion";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2 text-center gradient-text">Create Account</h1>
        <p className="text-muted-foreground text-center mb-8">Join ComponentKit today</p>
        <div className="flex justify-center">
          <SignUp
            routing="path"
            path="/sign-up"
            signInUrl="/sign-in"
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "shadow-premium-lg rounded-2xl border border-border bg-card",
              },
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
