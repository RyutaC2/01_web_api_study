"use client"

import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const emailSchema = z.object({
    email: z.string().optional().refine(
        (value) => !value || z.string().email().safeParse(value).success,
        { message: "有効なメールアドレスを入力してください" }
    )
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
        <div className="flex justify-center min-h-screen">
            <div className="max-w-150">
                <h1 className="text-center text-[clamp(2rem,4vw,3rem)] whitespace-nowrap mt-10 px-4 min-[400px]:px-10">圧倒的に簡易的な、<br/>ログインシステムはこちら。</h1>
                <h2 className="text-center text-[clamp(1rem,2vw,1.35rem)] whitespace-nowrap mt-5 mb-10 px-4 min-[400px]:px-10">フロントエンドはNext.js、バックエンドはGoで構築しています。このページはGitHubのホームページを真似しました。下の登録/ログインシステムはReactHookFormとZodを使っています。</h2>
                {errors.email && (
                    <p className="text-red-500 text-sm text-center mb-1">
                        {errors.email.message}
                    </p>
                )}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col md:flex-row md:items-center justify-center gap-2"
                >
                    <div className="w-full flex-4  flex flex-col md:flex-row rounded-md bg-white dark:bg-gray-700 p-1 gap-2">
                        <input
                            {...register("email")}
                            className="flex-1 rounded-md py-2 px-2"
                            placeholder="メールアドレスを入力"
                        />
                        <button
                            className="rounded-md text-white bg-green-500 hover:bg-green-700 active:bg-green-700 dark:bg-green-700 dark:hover:bg-green-500 dark:active:bg-green-500 py-2 px-6 cursor-pointer"
                        >
                            登録
                        </button>
                    </div>
                    <Link
                        href="/user/login"
                        className="w-full flex-1 text-center rounded-md bg-white dark:bg-gray-700 hover:bg-gray-400 active:bg-gray-400 py-3 px-6 cursor-pointer"
                    >
                        ログイン
                    </Link>
                </form>
            </div>
        </div>
    )
}