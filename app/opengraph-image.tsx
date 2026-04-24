import { ImageResponse } from "next/og";

export const alt = "Stropy na mieru - Profesionálne napínacie stropy";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #111827 0%, #1f2937 45%, #363650 100%)",
          color: "white",
          padding: "56px 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#cbd5e1",
          }}
        >
          Banská Bystrica a okolie
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: 860,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.03,
            }}
          >
            Stropy na mieru
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              lineHeight: 1.25,
              color: "#dbe4f0",
            }}
          >
            Profesionálne napínacie stropy, rýchla realizácia a čistý výsledok
            pre moderný interiér.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            fontSize: 26,
            color: "#e2e8f0",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "14px 22px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.12)",
            }}
          >
            100+ spokojných zákazníkov
          </div>
          <div
            style={{
              display: "flex",
              padding: "14px 22px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.12)",
            }}
          >
            7 rokov skúseností
          </div>
        </div>
      </div>
    ),
    size,
  );
}
