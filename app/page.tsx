import Link from "next/link";

export default function Home() {
    return (
        <main
            className="flex min-h-screen flex-col items-center justify-between p-20 mx-auto bg-gradient-to-b from-slate-800 to-sky-800 text-violet-400">


            <h1 className="">elluis-next-main</h1>
            <ul className="flex flex-col items-center justify-between">
                <li className="flex flex-col items-center justify-between">
                    <Link href="https://nextjs.org/docs">Install Next.js 13@latest - ✅</Link>
                </li>
                <li className="flex flex-col items-center justify-between">
                    🌟clean this sucker out! - ✅
                </li>
                <li className="flex flex-col items-center justify-between">
                    <Link href={"https://www.prisma.io/docs/getting-started/quickstart-typescript"}>

                        🌟add prisma - ✅
                    </Link>
                    installation used the following steps and commands:
                    <ul>
                        <li>pnpm add prisma --save-dev</li>
                        <li>pnpx prisma init --datasource-provider sqlite</li>
                        <li>updated prisma schema (initial schema is default :: user && post)</li>
                        <li>pnpm prisma migrate dev --name dev || name of db</li>
                        <li>pnpm add @prisma/client</li>
                    </ul>
                </li>
                <li className="flex flex-col items-center justify-between">
                    <Link href={"https://github.com/lukeed/clsx"}>CLSX</Link>
                </li>
                
            </ul>
            <p>
                🌶️ -- create a new favicon
                notes: 16x16 (32-bit) .ico file
            </p>


            <h2 className="text-2xl font-bold">🌟🌟🌟🌟🌟🌟🌟🌟🌟</h2>
            🌟 - Star
            🚀 - Rocket
            🌈 - Rainbow
            🍄 - Mushroom
            🎈 - Balloon
            🎁 - Gift
            🦄 - Unicorn
            🌻 - Sunflower
            🐾 - Paw Prints
            🍩 - Donut
            🍕 - Pizza
            🌶️ - Hot Pepper
            🎵 - Musical Note
            📚 - Books
            💎 - Gem Stone
            🍦 - Ice Cream
            🌵 - Cactus
            🐙 - Octopus
            🌎 - Earth
            🎠 - Carousel Horse


        </main>
)
}
