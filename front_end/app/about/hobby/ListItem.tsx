import Image from "next/image";

type ListItemProps = {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    imageWidth?: number;
    imageHeight?: number;
    photographer: string;
    license: string;
    licenseUrl: string;
}

export default function ListItem({ title, description, imageSrc, imageAlt, imageWidth, imageHeight, photographer, license, licenseUrl }: ListItemProps) {
    return (
        <li className="flex flex-col md:flex-row items-center w-full bg-gray-200 dark:bg-gray-800 rounded-xl mb-2">
            <figure className="shrink-0 w-full md:w-2/5 px-6 pt-6 pb-2">
                <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth || 1600}
                height={imageHeight || 900}
                className="w-full h-auto object-cover rounded-xl"
                />
                <figcaption className="text-xs text-gray-500 text-center mb-1">
                    {`撮影: ${photographer} / `}
                    <a href={licenseUrl} target="_blank" rel="noopener noreferrer">
                        {license}
                    </a>
                </figcaption>
            </figure>
            <div className="flex flex-col pr-6">
                <p className="text-3xl font-bold">{title}</p>
                <p className="mt-2">{description}</p>
            </div>
        </li>
    )
}