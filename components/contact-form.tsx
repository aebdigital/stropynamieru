"use client";

import { FormEvent, useState } from "react";
import { RollingText } from "@/components/rolling-text";

type Feedback = {
  kind: "success" | "error";
  message: string;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_type: "kontakt",
          name: formData.get("firstName"),
          email: formData.get("email"),
          phone: formData.get("phone") ?? "",
          message: `${formData.get("message")}\n\nTyp stropu: ${formData.get("service") ?? ""}`,
        }),
      });

      const data = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !data.success) {
        throw new Error(data.message ?? "Chyba pri odosielaní správy.");
      }

      setFeedback({ kind: "success", message: data.message ?? "Správa bola odoslaná." });
      form.reset();
    } catch (error) {
      setFeedback({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "Chyba pri odosielaní správy. Skúste to prosím znovu.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName">Meno *</label>
        <input type="text" id="firstName" name="firstName" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mail *</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Telefón</label>
        <input type="tel" id="phone" name="phone" />
      </div>

      <div className="form-group">
        <label htmlFor="service">Typ stropu</label>
        <select id="service" name="service">
          <option value="">Vyberte typ stropu</option>
          <option value="satenovy">Saténový napínací strop</option>
          <option value="vysoky-lesk">Napínací strop s vysokým leskom</option>
          <option value="matny">Matný napínací strop</option>
          <option value="fototlac">Napínacie stropy s fototlačou</option>
          <option value="translucentne">Translucentné stropy</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Správa *</label>
        <textarea
          id="message"
          name="message"
          placeholder="Opíšte svoj projekt a požiadavky..."
          required
        />
      </div>

      <button
        type="submit"
        className="submit-btn rolling-button"
        disabled={isSubmitting}
      >
        <RollingText
          primary={isSubmitting ? "Odosielam..." : "Odoslať správu"}
          secondary={isSubmitting ? "Prosím čakajte" : "Poslať dopyt"}
        />
      </button>

      {feedback ? (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: feedback.kind === "success" ? "#d4edda" : "#f8d7da",
            color: feedback.kind === "success" ? "#155724" : "#721c24",
            border: feedback.kind === "success" ? "1px solid #c3e6cb" : "1px solid #f5c6cb",
          }}
        >
          {feedback.message}
        </div>
      ) : null}
    </form>
  );
}
