type LinkIconProps = {
    className?: string;
};

export default function LinkIcon({ className }: LinkIconProps) {
    return (
        <img src="/UI/link_icon.svg" alt="リンクアイコン" className={`inline-block ${className || ''}`}/>
    );
}