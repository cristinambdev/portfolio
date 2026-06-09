import { useState } from "react";
import CascadeWrapper from "../layouts/CascadeWrapper";
import PageHeader from "../common/PageHeader";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="container min-h-[calc(100vh-90px)] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start">

        {/* LEFT COLUMN: Header & Context*/}
        <div className="lg:col-span-5 flex flex-col lg:sticky lg:top-32">
            {/* Section Header */}
                <PageHeader
                 title="Contact"
                 highlight="Me"
                 description="Have an exciting project in mind, a position to fill, or just want to say hello?
                              Drop a message and I'll get back to you as soon as possible."
               />
        </div>

        {/* RIGHT COLUMN: The Sleek Form (Takes up 7 columns) */}
        <div className="lg:col-span-7 w-full">
          <CascadeWrapper className="w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              {/* Name Field */}
              <div className="cascade-item flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  Name <span className="text-brand-green">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="px-4 py-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                  placeholder=""
                />
              </div>

              {/* Email Field */}
              <div className="cascade-item flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  Email <span className="text-brand-green">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="px-4 py-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all"
                  placeholder=""
                />
              </div>

              {/* Message Field */}
              <div className="cascade-item flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  Message <span className="text-brand-green">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={6}
                  className="px-4 py-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all resize-none"
                  placeholder=""
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="cascade-item p-4 rounded-lg bg-green-50 dark:bg-green-950/20 text-brand-green border border-green-200 dark:border-green-900/50 text-sm">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="cascade-item p-4 rounded-lg bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50 text-sm">
                  ✕ Something went wrong. Please try again or email me directly.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="cascade-item mt-2 px-8 py-4 bg-brand-green hover:bg-brand-green/90 disabled:bg-zinc-400 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto self-end"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

            </form>
          </CascadeWrapper>
        </div>

      </div>
    </section>
  );
}
