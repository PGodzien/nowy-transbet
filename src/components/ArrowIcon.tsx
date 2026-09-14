export default function ArrowIcon({ external = false }: { external?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      {external ? (
        <path d="M8 16L16 8M9 8h7v7" stroke="currentColor" strokeWidth="1.4" />
      ) : (
        <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" />
      )}
    </svg>
  );
}
