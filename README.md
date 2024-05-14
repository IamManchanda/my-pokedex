# My Pokedex App

A simple Pokedex application built with Next.js, TypeScript, Prisma, and tRPC.

## Tech Stack

- Next.js
- TypeScript
- Prisma
- PostgreSQL (Supabase)
- tRPC
- Material UI

## Features

- Search for individual Pokemon
- Search for multiple Pokemon
- Filter Pokemon by type

## Screenshots

### Home Page

![Home Page](https://github.com/IamManchanda/my-pokedex/assets/4970624/245df00a-aa70-4191-9757-7021f94fdeb3)

### Search for Pokemon

![Search for individual Pokemon](https://github.com/IamManchanda/my-pokedex/assets/4970624/8c823b4b-52bf-42eb-90ba-c86f9d8fc79d)

### Search for multiple Pokemon

![Search for multiple Pokemon](https://github.com/IamManchanda/my-pokedex/assets/4970624/4c105b3e-7cbf-4158-96f3-638402b36e78)

### Filter Pokemon by type

![Filter Pokemon by type - select input](https://github.com/IamManchanda/my-pokedex/assets/4970624/89c723f2-e005-4674-91cb-acc535142e19)
![Filter Pokemon by type - Result](https://github.com/IamManchanda/my-pokedex/assets/4970624/34fd9fed-00cf-4c7b-9f2f-7277153928f3)

## Prerequisites

- Node.js (>=14.0.0)
- npm (>=6.0.0) or yarn (>=1.22.0)
- Docker (>=20.10.0)

## Local Installation

### 1. Clone the Repository and change directory

```bash
git clone https://github.com/your-username/my-pokedex.git
cd my-pokedex
```

### 2. Set Up Environment Variables

Create a .env file in the root directory of the project and add the following variables:

```bash
DATABASE_URL="postgresql://postgres:password@localhost:5432/my-pokedex"
```

> Note: The start-database.sh script will update the DATABASE_URL password if necessary.

### 3. Start the PostgreSQL Database

Execute the start-database.sh script to start a PostgreSQL database using Docker:

```bash
./start-database.sh
```

#### Instructions for Windows Users

- Install WSL (Windows Subsystem for Linux) - [Instructions](https://learn.microsoft.com/en-us/windows/wsl/install)
- Install Docker Desktop for Windows - [Instructions](https://docs.docker.com/docker-for-windows/install/)
- Open WSL - `wsl`
- Run the script - `./start-database.sh`

### 4. Install Dependencies

```bash
npm install
# or
yarn install
```

### 5. Apply Prisma Migrations

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 6. Seed the Database

```bash
npm run db:seed
```

![Database Seeding](https://github.com/IamManchanda/my-pokedex/assets/4970624/de133aa8-ab35-436c-b292-2484c80095f8)

### 7. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 8. Prisma Studio (Optional)

You can use Prisma Studio to view data in the database. Start Prisma Studio with the following command:

```bash
npx prisma studio
```

## Deployment

Work in progress...
