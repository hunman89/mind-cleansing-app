interface TextareaProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

export default function Textarea({
  id,
  name,
  value,
  onChange,
  placeholder,
}: TextareaProps) {
  return (
    <div className="flex flex-col w-full px-3 gap-y-3">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900 "
      >
        {placeholder}
      </label>
      <textarea
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
      />
    </div>
  );
}
