import LinkIcon from "../UI/LinkIcon";

export default function JavaScriptDisabled() {
    return (
        <>
            <style>{`
                #hide-banner:checked ~ #banner {
                display: none;
                }
            `}</style>

            <input type="checkbox" id="hide-banner" className="hidden"/>
            
            <noscript id="banner" className="sticky bottom-0 z-50 w-full h-[20vh] bg-white/95 rounded-t-lg flex flex-col items-center justify-center md:gap-4">
                <label htmlFor="hide-banner" className="md:text-lg absolute top-0 right-0 p-4 cursor-pointer">閉じる</label>
                <h1 className="text-[clamp(1rem,2.5vw,2.5rem)]">当サイトはJavaScriptを有効にする必要があります。</h1>
                <a href="https://support.google.com/admanager/answer/12654?hl=ja" target="_blank" rel="noopener noreferrer" className="text-[clamp(1rem,2.5vw,2rem)] text-blue-600 underline hover:text-blue-800">
                    JavaScriptを有効にする方法
                    <LinkIcon className="size-[clamp(1rem,2.5vw,2.5rem)]"/>
                </a>
            </noscript>
        </>
    )
}