import Terminal from "@/app/components/UI/terminal";
import Section from "@/app/components/UI/Section";

export default function ContactPage() {
    return (
        <>
            <Terminal title="Contact Form">
                <p className="text-white whitespace-normal sm:whitespace-pre">
                    ~ $ <span className="text-green-700">ssh</span> ryuta@contact<br/>
                    ** WARNING: connection is not using a post-quantum key exchange algorithm.<br/>
                    ** This session may be vulnerable to "store now, decrypt later" attacks.<br/>
                    ** The server may need to be upgraded. See https://openssh.com/pq.html<br/>
                    ryuta@contact's password:<br/>
                </p>
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