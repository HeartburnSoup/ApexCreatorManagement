import { useState } from "react";

import { submitContactForm } from "@/lib/api/contact.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          required
          value={form.name}
          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
          className="rounded-sm border-border bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
          className="rounded-sm border-border bg-background"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="inquiryType" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Inquiry type
        </Label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          value={form.inquiryType}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              inquiryType: e.target.value as FormState["inquiryType"],
            }))
          }
          className="flex h-9 w-full rounded-sm border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <option value="creator">Creator representation</option>
          <option value="brand">Brand partnership</option>
          <option value="general">General inquiry</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          className="rounded-sm border-border bg-background min-h-[120px]"
        />
      </div>

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-sm font-mono text-[11px] uppercase tracking-widest"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>

      {status === "success" && (
        <p className="text-sm text-primary font-mono">Message sent. We typically respond within 1–2 business days.</p>
      )}
      {status === "error" && <p className="text-sm text-destructive">{errorMessage}</p>}
    </form>
  );
}
