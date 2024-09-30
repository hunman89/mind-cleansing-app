interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Button({ onClick, children, disabled }: ButtonProps) {
  return (
    <button
      className="block rounded-md border-0 px-1.5 py-0.5 text-gray-900 ring-1 ring-inset ring-gray-300
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-400'}`"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
