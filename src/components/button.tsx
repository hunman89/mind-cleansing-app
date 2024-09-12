interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="block rounded-md border-0 px-1.5 py-0.5 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-slate-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
