import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { UseFormRegister } from "react-hook-form";

type TInputWithLabel = {
  type?: string;
  placeholder: string;
  label?: string;
  register: UseFormRegister<any>;
  required: boolean;
  message: string;
  name: string;
};

export function InputFile({
  type,
  label,
  placeholder,
  register,
  required,
  message,
  name,
}: TInputWithLabel) {
  return (
    <div className="grid w-full items-center">
      <Label className="lg:text-base text-sm text-cyan-800" htmlFor={type}>
        {label}
      </Label>
      <Input
        className="text-base w-full py-4 mt-2 text-cyan-800"
        type={type}
        id={type}
        placeholder={placeholder}
        {...register(name, { required })}
      />
      {message && <p className="text-red-500 text-xs">{message}</p>}
    </div>
  );
}
