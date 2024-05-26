import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type TInputWithLabel = {
  type?: string;
  label: string;
  placeholder: string;
};

export function InputWithLabel({ type, label, placeholder }: TInputWithLabel) {
  return (
    <div className="grid w-full items-center">
      <Label className="text-base text-cyan-800" htmlFor={type}>
        {label}
      </Label>
      <Input
        className="text-base w-full py-4 mt-2"
        type={type}
        id={type}
        placeholder={placeholder}
      />
    </div>
  );
}
