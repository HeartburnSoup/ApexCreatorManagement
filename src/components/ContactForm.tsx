import { useState } from "react";

import { submitContactForm } from "@/lib/api/contact.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  inquiryType: "creator" | "brand" | "general";
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  inquiryType: "creator",
  message: "",
};

const inquiryOptions = [
  { value: "creator" as const, label: "Creator representation" },
  { value: "brand" as const, label: "Brand partnership" },
  { value: "general" as const, label: "General inquiry" },
];

const fieldClass =
  "h-12 rounded-xl border-border/70 bg-card px-4 text-base shadow-sm transition-all placeholder:text-muted-foreground focus-visible:border-primary/40 focus-visible:ring-4 focus-visible:ring-primary/10";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitContactForm({ data: form });
      setForm(initialState);
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong sending your message. Please try again or email us directly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-semibold text-foreground/80">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
          className={fieldClass}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-semibold text-foreground/80">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
          className={fieldClass}
        />
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-semibold text-foreground/80">Inquiry type</Label>
        <div className="grid gap-2 sm:flex sm:flex-wrap">
          {inquiryOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setForm((prev) => ({ ...prev, inquiryType: option.value }))}
              className={cn(
                "rounded-full px-4 py-2.5 text-sm font-medium transition-all sm:w-auto",
                form.inquiryType === option.value
                  ? "bg-brand-cyan text-primary shadow-md shadow-brand-cyan/20"
                  : "bg-card border border-border/70 text-muted-foreground hover:border-brand-cyan/40 hover:text-foreground",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-semibold text-foreground/80">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your goals…"
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          className="min-h-[140px] rounded-xl border-border/70 bg-card px-4 py-3 text-base shadow-sm transition-all placeholder:text-muted-foreground focus-visible:border-primary/40 focus-visible:ring-4 focus-visible:ring-primary/10"
        />
      </div>

      <Button
        type="submit"
        disabled={status === "submitting"}
        size="lg"
        className="mt-2 w-full h-12 rounded-full text-sm font-bold uppercase tracking-wide bg-brand-cyan text-primary shadow-lg shadow-brand-cyan/25 hover:brightness-105 hover:shadow-brand-cyan/35 hover:scale-[1.01] active:scale-[0.99] transition-all"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>

      {status === "success" && (
        <p className="rounded-xl bg-primary/8 px-4 py-3 text-sm font-medium text-primary">
          Message sent. We typically respond within 1–2 business days.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-xl bg-destructive/8 px-4 py-3 text-sm text-destructive">{errorMessage}</p>
      )}
    </form>
  );
}
