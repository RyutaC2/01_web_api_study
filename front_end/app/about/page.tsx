"use client";

import { useState, useEffect } from "react";

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

    const fetchUser = async (targetName: string) => {
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
    };

    useEffect(() => {
        fetchUser("RyutaC2");
    }, []);
    
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
                className="flex flex-col font-mono gap-2 bg-[#282c34] border-2 border-[#1d1f23] rounded-xl p-4 pb-10 mt-8"
            >
                <p className="text-white whitespace-normal sm:whitespace-pre">
                    ~ $ <span className="text-green-700">whoami</span><br/>
                    RyutaC2<br/><br/>
                    ~ $ <span className="text-green-700">finger</span> RyutaC2<br/>
                    Login: RyutaC2                  Name: Ryuta Iguchi<br/>
                    Directory: /home/RyutaC2        Shell: /bin/zsh<br/>
                    On since Thu June 25 23:06 (JST) on :0 from :0 (messages off)<br/>
                    No mail.<br/>
                    No Plan.<br/>
                </p>
                <div className="flex">
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
            </form>

            <button onClick={handleSearch} className="w-full center rounded-md text-xl text-white bg-green-500 hover:bg-green-700 active:bg-green-700 dark:bg-green-700 dark:hover:bg-green-500 dark:active:bg-green-500 cursor-pointer py-2 mt-1">
                ユーザーを検索
            </button>

            <p className="my-6">上のシェルにユーザ名を入力すると、GitHubのプロフィール情報を取得できます。</p>
            
            <div className="h-full w-full">
                {userData && (
                    <article>
                        <section className="flex flex-col gap-4 rounded-xl bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 p-4">
                            <div className="flex gap-4">
                                <img src={userData.avatar_url} alt={userData.name ?? userData.login} width="100" height="100" className="aspect-square rounded-full shrink-0 object-cover self-start"/>
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
                                        <li key={repo.id} className="border border-gray-300 dark:border-gray-600 rounded-lg p-3">
                                            <div className="flex items-center mb-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className="text-black dark:text-white mr-1">
                                                    <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm0 0v-640 640Zm200-360 100-60 100 60-100-60-100 60Z"/>
                                                </svg>
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
                                                    <li className="text-sm text-gray-600 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="text-gray-600 dark:text-gray-400 inline-block mr-1">
                                                            <path d="M240-294 54-480l186-186 42 42-143 144 143 144-42 42Zm172 133-58-18 195-620 57 17-194 621Zm308-133-42-42 143-144-143-144 42-42 186 186-186 186Z"/>
                                                        </svg>
                                                        Language： {repo.language || "不明"}
                                                    </li>
                                                    <li className="text-sm text-gray-600 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="text-gray-600 dark:text-gray-400 inline-block mr-1">
                                                            <path d="m323-245 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"/>
                                                        </svg>
                                                        Stars： {repo.stargazers_count}
                                                    </li>
                                                    <li className="text-sm text-gray-600 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="text-gray-600 dark:text-gray-400 inline-block mr-1">
                                                            <path d="M600.5-379.5Q650-429 650-500t-49.5-120.5Q551-670 480-670t-120.5 49.5Q310-571 310-500t49.5 120.5Q409-330 480-330t120.5-49.5Zm-200-41Q368-453 368-500t32.5-79.5Q433-612 480-612t79.5 32.5Q592-547 592-500t-32.5 79.5Q527-388 480-388t-79.5-32.5ZM216-283Q98-366 40-500q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83q-146 0-264-83Zm264-217Zm222.5 174.5Q804-391 857-500q-53-109-154.5-174.5T480-740q-121 0-222.5 65.5T102-500q54 109 155.5 174.5T480-260q121 0 222.5-65.5Z"/>
                                                        </svg>
                                                        Forks： {repo.forks_count}
                                                    </li>
                                                    <li className="text-sm text-gray-600 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="text-gray-600 dark:text-gray-400 inline-block mr-1">
                                                            <path d="M373.5-103.5Q330-147 330-210q0-55 34.5-95.5T450-357v-93H210v-150H100v-280h280v280H270v90h420v-93q-51-11-85.5-51.5T570-750q0-63 43.5-106.5T720-900q63 0 106.5 43.5T870-750q0 55-34.5 95.5T750-603v153H510v93q51 11 85.5 51.5T630-210q0 63-43.5 106.5T480-60q-63 0-106.5-43.5Zm410-582.8q26.5-26.3 26.5-63.5t-26.3-63.7Q757.4-840 720.2-840t-63.7 26.3Q630-787.4 630-750.2t26.3 63.7q26.3 26.5 63.5 26.5t63.7-26.3ZM160-660h160v-160H160v160Zm383.5 513.7q26.5-26.3 26.5-63.5t-26.3-63.7Q517.4-300 480.2-300t-63.7 26.3Q390-247.4 390-210.2t26.3 63.7q26.3 26.5 63.5 26.5t63.7-26.3ZM240-740Zm480-10ZM480-210Z"/>
                                                        </svg>
                                                        Watchers： {repo.watchers_count}
                                                    </li>
                                                </ul>
                                                <ul className="md:w-1/2 list-none mt-2">
                                                    <li className="text-sm text-gray-600 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="text-gray-600 dark:text-gray-400 inline-block mr-1">
                                                            <path d="M503.5-289.48q9.5-9.48 9.5-23.5t-9.48-23.52q-9.48-9.5-23.5-9.5t-23.52 9.48q-9.5 9.48-9.5 23.5t9.48 23.52q9.48 9.5 23.5 9.5t23.52-9.48ZM453-433h60v-253h-60v253Zm27.27 353q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80Zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/>
                                                        </svg>
                                                        Open Issues： {repo.open_issues_count}
                                                    </li>
                                                    <li className="text-sm text-gray-600 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="text-gray-600 dark:text-gray-400 inline-block mr-1">
                                                            <path d="M402.5-482.5Q370-515 370-560t32.5-77.5Q435-670 480-670t77.5 32.5Q590-605 590-560t-32.5 77.5Q525-450 480-450t-77.5-32.5ZM244-40v-304q-45-47-64.5-103T160-560q0-136 92-228t228-92q136 0 228 92t92 228q0 57-19.5 113T716-344v304l-236-79-236 79Zm420.5-335.5Q740-451 740-560t-75.5-184.5Q589-820 480-820t-184.5 75.5Q220-669 220-560t75.5 184.5Q371-300 480-300t184.5-75.5ZM304-124l176-55 176 55v-171q-40 29-86 42t-90 13q-44 0-90-13t-86-42v171Zm176-86Z"/>
                                                        </svg>
                                                        License： {repo.license ? repo.license.name : "未設定"}
                                                    </li>
                                                    <li className="text-sm text-gray-600 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="text-gray-600 dark:text-gray-400 inline-block mr-1">
                                                            <path d="M483-120q-75 0-141-28.5T226.5-226q-49.5-49-78-115T120-482q0-75 28.5-140t78-113.5Q276-784 342-812t141-28q80 0 151.5 35T758-709v-106h60v208H609v-60h105q-44-51-103.5-82T483-780q-125 0-214 85.5T180-485q0 127 88 216t215 89q125 0 211-88t86-213h60q0 150-104 255.5T483-120Zm122-197L451-469v-214h60v189l137 134-43 43Z"/>
                                                        </svg>
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
                                                    <li className="text-sm text-gray-600 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentColor" className="text-gray-600 dark:text-gray-400 inline-block mr-1">
                                                            <path d="M550-320h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90ZM140-160q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h281l60 60h339q23 0 41.5 18.5T880-680v460q0 23-18.5 41.5T820-160H140Zm0-60h680v-460H456l-60-60H140v520Zm0 0v-520 520Z"/>
                                                        </svg>
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
        </>
    )
}