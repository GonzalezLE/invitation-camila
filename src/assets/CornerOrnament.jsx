export default function CornerOrnament(props) {
  return (
    <svg {...props} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10 H90 V20 M10 10 V90 H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}