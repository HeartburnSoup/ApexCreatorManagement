import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { sendContactEmail } from "../email.server";

const contactInputSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email address"),
  inquiryType: z.enum(["creator", "brand", "general"]),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000),
});

export const submitContactForm = createServerFn({ method: "POST" })
  .validator(contactInputSchema)
  .handler(async ({ data }) => {
    await sendContactEmail(data);
    return { success: true as const };
  });
