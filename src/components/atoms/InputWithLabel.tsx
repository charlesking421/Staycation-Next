import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { UseFormRegister } from "react-hook-form";

type TInputWithLabel = {
  type?: string;
  label: string;
  placeholder: string;
  name: string;
  required: boolean;
  message?: string;
  register: UseFormRegister<any>;
};

export function InputWithLabel({
  type,
  label,
  placeholder,
  register,
  required,
  name,
  message,
}: TInputWithLabel) {
  return (
    <div className="grid w-full items-center">
      <Label className="lg:text-base text-sm text-cyan-800" htmlFor={type}>
        {label}
      </Label>
      <Input
        className="lg:text-base placeholder:text-sm lg:placeholder:text-base w-full py-4 mt-2"
        type={type}
        id={type}
        placeholder={placeholder}
        {...register(name, { required })}
      />
      {message && <p className="text-red-500 text-xs">{message}</p>}
    </div>
  );
}
