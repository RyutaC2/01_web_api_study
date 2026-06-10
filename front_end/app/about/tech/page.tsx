import Terminal from "@/app/components/UI/terminal";
import Section from "@/app/components/UI/Section";

export default function TechPage() {
    return (
        <>
            <Terminal title="Tech">
                <h1>てｃｈページです！！！！</h1>
            </Terminal>
            <br/>
            <Section>
                <h2 className="text-2xl font-bold">Programming Languages</h2>
            </Section>
            <Section>
                <h2 className="text-2xl font-bold">Frameworks</h2>
            </Section>
            <Section>
                <h2 className="text-2xl font-bold">Tools</h2>
            </Section>
        </>
    )
}