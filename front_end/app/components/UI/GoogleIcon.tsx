type GoogleIconProps = {
    id: string;
    size?: number;
};

export default function GoogleIcon({ id, size = 24 }: GoogleIconProps) {
    return (
        <span className="material-symbols-outlined mr-1" style={{ fontSize: `${size}px` }}>{id}</span>
    )
}