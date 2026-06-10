import Terminal from "@/app/components/UI/terminal";

export default function HobbyPage() {
    return (
        <>
            <Terminal title="Hobby">
                <p className="text-white whitespace-normal sm:whitespace-pre">
                    ~ $ <span className="text-green-700">echo</span> $HOBBY<br/>
                    programming:music:movies<br/><br/>
                </p>
            </Terminal>
        </>
    )
}