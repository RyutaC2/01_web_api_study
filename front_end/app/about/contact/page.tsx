import Terminal from "@/app/components/UI/terminal";
import Section from "@/app/components/UI/Section";

export default function ContactPage() {
    return (
        <>
            <Terminal title="Contact Form">
                <h1>連絡フォームページです！！！！</h1>
            </Terminal>
            <br/>
            <Section>
                <h2 className="text-2xl font-bold">Email</h2>
            </Section>
            <Section>
                <h2 className="text-2xl font-bold">Phone</h2>
            </Section>
            <Section>
                <h2 className="text-2xl font-bold">Social Media</h2>
            </Section>
        </>
    )
}