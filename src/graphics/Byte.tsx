import { useId } from "react";
type Pose =
  "pointing" | "thinking" | "teaching" | "excited" | "confused" | "builder";
export default function Byte({
  pose = "excited",
  className = "",
  decorative = false,
}: {
  pose?: Pose;
  className?: string;
  decorative?: boolean;
}) {
  const id = useId();
  const arms: Record<Pose, string> = {
    excited: "M106 226Q65 220 55 172M214 226Q259 205 263 162",
    pointing: "M106 226Q72 237 65 265M214 226Q245 207 273 205",
    thinking: "M106 226Q75 245 100 260M214 226Q247 195 214 172",
    teaching: "M106 226Q75 220 69 195M214 226Q248 212 260 178",
    confused: "M106 226Q70 213 58 228M214 226Q250 213 262 228",
    builder: "M106 226Q78 230 88 251M214 226Q242 230 230 251",
  };
  return (
    <svg
      viewBox="0 0 320 320"
      className={`byte ${className}`}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : `Byte, the club’s AI guide, ${pose}`}
    >
      <defs>
        <linearGradient id={id} x2="1" y2="1">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#dcefff" />
        </linearGradient>
      </defs>
      <ellipse cx="160" cy="295" rx="72" ry="10" fill="#b9d9f5" opacity=".45" />
      <path
        d={arms[pose]}
        fill="none"
        stroke="#2e7de0"
        strokeWidth="15"
        strokeLinecap="round"
      />
      <path d="M160 78V48" stroke="#2e7de0" strokeWidth="10" />
      <circle cx="160" cy="38" r="11" fill="#70c9f3" />
      <rect
        x="88"
        y="76"
        width="144"
        height="122"
        rx="38"
        fill={`url(#${id})`}
        stroke="#2e7de0"
        strokeWidth="7"
      />
      <rect x="105" y="103" width="110" height="65" rx="24" fill="#12365d" />
      {pose === "excited" ? (
        <path
          d="M122 133q9-15 18 0m40 0q9-15 18 0"
          fill="none"
          stroke="#8bddff"
          strokeWidth="6"
          strokeLinecap="round"
        />
      ) : (
        <g fill="#8bddff">
          <ellipse cx="132" cy="129" rx="7" ry={pose === "confused" ? 5 : 9} />
          <ellipse cx="188" cy="129" rx="7" ry="9" />
        </g>
      )}
      <path
        d={pose === "confused" ? "M149 152q11-6 22 0" : "M149 148q11 10 22 0"}
        fill="none"
        stroke="#8bddff"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect
        x="111"
        y="208"
        width="98"
        height="72"
        rx="26"
        fill={`url(#${id})`}
        stroke="#2e7de0"
        strokeWidth="7"
      />
      <g stroke="#2e7de0" strokeWidth="2" fill="#2e7de0">
        <path d="M146 238l26-9-7 26z" fill="none" />
        <circle cx="146" cy="238" r="4" />
        <circle cx="172" cy="229" r="4" />
        <circle cx="165" cy="255" r="4" />
      </g>
      {pose === "builder" && (
        <g>
          <rect x="82" y="245" width="156" height="39" rx="5" fill="#12365d" />
          <path
            d="M152 260l-8 5 8 5m16-10 8 5-8 5"
            stroke="#8bddff"
            strokeWidth="3"
            fill="none"
          />
        </g>
      )}
      {pose === "teaching" && (
        <path
          d="M260 178l20-58"
          stroke="#12365d"
          strokeWidth="4"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
