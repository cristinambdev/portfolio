import { useState } from "react";
import CascadeWrapper from "../layouts/CascadeWrapper";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    // Replace with your actual Web3Forms access key
    // If using Vite, it looks like: import.meta.env.VITE_WEB3FORMS_KEY
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.currentTarget.reset(); // Clear the form
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <CascadeWrapper className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
      
        {/* Name Field */}
        <div className="cascade-item flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-zinc-500">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-brand-green/50 transition-all"
            placeholder="John Doe"
          />
        </div>

        {/* Email Field */}
        <div className="cascade-item flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-zinc-500">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-brand-green/50 transition-all"
            placeholder="john@example.com"
          />
        </div>

        {/* Message Field */}
        <div className="cascade-item flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-zinc-500">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows={5}
            className="px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-brand-green/50 transition-all resize-none"
            placeholder="How can I help you?"
          ></textarea>
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="cascade-item p-4 rounded-lg bg-green-50 text-brand-green border border-green-200">
            Message sent successfully! I'll get back to you soon.
          </div>
        )}
        {status === "error" && (
          <div className="cascade-item p-4 rounded-lg bg-red-50 text-brand-brick-red border border-red-200">
            Something went wrong. Please try again or email me directly.
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="cascade-item mt-2 px-8 py-4 bg-brand-green hover:bg-brand-green/90 disabled:bg-zinc-400 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 w-full sm:w-auto self-end"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

      </form>
    </CascadeWrapper>
  );
        {/*
            import Socials from "../common/Socials";
       ------------------------------------------------------------------------------------
            <p className="text-lg">Coming soon...</p>
            <p className="text-lg">Meanwhile, feel free to reach out via email!</p>
            <Socials animated={true} platforms={["email"]} className="center mb-4" />
        */}


}
