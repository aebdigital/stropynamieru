type RollingTextProps = {
  primary: string;
  secondary?: string;
};

export function RollingText({ primary, secondary }: RollingTextProps) {
  return (
    <>
      <span className="rolling-text" aria-hidden="true">
        <span>{primary}</span>
        <span>{secondary ?? primary}</span>
      </span>
      <span className="sr-only">{primary}</span>
    </>
  );
}
