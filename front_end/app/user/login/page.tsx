"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../../components/UI/InputField";
import Link from "next/link";

const loginSchema = z.object({
    identifier: z.string()
        .min(1, { message: "メールアドレスまたはユーザー名を入力してください。" })
        .refine(
            (value) => {
                const isEmail = z.string().email().safeParse(value).success;
                const isUsername = /^[a-zA-Z0-9_\-]{3,12}$/.test(value);
                return isEmail || isUsername;
            },
            { message: "メールアドレスまたはユーザ名が正しくありません。" }
        ),
    password: z.string().min(1, { message: "パスワードを入力してください。" }),
    })

type RegisterInput = z.infer<typeof loginSchema>

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterInput>({
        resolver: zodResolver(loginSchema),
    })
    const onSubmit = (data: RegisterInput) => {
        console.log(data)
    }

    return (
        <div className="rounded-2xl bg-[#ffffff] dark:bg-[#303030] md:px-6 py-10 md:mx-4 my-4">
            <h1 className="text-center text-4xl p-4">ログイン</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2 p-4"
            >
                <InputField
                    label="メールアドレスまたはユーザー名"
                    register={register}
                    name="identifier"
                    error={errors.identifier?.message}
                    placeholder="メールアドレスまたはユーザ名を入力"
                />
                <InputField
                    label="パスワード"
                    register={register}
                    name="password"
                    type="password"
                    error={errors.password?.message}
                    placeholder="パスワードを入力"
                />
                <div className="flex justify-end items-center gap-8">
                    <Link
                        href="/user/register"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-800 dark:hover:text-blue-600 transition"
                    >新規登録の方はこちら</Link>
                    <button
                        type="submit"
                        className="text-1xl cursor-pointer px-4 py-2 rounded-md text-white font-bold bg-blue-600 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-600 transition"
                    >ログイン</button>
                </div>
            </form>
        </div>
    )
}