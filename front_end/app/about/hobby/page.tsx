import Terminal from "@/app/components/UI/terminal";
import Section from "@/app/components/UI/Section";
import GoogleIcon from "@/app/components/UI/GoogleIcon";

export default function HobbyPage() {
    return (
        <>
            <Terminal title="Hobby">
                <p className="text-white whitespace-normal sm:whitespace-pre">
                    ~ $ <span className="text-green-700">echo</span> $HOBBY<br/>
                    programming:music:movies<br/><br/>
                </p>
            </Terminal>
            <br/>
            <Section>
                <h2 className="flex items-center text-2xl font-bold"><GoogleIcon id="code_xml" />Programming</h2>
                <p>プログラミングが趣味です。特にWeb開発が好きで、フロントエンドからバックエンドまで幅広く楽しんでいます。</p>
            </Section>
            <Section>
                <h2 className="flex items-center text-2xl font-bold"><GoogleIcon id="music_note_2" />Music</h2>
            </Section>
            <Section>
                <h2 className="flex items-center text-2xl font-bold"><GoogleIcon id="movie" />Movies</h2>
            </Section>
        </>
    )
}