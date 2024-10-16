import {Navbar} from "@/component";

export default function GeneralLayout({children}:
{ children: React.ReactNode }) {
    return (

        <>
            <Navbar />
            <main className="flex flex-col items-center p-24">
            <p className="text-3xl">This is the</p>
            {children}
        </main>
            </>
    );
}