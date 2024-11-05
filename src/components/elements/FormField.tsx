import { ErrorMessage, useField } from 'formik';
import { cn } from '../../utils/helpers';

interface FormFieldProps {
  label: string;
  value?: string;
  type?: string;
  placeholder?: string;
}
const FormField = ({
  label,
  type = 'text',
  placeholder = '',
  name
}: FormFieldProps & { name: string }) => {
  const [field, meta] = useField(name);
  return (
    <div>
      <label className="block text-sm font-medium text-[#232323] mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        id={name}
        className={cn(
          'w-full h-[50px] placeholder:text-secondary text-secondary px-4 py-2 rounded-2xl border border-[#DFEAF2] focus:outline-none',
          {
            'border-red-500': meta.touched && meta.error
          }
        )}
      />
      <div className="text-red-500 text-xs mt-1">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default FormField;
