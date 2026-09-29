import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DynamicInputProps } from "@/types/component.type";
import type { FieldValues } from "react-hook-form";

const DynamicInput = <T extends FieldValues>({
  name,
  label,
  type = "text",
  rows = 4,
  required = false,
  register,
  errors,
}: DynamicInputProps<T>) => {
  const error = errors[name];
  const errorMessage = error?.message as string | undefined;

  return (
    <div className="space-y-2">
      <Label htmlFor={String(name)}>
        {label}

        {required && <span className="ml-1 text-destructive">*</span>}
      </Label>

      {type === "textarea" ? (
        <Textarea
          id={String(name)}
          rows={rows}
          aria-invalid={!!errorMessage}
          {...register(name)}
        />
      ) : (
        <Input
          id={String(name)}
          type={type}
          aria-invalid={!!errorMessage}
          {...register(name)}
        />
      )}

      {errorMessage && (
        <p className="text-sm text-destructive">{errorMessage}</p>
      )}
    </div>
  );
};

export default DynamicInput;
