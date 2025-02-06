import Link from "next/link";

interface CountryProps{
    countryName: string;
    countryCode: string;
}

export function CountryCard({ countryName, countryCode }: CountryProps){
    return(
        <Link 
            className="min-w-80 py-4 px-8 text-center border-2 hover:bg-primary text-primary hover:text-white font-bold border-primary rounded-2xl" 
            href={`/${countryCode}`}>
            {countryName}
        </Link>
    )
}