"use client";

import Tooltip from "../UI/Tooltip";

export default function AIChat() {
    return (
        <div className="sticky bottom-0 flex justify-end z-50">
            <Tooltip text="AIチャットを開く" position="top-left">
                <button
                    className="
                        mr-6 mb-6
                        w-[clamp(3rem,10vw,4rem)] h-[clamp(3rem,10vw,4rem)] rounded-full
                        bg-gray-700 dark:bg-gray-400 border-4 border-gray-800 dark:border-gray-300
                        bg-[url('/components/AIChat/chat_white.svg')] dark:bg-[url('/components/AIChat/chat_black.svg')]
                        bg-no-repeat bg-center bg-size-[70%]
                        transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95"
                    aria-label="AIチャットを開く"
                />
            </Tooltip>
        </div>
    );
}