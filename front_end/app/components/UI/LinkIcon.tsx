import Image from "next/image";

type LinkIconProps = {
    size?: number;
    className?: string;
};

export default function LinkIcon({ className, size = 24 }: LinkIconProps) {
    return (
        <Image src="/UI/link_icon.svg" alt="" aria-hidden="true" className={`inline-block ${className || ''}`} width={size} height={size}/>
    );
}