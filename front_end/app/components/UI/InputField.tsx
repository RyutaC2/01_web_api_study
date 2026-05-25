import { UseFormRegister, FieldValues } from "react-hook-form"

type InputFieldProps = {
    label: string
    type?: string
    register: UseFormRegister<FieldValues>
    name: string
    error?: string
    placeholder?: string
}

export default function InputField({
    label,
    type = "text",
    register,
    name,
    error,
    placeholder,
}: InputFieldProps) {
    return (
        <div className="flex flex-col mb-2">
            <label className="mb-1">{label}</label>
            <input
                type={type}
                {...register(name)}
                placeholder={placeholder}
                className={"border-2 rounded-md border-[#cacaca] dark:border-[#2f2f2f] p-2"}
            />
            {error && <p className="text-red-500">{error}</p>}
        </div>
    )
}