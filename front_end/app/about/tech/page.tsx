import Terminal from "@/app/components/UI/terminal";
import Section from "@/app/components/UI/Section";

const prompt_text = ` .my-tech
frontend:
    lang: [TypeScript, JavaScript]
    framework: [React, Next.js]
    styling: TailwindCSS
backend:
    lang: [Python, Go]
    framework: Echo
database:
    - PostgreSQL
    - DynamoDB`;

export default function TechPage() {
    return (
        <>
            <Terminal title="Tech">
                <p className="text-white whitespace-normal sm:whitespace-pre">
                    {`~ $ `}<span className="text-green-700">cat</span>{prompt_text}</p>
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