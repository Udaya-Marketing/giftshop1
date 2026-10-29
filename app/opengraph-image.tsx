import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = "Aster & Pine — gifts with a story to tell";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#F6F2EC", color: "#3A352F", border: "18px solid #B7BC9C" }}>
      <div style={{ fontSize: 24, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 28 }}>A little more thought, in every detail</div>
      <div style={{ fontSize: 92, fontFamily: "serif", letterSpacing: "-0.03em" }}>{site.name}</div>
      <div style={{ fontSize: 30, fontStyle: "italic", marginTop: 16 }}>{site.tagline}</div>
    </div>,
    size,
  );
}
