interface InputProps {
  placeholder: string;
  reference?: Ref<HTMLInputElement>;
}

export function Input({placeholder, reference}: InputProps) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={"text"}
        className="px-4 py-2 border border-gray-200 m-2"
        ref={reference}
      />
    </div>
  );
}
