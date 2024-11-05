interface FormFieldProps {
  label: string;
  value: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
}

const FormField = ({
  label,
  value,
  type = 'text',
  defaultValue,
  placeholder = ''
}: FormFieldProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-[#232323] mb-1">{label}</label>
      <input
        type={type}
        defaultValue={type === 'date' ? defaultValue : value}
        placeholder={placeholder}
        className="w-full h-[50px] placeholder:text-secondary text-secondary px-4 py-2 rounded-2xl border border-[#DFEAF2] focus:outline-none"
      />
    </div>
  );
};

export default FormField;
