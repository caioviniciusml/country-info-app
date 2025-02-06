# Country Info App

This project was developed as a task assessment for the FullStack Software Engineer interview at DevelopsToday. It's a full-stack web application that provides information about countries.


## Tech Stack

- Backend: Node.js, Express.js, and TypeScript
- Frontend: Next.js, TypeScript and Tailwind CSS

## Project Overview

The application consists of two main parts:

### Backend (BE): Built with Node.js, Express.js, and TypeScript, the backend provides two API endpoints:
- `/countries`: Returns a JSON array containing a list of all available countries.
- `/countries/:countryCode`: Returns a JSON object with detailed information about a specific country, including 2 objects:
    - `"data"`: Information about the country.
    - `"flagData"`: Information about the country's flag.
      
### Frontend (FE): Built with Next.js and styled with Tailwind CSS, the frontend consumes the backend API to display country information in a user-friendly interface.

## Implementation Notes

Due to time constraints, I was unable to implement the population charts as required. However, the core functionality of the application, including the backend API and the basic frontend layout, is complete.

## Local Installation

To run the project locally, follow these steps:

## BACKEND (BE)

#### 1. Clone the Repository

`git clone https://github.com/seu-usuario/country-info-app.git`

#### 2. Navigate to the backend directory:

`cd country-info-app/BE`

#### 3. Install dependencies:

`npm install`

#### 4. Create .env file:

Create a .env file in the root of the BE directory and add your environment variables.

`PORT = 8000`
</br>
`DATANAGER_API_BASE_URL = 'https://date.nager.at/api/v3'`
</br>
`COUNTRIESNOW_API_BASE_URL = 'https://countriesnow.space/api/v0.1/countries'`

I'm sharing these .env variables only because these API's are Open Source, so it's free for anyone use them.

#### 5. Start the development server:

`npm run dev`

Certify the server kepping running

## FRONTEND (FE)

#### 1. Go back to the root directory

`cd ..`

#### 2. Navigate to the frontend directory:

`cd fe`

#### 3. Install dependencies:

`npm install`

#### 4. Create .env file:

Create a .env file in the root of the BE directory and add your environment variables.

`API_URL = 'http://localhost:8000'`

I'm sharing this .env variables only because this is a Local API.

#### 5. Start the development server:

`npm run dev`

Now you just need to acess `https://localhost:3000/`

## API Endpoints

- `GET /countries`: Returns a JSON array of countries.
- `GET /countries/:countryCode`: Returns a JSON object with information about a specific country.

## Future Improvements

- Implement population charts using a charting library (e.g Tremor).
- Add more detailed information about each country.
- Improve the UI/UX of the frontend.
- Add unit and integration tests.

## Contact

If you have any questions or suggestions, please feel free to contact me.

Thank you for your time and consideration.
