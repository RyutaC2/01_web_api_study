"use client";

import { useState, useEffect } from "react";

export default function AboutPage() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
    const fetchUser = async (targetName: string) => {
        try {
            const res = await fetch(`https://api.github.com/users/${targetName}`);
            if (res.ok) {
                const data = await res.json();
                setUserData(data);
            }
        } catch (e) {
            console.error(e);
        }
    };
    
    if (username === "") {
        fetchUser("RyutaC2");
        return;
    }
    
    const timer = setTimeout(() => {
        fetchUser(username);
    }, 2000);

    return () => clearTimeout(timer);
    }, [username]);

    return (
        <div>
            <form className="flex flex-col font-mono gap-2 bg-[#282c34] border-2 border-[#1d1f23] rounded-xl p-4 pb-10 my-8">
                <label className="text-white whitespace-pre">
                    ~ $ <span className="text-green-700">whoami</span><br/>
                    RyutaC2<br/><br/>
                    ~ $ <span className="text-green-700">finger</span> RyutaC2<br/>
                    Login: RyutaC2                  Name: Ryuta Iguchi<br/>
                    Directory: /home/RyutaC2        Shell: /bin/zsh<br/>
                    On since Thu June 25 20:20 (JST) on :0 from :0 (messages off)<br/>
                    No mail.<br/>
                    No Plan.<br/>
                </label>
                <div className="flex">
                    <label className="text-white">
                        ~ $ <span className="text-green-700">finger</span>
                    </label>
                    <input
                        type="text"
                        value={username}
                        placeholder="ユーザー名を入力してください"
                        onChange={(e) => setUsername(e.target.value)}
                        className="flex-1 text-white h-full focus:outline-none pl-2"
                    />
                </div>
            </form>

            <p>上のシェルにユーザ名を入力すると、GitHubのプロフィール情報を取得できます。</p>
            
            <div className="h-full w-full">
                {userData && (
                    <div className="flex flex-col gap-4 rounded-xl bg-gray-100 border-2 border-gray-300 p-4 mt-8">
                        <div className="flex gap-4">
                            <img src={userData.avatar_url} alt={userData.name} width="100" height="100" className="rounded-full"/>
                            <div className="flex flex-col justify-center">
                                <h2 className="text-3xl font-bold">{userData.name}</h2>
                                <p className="text-gray-600">@{userData.login}</p>
                                <p className="pt-2">{userData.bio}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}