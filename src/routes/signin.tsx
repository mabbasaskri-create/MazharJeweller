import { createFileRoute, Link } from "@tanstack/react-router";
import { User } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign In / Register — Sparkle·PK" },
      { name: "description", content: "Sign in to your Sparkle Pakistan account or create a new account." },
    ],
  }),
  component: SignInPage,
});

function SignInPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header hideAnnouncement hideTopBar />

      <section className="mx-auto max-w-md px-4 py-16">
        <div className="text-center mb-10">
          <User className="h-10 w-10 mx-auto text-[var(--gold)]" />
          <h1 className="serif text-4xl mt-4">Welcome Back</h1>
          <p className="text-muted-foreground mt-2 text-sm">Sign in to your Sparkle·PK account</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-xs uppercase tracking-wider font-medium">Email</label>
            <input type="email" required className="mt-1 w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" placeholder="your@email.com" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider font-medium">Password</label>
            <input type="password" required className="mt-1 w-full border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary" placeholder="Enter your password" />
          </div>
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-primary" /> Remember me
            </label>
            <a href="#" className="underline">Forgot password?</a>
          </div>
          <button className="w-full bg-primary text-primary-foreground px-6 py-3 text-sm uppercase tracking-wider">Sign In</button>
        </form>

        <div className="mt-8 text-center text-sm">
          <p className="text-muted-foreground">Don't have an account? <a href="#" className="underline">Register here</a></p>
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="text-xs text-muted-foreground underline">Back to Home</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
