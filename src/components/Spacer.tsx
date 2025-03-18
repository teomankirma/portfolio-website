interface SpacerProps {
  y: number;
  unit?: "px" | "rem";
}

export function Spacer({ y, unit = "rem" }: SpacerProps) {
  return <div style={{ height: `${y}${unit}` }} />;
}
