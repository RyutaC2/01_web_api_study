import { YouTubeEmbed } from '@next/third-parties/google'

type MovieItemProps = {
    title: string;
    description: string;
    youtubeId: string;
    releaseYear: string;
    runtime: string;
    genre: string;
    director: string;
    myRating: string;
    difficulty: number;
    emotionalImpact: number;
    visuals: number;
    immersion: number;
    watchability: number;
}

export default function MovieItem({ title, description, youtubeId, releaseYear, runtime, genre, director, myRating, difficulty, emotionalImpact, visuals, immersion, watchability }: MovieItemProps) {
    return (
        <li className="flex flex-col items-center w-full mb-6">
            <div className="bg-gray-200 dark:bg-gray-800 rounded-x-xl rounded-t-xl pt-6 px-6 pb-2">
                <div  className="shrink-0 w-full h-auto rounded-xl mb-4">
                    <div className="overflow-hidden rounded-xl">
                        <YouTubeEmbed videoid={youtubeId}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-4xl font-bold">{title}</p>
                    <p className="mt-4">{description}</p>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center bg-gray-300 dark:bg-gray-700 rounded-b-xl pb-6 px-6 pt-2">
                <div className="w-1/2 flex">
                    <ul style={{ textAlignLast: 'justify' }} className="w-1/5 list-none list-inside">
                        <li>公開年</li>
                        <li>上映時間</li>
                        <li>ジャンル</li>
                        <li>監督</li>
                        <li>コメント</li>
                    </ul>
                    <ul className="flex-1 w-full list-none list-inside">
                        <li>：{releaseYear}</li>
                        <li>：{runtime}</li>
                        <li>：{genre}</li>
                        <li>：{director}</li>
                        <li>：{myRating}</li>
                    </ul>
                </div>
                <div className="w-1/2 flex">
                    <ul style={{ textAlignLast: 'justify' }} className="w-1/5 list-none list-inside">
                        <li>難解さ</li>
                        <li>感動</li>
                        <li>映像美</li>
                        <li>没入感</li>
                        <li>観やすさ</li>
                    </ul>
                    <ul className="flex-1 w-full list-none list-inside">
                        <li>：{difficulty}</li>
                        <li>：{emotionalImpact}</li>
                        <li>：{visuals}</li>
                        <li>：{immersion}</li>
                        <li>：{watchability}</li>
                    </ul>
                </div>
            </div>
        </li>
    )
}