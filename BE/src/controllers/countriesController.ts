import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config()

const dataNagerAPI = process.env.DATANAGER_API_BASE_URL;
const countriesNowAPI = process.env.COUNTRIESNOW_API_BASE_URL;

export async function getAvailableCountries(req: Request, res: Response){
    try {
        const availableCountriesResponse = await fetch(`${dataNagerAPI}/AvailableCountries`);
        const data = await availableCountriesResponse.json();

        res.status(200).json({ data });

      } catch (error: any) {
        console.error("Error fetching available countries:", error);
        res.status(500).json({ error: "Failed to fetch available countries" });
      }
}

export async function getCountryInfo(req: Request, res: Response){
    const { countryCode } = req.params;

    try {
      const countryInfoResponse = await fetch(`${dataNagerAPI}/CountryInfo/${countryCode}`);
      const countryFlagResponse = await fetch(`${countriesNowAPI}/flag/images`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          "iso2": countryCode
        })
      });
  
      const data = await countryInfoResponse.json();
      const flagData = await countryFlagResponse.json();
  
      res.status(200).json({ data, flagData });
  
    } catch (error: any) {
      console.error(`Error fetching country info for ${countryCode}:`, error);
      res.status(500).json({ error: `Failed to fetch country info for ${countryCode}` });
    }
}