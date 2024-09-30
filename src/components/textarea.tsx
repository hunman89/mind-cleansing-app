import { useState } from "react";
import Button from "./button";
interface TextareaProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  buttonClick: () => void;
  buttonText: string;
}

export default function Textarea({
  id,
  name,
  value,
  onChange,
  placeholder,
  buttonClick,
  buttonText,
}: TextareaProps) {
  const [error, setError] = useState<string | null>(null);

  const validateText = (text: string) => {
    const regex = /^[a-zA-Z가-힣\s]*$/;

    if (text.length > 100) {
      setError("100자 이내로 입력해주세요.");
    } else if (!regex.test(text)) {
      setError("알파벳, 한글, 띄어쓰기만 허용됩니다.");
    } else {
      setError(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    validateText(newValue);
    onChange(e);
  };
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
        onChange={handleInputChange}
        className="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
        ${error ? 'ring-red-500 focus:ring-red-500' : ''}`}"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div className="flex flex-row-reverse">
        <Button onClick={buttonClick} disabled={!!error}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
