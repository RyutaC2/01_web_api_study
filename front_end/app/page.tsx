"use client";

    import { z } from "zod";
    import { useForm } from "react-hook-form";
    import { zodResolver } from "@hookform/resolvers/zod";

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

export default function HomePage() {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterInput>({
        resolver: zodResolver(registerSchema),
    })
    const onSubmit = (data: RegisterInput) => {
        console.log(data)
    }

    return (
        <div>
            <h1>ログイン</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("username")} placeholder="ユーザー名" />
                {errors.username && <p>{errors.username.message}</p>}
                <input {...register("email")} placeholder="メールアドレス" />
                {errors.email && <p>{errors.email.message}</p>}
                <input type="password" {...register("password")} placeholder="パスワード" />
                {errors.password && <p>{errors.password.message}</p>}
                <input type="password" {...register("confirmPassword")} placeholder="パスワード確認" />
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                <button type="submit">登録</button>
            </form>
        </div>
    )
}