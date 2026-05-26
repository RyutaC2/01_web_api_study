import { UseFormRegister, FieldValues, Path } from "react-hook-form"

type InputFieldProps<T extends FieldValues> = {
    label: string
    type?: string
    register: UseFormRegister<T>
    name: Path<T>
    error?: string
    placeholder?: string
}

export default function InputField<T extends FieldValues>({
    label,
    type = "text",
    register,
    name,
    error,
    placeholder,
}: InputFieldProps<T>) {
    return (
        <div className="flex flex-col mb-2">
            <label className="mb-1">{label}</label>
            <input
                type={type}
                {...register(name)}
                placeholder={placeholder}
                className={
                    "border-2 rounded-md border-[#cacaca] dark:border-[#7c7c7c] p-2" +
                    (type === "password" ? " no-copy-paste" : "")
                }
                {...(type === "password"
                    ? {
                        autoComplete: "off",
                        autoCorrect: "off",
                        autoCapitalize: "off",
                        spellCheck: "false",
                    }
                : {})}
            />
            {error && <p className="text-red-500">{error}</p>}
        </div>
    )
}