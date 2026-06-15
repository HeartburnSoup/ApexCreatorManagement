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
  { value: "creator" as const, label: "Creator" },
  { value: "brand" as const, label: "Brand" },
  { value: "general" as const, label: "General" },
];

const defaultFieldClass =
  "h-12 rounded-xl border-border/60 bg-smoke/50 px-4 text-base text-foreground shadow-none transition-all placeholder:text-muted-foreground focus-visible:border-brand-fire/50 focus-visible:ring-4 focus-visible:ring-brand-fire/10";

type ContactFormProps = {
  variant?: "default" | "minimal";
};

export function ContactForm({ variant = "default" }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const isMinimal = variant === "minimal";

  const fieldClass = isMinimal
    ? "minimal-field h-11 text-base text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-0"
    : defaultFieldClass;

  const labelClass = isMinimal
    ? "editorial-caption text-muted-foreground"
    : "text-sm font-semibold text-foreground/80";

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
    <form onSubmit={handleSubmit} className={cn("space-y-6", isMinimal && "space-y-8")}>
      <div className="space-y-2">
        <Label htmlFor="name" className={labelClass}>
          Name
        </Label>
        <Input
          id="name"
          name="name"
          required
          placeholder={isMinimal ? "" : "Your name"}
          value={form.name}
          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
          className={fieldClass}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className={labelClass}>
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder={isMinimal ? "" : "you@example.com"}
          value={form.email}
          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
          className={fieldClass}
        />
      </div>

      <div className="space-y-3">
        <Label className={labelClass}>Inquiry type</Label>
        <div className="flex flex-wrap gap-6">
          {inquiryOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setForm((prev) => ({ ...prev, inquiryType: option.value }))}
              className={cn(
                "text-xs font-bold uppercase tracking-[0.2em] transition-colors",
                form.inquiryType === option.value
                  ? "text-brand-fire"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className={labelClass}>
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={isMinimal ? 3 : 5}
          placeholder={isMinimal ? "" : "Tell us about your goals…"}
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          className={cn(
            fieldClass,
            isMinimal ? "min-h-[80px] resize-none py-2" : "min-h-[140px] rounded-xl border-border/60 bg-smoke/50 px-4 py-3",
          )}
        />
      </div>

      {isMinimal ? (
        <button
          type="submit"
          disabled={status === "submitting"}
          className="editorial-link disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : "Get in touch"}
          <span className="editorial-link-arrow">→</span>
        </button>
      ) : (
        <Button
          type="submit"
          disabled={status === "submitting"}
          size="lg"
          className="mt-2 w-full h-12 rounded-full text-sm font-bold uppercase tracking-wide bg-brand-fire text-white shadow-lg shadow-brand-fire/25 hover:brightness-105 transition-all"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>
      )}

      {status === "success" && (
        <p className="text-sm text-foreground/80 editorial-caption">
          Message sent — we respond within 1–2 business days.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-brand-fire">{errorMessage}</p>
      )}
    </form>
  );
}
