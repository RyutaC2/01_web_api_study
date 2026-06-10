type TerminalProps = {
    children: React.ReactNode
    title: string
}

export default function Terminal({ children, title }: TerminalProps) {
    return (
        <div className="flex flex-col font-mono bg-[#282c34] border-2 border-[#1d1f23] rounded-xl mt-8">
            <div className="flex items-center gap-2 font-mono select-none bg-[#454c5a] ring-2 ring-[#454c5a] rounded-t-xl w-full p-2">
                <div className="bg-[#ec6765] rounded-full w-4 h-4"/>
                <div className="bg-[#f9c24e] rounded-full w-4 h-4"/>
                <div className="bg-[#98c379] rounded-full w-4 h-4"/>
                <div className="flex-1 text-center text-bold text-sm text-[#c9d1d9] pr-12">
                    <p>zsh - {title}</p>
                </div>
            </div>
            <div className="h-full w-full p-2">
                {children}
            </div>
        </div>
    )
}