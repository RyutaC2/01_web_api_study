"use client"

import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const emailSchema = z.object({
    email: z.string()
    .email({ message: "有効なメールアドレスを入力してください" })
})

type EmailInput = z.infer<typeof emailSchema>

export default function HomePage() {

    const { register, handleSubmit, formState: { errors } } = useForm<EmailInput>({
        resolver: zodResolver(emailSchema),
    })
    const onSubmit = (data: EmailInput) => {
        console.log(data)
    }

    return (
        <div>
            <h1 className="text-center text-[clamp(2rem,4vw,3.5rem)] break-keep mt-10">圧倒的に簡易的な、<br/>ログインシステムはこちら。</h1>
            <h2 className="text-center text-[clamp(0.75rem,2vw,1.35rem)] mt-5 mb-10">フロントエンドはNext.js、バックエンドはGoで構築しています。このページはGitHubのホームページを真似しました。下の登録/ログインシステムはReactHookFormとZodを使っています。</h2>
            {errors.email && (
                <p className="text-red-500 rext-sm text-center mb-1">
                    {errors.email.message}
                </p>
            )}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col lg:flex-row lg:items-center justify-center gap-2"
            >
                <div className="w-full flex-4  flex rounded-md bg-white dark:bg-gray-700 p-1 gap-2">
                    <input
                        {...register("email")}
                        className="flex-1 rounded-md py-2 px-2"
                        placeholder="メールアドレスを入力"
                    />
                    <button className="rounded-md text-white bg-green-500 hover:bg-green-700 action:bg-green-700 dark:bg-green-700 dark:hover:bg-green-500 dark:action:bg-green-500 py-2 px-6 cursor-pointer">登録</button>
                </div>
                <Link
                    href="/user/login"
                    className="w-full flex-1 text-center rounded-md bg-white dark:bg-gray-700 hover:bg-gray-400 action:bg-gray-400 py-3 px-6 cursor-pointer">
                    ログイン</Link>
            </form>
        </div>
    )
}