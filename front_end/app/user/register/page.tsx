"use client";

    import { z } from "zod";
    import { useForm } from "react-hook-form";
    import { zodResolver } from "@hookform/resolvers/zod";
    import InputField from "../../components/UI/InputField";
    import Link from "next/link";

const registerSchema = z.object({
    username: z.string()
    .min(3, { message: "ユーザー名は3文字以上で入力してください。"})
    .max(12, { message: "ユーザー名は12文字以下で入力してください。"})
    .regex(/^[a-zA-Z0-9_\-]+$/, { message: "ユーザー名は英数字、アンダーバー、ハイフンで入力してください。"}),
    email: z.string()
    .email({ message: "有効なメールアドレスを入力してください。"}),
    password: z.string()
    .min(8, { message: "パスワードは8文字以上で入力してください。"})
    .max(20, { message: "パスワードは20文字以下で入力してください。"})
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-_])[A-Za-z\d@$!%*?&-_]+$/, { message: "パスワードは大文字、小文字、数字、記号を含めてください。" }),
    confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword,
    {
        message: "パスワードが一致しません。",
        path: ["confirmPassword"],
    }
)

type RegisterInput = z.infer<typeof registerSchema>

export default function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterInput>({
        resolver: zodResolver(registerSchema),
    })
    const onSubmit = (data: RegisterInput) => {
        console.log(data)
    }

    return (
        <div className="rounded-2xl bg-[#d7d7d7] dark:bg-[#222222] px-6 py-10 m-4">
            <h1 className="text-center text-2xl p-4">ユーザー新規登録</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2 p-4"
            >
                <InputField
                    label="ユーザー名"
                    register={register}
                    name="username"
                    error={errors.username?.message}
                    placeholder="3~12文字の半角英数字、アンダーバー、ハイフンで入力"
                />
                <InputField
                    label="メールアドレス"
                    register={register}
                    name="email"
                    error={errors.email?.message}
                    placeholder="example@gmail.com"
                />
                <InputField
                    label="パスワード"
                    register={register}
                    name="password"
                    type="password"
                    error={errors.password?.message}
                    placeholder="8~20文字の半角英数字、記号を含めて入力"
                />
                <InputField
                    label="パスワード確認"
                    register={register}
                    name="confirmPassword"
                    type="password"
                    error={errors.confirmPassword?.message}
                    placeholder="パスワードを再入力してください"
                />
                <div className="flex justify-end items-center gap-8">
                    <Link href="" className="text-blue-600 hover:text-blue-800 dark:text-blue-800 dark:hover:text-blue-600 transition">ログインの方はこちら</Link>
                    <button
                        type="submit"
                        className="text-1xl cursor-pointer px-4 py-2 rounded-md text-white font-boid bg-blue-600 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-600 transition"
                    >登録</button>
                </div>
            </form>
        </div>
    )
}