import Image from "next/image";

type LinkIconProps = {
    className?: string;
};

export default function LinkIcon({ className }: LinkIconProps) {
    return (
        <Image src="/UI/link_icon.svg" alt="" aria-hidden="true" className={`inline-block ${className || ''}`} width={24} height={24}/>
    );
}