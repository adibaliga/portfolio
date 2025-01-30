export interface CustomTextareaProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  error?: string;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  placeholder,
  value,
  onChange,
  disabled = false,
  error = "",
}) => {
  return (
    <div className="mb-4">
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`h-36 px-4 py-2 border w-full  resize-none
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
          ${value ? "text-primary_black" : ""}
          focus:outline-none focus:ring-primary-black
          focus:shadow-lg focus:bg-primary-white
          hover:border-primary_black hover:bg-gray-100
          placeholder-zinc-500
          rounded-md
          font-sora font-normal
        `}
      />
      {error && <p className="text-error text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CustomTextarea;
