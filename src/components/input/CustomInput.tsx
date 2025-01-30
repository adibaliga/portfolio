export interface CustomInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  disabled = false,
  error = "",
}) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`px-4 py-2 border w-full
            ${
              disabled
                ? "bg-zinc-100 border-zinc-200 cursor-not-allowed text-zinc-300"
                : "bg-primary-white"
            }
          ${
            error
              ? "border-error text-error"
              : "border-primary-black text-primary-black"
          }
          focus:outline-none focus:ring-primary-black
          focus:shadow-lg focus:bg-primary-white
          hover:border-primary-black hover:bg-gray-100
          placeholder:text-zinc-500
          placeholder:sora
          rounded-md font-normal
        `}
      />
      {error && <p className="text-error text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CustomInput;
