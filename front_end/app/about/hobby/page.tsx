import Terminal from "@/app/components/UI/terminal";
import Section from "@/app/components/UI/Section";
import GoogleIcon from "@/app/components/UI/GoogleIcon";
import ListItem from "@/app/about/hobby/ListItem";
import MovieItem from "@/app/about/hobby/MovieItem";

export default function HobbyPage() {
    return (
        <>
            <Terminal title="Hobby">
                <p className="text-white whitespace-normal sm:whitespace-pre">
                    ~ $ <span className="text-green-700">echo</span> $HOBBY<br/>
                    programming:music:movies<br/>
                </p>
            </Terminal>
            <br/>
            <Section>
                <h2 className="flex items-center text-2xl font-bold"><GoogleIcon id="code_xml" />Programming</h2>
                <p>プログラミングが趣味です。特にWeb開発が好きで、フロントエンドからバックエンドまで幅広く楽しんでいます。</p>
            </Section>
            <Section>
                <h2 className="flex items-center text-2xl font-bold"><GoogleIcon id="music_note_2" />Music</h2>
            </Section>
            <Section>
                <h2 className="flex items-center text-2xl font-bold"><GoogleIcon id="movie" />Movies</h2>
                <p>映画を見るのも好きです。不朽の名作やフィクション系（特にSFなど）をよく見ます。<br/>ここでは、私のおすすめの監督と、映画を紹介します。</p>
                
                <ul className="list-disc list-inside my-4">
                    <h3 className="text-xl font-bold mt-4 md:mt-0">おすすめの監督</h3>
                    <ListItem
                        title="Christopher Nolan"
                        description="好きな映画監督は、クリストーファー・ノーラン監督です。圧倒的な映像美と音響による迫力のある表現がとても上手で、難しい内容でもとりあえず映画見入ってしまう、吸引力のある作品を数多く作っています。"
                        imageSrc="/about/hobby/nolan.jpg"
                        imageAlt="Christopher Nolan"
                        photographer="HellaCinema"
                        license="CC BY-SA 4.0"
                        licenseUrl="https://creativecommons.org/licenses/by-sa/4.0"
                    />

                    <br/>

                    <h3 className="text-xl font-bold mt-4 md:mt-0">おすすめの映画</h3>
                    <MovieItem
                        title="Interstellar"
                        description="おすすめの映画は、インターステラーです。右から哲学、左から科学で殴られるかのような難しさがありますが、親子愛を描き、ストーリーが進むに連れパズルのピースがはまっていくようなストーリー展開がとても好きです。"
                        youtubeId="zSWdZVtXT7E"
                        releaseYear="2014年"
                        runtime="2時間49分"
                        genre="SF, Drama"
                        director="Christopher Nolan"
                        myRating="全員一度は見るべき映画"
                        difficulty={10}
                        emotionalImpact={7}
                        visuals={10}
                        immersion={10}
                        watchability={1}
                    />
                    <MovieItem
                        title="Back to the Future Series"
                        description="おすすめの映画は、インターステラーです。右から哲学、左から科学で殴られるかのような難しさがありますが、親子愛を描き、ストーリーが進むに連れパズルのピースがはまっていくようなストーリー展開がとても好きです。"
                        youtubeId="qvsgGtivCgs"
                        releaseYear=""
                        runtime=""
                        genre="SF, Comedy"
                        director="Robert Zemeckis"
                        myRating="★★★★☆☆"
                        difficulty={3}
                        emotionalImpact={3}
                        visuals={5}
                        immersion={7}
                        watchability={8}
                    />
                    <MovieItem
                        title="オデッセイ"
                        description="おすすめの映画は、インターステラーです。右から哲学、左から科学で殴られるかのような難しさがありますが、親子愛を描き、ストーリーが進むに連れパズルのピースがはまっていくようなストーリー展開がとても好きです。"
                        youtubeId="BpJjvYzLZb8"
                        releaseYear=""
                        runtime=""
                        genre="Drama"
                        director="Christopher Nolan"
                        myRating="★★★★☆☆"
                        difficulty={4}
                        emotionalImpact={5}
                        visuals={7}
                        immersion={7}
                        watchability={5}
                    />
                </ul>
            </Section>
        </>
    )
}