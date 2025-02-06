import { CountryCard } from "./components/countryCard";

interface Country{
  name: string;
  countryCode: string;
}

const apiUrl = process.env.API_URL

export default async function Countries() {
  const data = await fetch(`${apiUrl}/countries`);
  const availableCountries = await data.json();

  return (
    <main className="w-full min-h-screen p-10 lg:px-40 flex flex-col gap-10 bg-secondary">
      <h1 className="text-center text-primary text-4xl sm:text-6xl 2xl:text-8xl font-bold">COUNTRY INFO APP</h1>
      <ul className="flex flex-col items-center gap-5">
        {availableCountries.data.map((country: Country) => (
          <CountryCard key={country.countryCode} countryName={country.name} countryCode={country.countryCode} />
        ))}
      </ul>
    </main>
  );
}
