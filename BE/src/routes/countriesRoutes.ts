import express, { Application } from "express";
import cors from "cors";
import { getAvailableCountries, getCountryInfo } from "../controllers/countriesController";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const routes = (app: Application) => {
    app.use(cors());
    app.use(express.json());

    app.get(`/countries`, getAvailableCountries);
    app.get(`/countries/:countryCode`, getCountryInfo);
};

export default routes;