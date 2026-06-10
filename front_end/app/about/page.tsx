"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface UserData {
    login: string;
    name: string | null;
    avatar_url: string;
    html_url: string;
    bio: string | null;
    location: string | null;
    company: string | null;
    email: string | null;
    created_at: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    
}

interface RepoData {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
    open_issues_count: number;
    topics: string[];
    archived: boolean;
    created_at: string;
    updated_at: string;
    license: { name: string } | null;
}

export default function AboutPage() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState<UserData | null>(null);
    const [reposData, setReposData] = useState<RepoData[]>([]);
    const [notFound, setNotFound] = useState(false);

    const fetchUser = useCallback(async (targetName: string) => {
        try {
            const user_res = await fetch(`https://api.github.com/users/${targetName}`);
            const repos_res = await fetch(`https://api.github.com/users/${targetName}/repos`);
            if (user_res.ok && repos_res.ok) {
                const userData = await user_res.json();
                const reposData = await repos_res.json();
                setUserData(userData);
                setReposData(reposData);
                setNotFound(false);
            } else {
                setNotFound(true);
                setUserData(null);
            }
        } catch (e) {
            console.error(e);
            setNotFound(true);
            setUserData(null);
        }
    }, []);

    useEffect(() => {
        fetchUser("RyutaC2");
    }, [fetchUser]);
    
    const handleSearch = () => {
        const target = username === "" ? "RyutaC2" : username;
        fetchUser(target);
    };

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                }}
                className="flex flex-col font-mono gap-2 bg-[#282c34] border-2 border-[#1d1f23] rounded-xl mt-8"
            >
                <label className="w-full h-full cursor-text p-4 pb-10 ">
                    <p className="text-white whitespace-normal sm:whitespace-pre">
                        ~ $ <span className="text-green-700">whoami</span><br/>
                        RyutaC2<br/><br/>
                        ~ $ <span className="text-green-700">finger</span> RyutaC2<br/>
                        Login: RyutaC2                  Name: Ryuta Iguchi<br/>
                        Directory: /home/RyutaC2        Shell: /bin/zsh<br/>
                        On since Thu June 25 23:06 (JST) on :0 from :0 (messages off)<br/>
                        No mail.<br/>
                        No Plan.<br/><br/>
                    </p>
                    <div className="flex items-center">
                        <p className="text-white">
                            ~ $ <span className="text-green-700">finger</span>
                        </p>
                        <input
                            type="text"
                            value={username}
                            placeholder="ユーザー名を入力してください"
                            onChange={(e) => setUsername(e.target.value)}
                            className="flex-1 text-white h-full focus:outline-none pl-2"
                        />
                    </div>
                    {userData && userData.login !== "RyutaC2" && notFound === false && (
                        <p className="text-white whitespace-normal sm:whitespace-pre">
                            Login: {userData.login}                  Name: {userData.name || userData.login}<br/>
                            Directory: /home/{userData.login}        Shell: /bin/bash<br/>
                            On since {userData ? new Date(userData.created_at).toLocaleString("en-US", {
                                weekday: "short",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: false,
                            }).replace(/,/g, "").replace(/ at/g, "") : "N/A"}<br/>
                            (JST) on :pts/0 from :185.199.108.153 (messages off)<br/>
                        {userData?.email ? `Mail: ${userData.email}` : "No mail."}<br/>
                        No Plan.<br/>
                        </p>
                    )}
                    {notFound && (
                        <p className="text-red-500">
                            ユーザーが見つかりませんでした。ユーザー名を確認してください。
                        </p>
                    )}
                </label>
            </form>

            <button onClick={handleSearch} className="w-full center rounded-xl text-xl text-white bg-green-500 hover:bg-green-700 active:bg-green-700 dark:bg-green-700 dark:hover:bg-green-500 dark:active:bg-green-500 cursor-pointer py-2 mt-1">
                ユーザーを検索
            </button>

            <p className="my-6 text-center text-gray-500">上のシェルにユーザ名を入力し検索すると、GitHubのプロフィール情報を取得できます。</p>
            
            <div className="h-full w-full">
                {userData && (
                    <article>
                        <section className="flex flex-col gap-4 rounded-xl bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 p-4">
                            <div className="flex gap-4">
                                <Image src={userData.avatar_url} alt={userData.name ?? userData.login} width={100} height={100} className="aspect-square rounded-full shrink-0 object-cover self-start"/>
                                <div className="flex flex-col justify-center">
                                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-3xl font-bold">
                                        {userData.name ? userData.name : userData.login}
                                    </a>
                                    <p className="text-gray-600 dark:text-gray-400">@{userData.login}</p>
                                    <p className="pt-2">{userData.bio}</p>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-col gap-2 rounded-xl bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 px-8 py-4 mt-1">
                            <h3 className="text-2xl font-bold">GitHub Stats</h3>
                            <div className="flex flex-col md:flex-row gap-8">
                                <ul className="md:w-1/2 list-none">
                                    <li>Location： {userData.location ? userData.location : "未設定"}</li>
                                    <li>Company： {userData.company ? userData.company : "未設定"}</li>
                                    <li>Email： {userData.email ? userData.email : "未設定"}</li>
                                    <li>
                                        Created： {new Date(userData.created_at).toLocaleString("ja-JP", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                            weekday: "short",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                            second: "2-digit"
                                        })}
                                    </li>
                                </ul>
                                <ul className="md:w-1/2 list-none">
                                    <li>Public Repositories： {userData.public_repos}</li>
                                    <li>Public Gists： {userData.public_gists}</li>
                                    <li>Followers： {userData.followers}</li>
                                    <li>Following： {userData.following}</li>
                                </ul>
                            </div>
                        </section>
                        <section className="flex flex-col gap-2 rounded-xl bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 px-8 py-4 mt-1">
                            <h3 className="text-2xl font-bold">Public Repositories</h3>
                            {userData.public_repos === 0 ? (
                                <p className="py-2">{userData.login} さんは公開リポジトリを持っていません。</p>
                            ) : (
                                <ul className="list-none space-y-2">
                                    {reposData.map((repo) => (
                                        <li key={repo.id} className="border border-gray-300 dark:border-gray-600 rounded-xl p-3">
                                            <div className="flex items-center mb-1">
                                                <span className="material-symbols-outlined mr-1" style={{ fontSize: "24px" }}>book</span>
                                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-xl text-blue-600 hover:text-blue-800 dark:text-blue-800 dark:hover:text-blue-600 transition font-bold break-all">
                                                    {repo.name}
                                                </a>
                                            </div>
                                            {repo.topics && repo.topics.length > 0 && (
                                                <div className="flex flex-wrap gap-1 mt-2">
                                                    {repo.topics.map((topic: string) => (
                                                        <span key={topic} className="border border-blue-700 text-blue-700 text-xs rounded-full px-2 py-0.5 mr-1">
                                                            {topic}
                                                        </span>
                                                    ))}
                                                    {repo.archived && (
                                                        <span className="border border-red-700 text-red-700 text-xs rounded-full px-2 py-0.5">Archive</span>
                                                    )}
                                                </div>
                                            )}
                                            <p className="text-sm text-gray-600 dark:text-gray-400 p-1">
                                                {repo.description}
                                            </p>
                                            <div className="flex flex-col md:flex-row gap-4">
                                                <ul className="md:w-1/2 list-none mt-2">
                                                    <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                        <span className="material-symbols-outlined mr-1" style={{ fontSize: "16px" }}>code_xml</span>
                                                        Language： {repo.language || "不明"}
                                                    </li>
                                                    <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                        <span className="material-symbols-outlined mr-1" style={{ fontSize: "16px" }}>star</span>
                                                        Stars： {repo.stargazers_count}
                                                    </li>
                                                    <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                        <span className="material-symbols-outlined mr-1" style={{ fontSize: "16px" }}>family_history</span>
                                                        Forks： {repo.forks_count}
                                                    </li>
                                                    <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                        <span className="material-symbols-outlined mr-1" style={{ fontSize: "16px" }}>visibility</span>
                                                        Watchers： {repo.watchers_count}
                                                    </li>
                                                </ul>
                                                <ul className="md:w-1/2 list-none mt-2">
                                                    <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                        <span className="material-symbols-outlined mr-1" style={{ fontSize: "16px" }}>bug_report</span>
                                                        Open Issues： {repo.open_issues_count}
                                                    </li>
                                                    <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                        <span className="material-symbols-outlined mr-1" style={{ fontSize: "16px" }}>copyright</span>
                                                        License： {repo.license ? repo.license.name : "未設定"}
                                                    </li>
                                                    <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                        <span className="material-symbols-outlined mr-1" style={{ fontSize: "16px" }}>update</span>
                                                        Updated at： {new Date(repo.updated_at).toLocaleString("ja-JP", {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                            weekday: "short",
                                                            hour: "2-digit",
                                                            minute: "2-digit",
                                                            second: "2-digit"
                                                        })}
                                                    </li>
                                                    <li className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                                        <span className="material-symbols-outlined mr-1" style={{ fontSize: "16px" }}>create</span>
                                                        Created at： {new Date(repo.created_at).toLocaleString("ja-JP", {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                            weekday: "short",
                                                            hour: "2-digit",
                                                            minute: "2-digit",
                                                            second: "2-digit"
                                                        })}
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    </article>
                )}
            </div>
            <p className="text-center text-xl mt-6">♡ Powered by GitHub API ♡</p>
        </>
    )
}