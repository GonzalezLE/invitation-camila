export default function DecorativeSeparator(props) {
  return (
    <svg {...props} width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 20 H70" stroke="url(#grad1)" strokeWidth="1.5" />
      <path d="M130 20 H200" stroke="url(#grad2)" strokeWidth="1.5" />
      <path d="M85 15 L100 25 L115 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="grad1" x1="70" y1="20" x2="0" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="grad2" x1="130" y1="20" x2="200" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}