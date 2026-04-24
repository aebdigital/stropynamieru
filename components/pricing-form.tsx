"use client";

import { FormEvent, useState } from "react";
import { RollingText } from "@/components/rolling-text";

type Feedback = {
  kind: "success" | "error";
  message: string;
};

export function PricingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setFeedback(null);

    const message = `Žiadosť o cenovú ponuku:\n\nMiesto montáže: ${
      formData.get("location") ?? ""
    }\nRozmer miestnosti: ${formData.get("roomSize") ?? ""} m²\nOsvetlenie: ${
      formData.get("lightingPreference") ?? ""
    }\nDruh fólie: ${formData.get("foilType") ?? ""}\nŠpeciálne požiadavky: ${
      formData.get("specialRequests") ?? ""
    }`;

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_type: "cenova_ponuka",
          name: formData.get("fullName"),
          email: formData.get("email"),
          phone: formData.get("phone") ?? "",
          message,
        }),
      });

      const data = (await response.json()) as { success?: boolean; message?: string };
      if (!response.ok || !data.success) {
        throw new Error(data.message ?? "Chyba pri odosielaní žiadosti.");
      }

      setFeedback({
        kind: "success",
        message:
          data.message ??
          "Žiadosť o cenovú ponuku bola úspešne odoslaná! Odpovieme vám do 24 hodín.",
      });
      form.reset();
    } catch (error) {
      setFeedback({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "Chyba pri odosielaní žiadosti. Skúste to prosím znovu.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="pricingForm" className="pricing-form" onSubmit={handleSubmit}>
      <div className="form-section">
        <h3>Kontaktné údaje</h3>

        <div className="form-group">
          <label htmlFor="fullName">Meno a priezvisko *</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="pricingEmail">Váš email *</label>
            <input type="email" id="pricingEmail" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="pricingPhone">Vaše telefónne číslo *</label>
            <input type="tel" id="pricingPhone" name="phone" required />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Informácie o montáži</h3>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="location">Miesto montáže *</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Napríklad: Banská Bystrica, Bratislava..."
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="roomSize">Rozmer miestnosti (m²) *</label>
            <input
              type="number"
              id="roomSize"
              name="roomSize"
              step="0.1"
              min="0"
              placeholder="Napríklad: 25.5"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="lightingPreference">Preferencie osvetlenia</label>
          <select id="lightingPreference" name="lightingPreference">
            <option value="">Vyberte možnosť osvetlenia...</option>
            <option value="LED pásy">LED pásy</option>
            <option value="Zabudované bodové svetlá">Zabudované bodové svetlá</option>
            <option value="Podsvietený strop">Podsvietený strop</option>
            <option value="Bez osvetlenia">Bez osvetlenia</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="foilType">Druhy fólie</label>
          <select id="foilType" name="foilType">
            <option value="">Vyberte typ fólie...</option>
            <option value="Lesklá fólia">Lesklá fólia</option>
            <option value="Matná fólia">Matná fólia</option>
            <option value="Translucidná fólia">Translucidná fólia</option>
            <option value="Akustická fólia">Akustická fólia</option>
            <option value="Saténová fólia">Saténová fólia</option>
            <option value="Fólia s fototlačou">Fólia s fototlačou</option>
          </select>
        </div>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label htmlFor="specialRequests">
            Špeciálne požiadavky (napr. farby, textúry, vzory)
          </label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            placeholder="Opíšte vaše špeciálne požiadavky..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="submit-btn rolling-button"
        disabled={isSubmitting}
      >
        <RollingText
          primary={isSubmitting ? "Odosielam..." : "Odoslať cenovú ponuku"}
          secondary={isSubmitting ? "Prosím čakajte" : "Získať odhad ceny"}
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

      <div className="form-footer">
        <p>
          <strong>Odoslaním formulára získate cenovú ponuku do 24 hodín.</strong>
        </p>
        <p>
          Naše ponuky sú nezáväzné a sú prispôsobené presne na mieru vašim
          potrebám.
        </p>
      </div>
    </form>
  );
}
