interface IconProps {
  size: "size_5" | "size_4";
}

export function PlayIcon({ size }: IconProps): JSX.Element {
  return (
    <svg
      className={`${size} stroke`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12V8.44C4 4.02 7.13 2.21 10.96 4.42L14.05 6.2L17.14 7.98C20.97 10.19 20.97 13.81 17.14 16.02L14.05 17.8L10.96 19.58C7.13 21.79 4 19.98 4 15.56V12Z"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
