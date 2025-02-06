import Image from "next/image";
import Link from "next/link";
import { CountryCard } from "../components/countryCard";

interface Country{
    commonName: string;
    countryCode: string;
}

const apiUrl = process.env.API_URL

export default async function Country({ params }: { params: Promise<{ countryCode: string }> }) {
    const countryCode = (await params).countryCode;

    const data = await fetch(`${apiUrl}/countries/${countryCode}`);
    const countryData = await data.json();

    return (
        <main className="w-full min-h-screen bg-secondary">
            <div className="p-10 lg:px-40 flex flex-col items-center gap-10">
                <nav className="self-start text-primary text-base sm:text-lg underline">
                    <Link href={'/'}>Home</Link> 
                </nav>
                <h2 className="text-primary text-3xl sm:text-6xl lg:text-8xl font-bold">{countryData.data.commonName}</h2>
                <Image
                    src={countryData.flagData.data.flag}
                    alt={`${countryData.data.commonName} Flag`}
                    width={300}
                    height={300}>
                </Image>
                <div>
                    <h3 className="text-primary text-lg sm:text-xl lg:text-2xl font-bold text-center">BORDERS</h3>
                    <hr className="mt-2 mb-4 w-full h-1 bg-primary border-none"/>
                    <ul className="flex flex-col gap-5">
                        {countryData.data.borders.map((country: Country) => (
                            <CountryCard key={country.countryCode} countryName={country.commonName} countryCode={country.countryCode} />
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}