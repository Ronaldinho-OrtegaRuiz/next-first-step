import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center">
            <span className="text-5xl">Next</span>

            <Link href={"/about"}>About Page</Link>
        </main>
    );
}
