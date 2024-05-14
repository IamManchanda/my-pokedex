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

![Home Page](https://github.com/IamManchanda/my-pokedex/assets/4970624/a8d3e40a-417a-4935-90db-60361691bfcf)

### Search for Pokemon

![Search for individual Pokemon - form input](https://github.com/IamManchanda/my-pokedex/assets/4970624/7d6886cd-58f7-4270-9c73-29e70c61d23a)
![Search for individual Pokemon - Result](https://github.com/IamManchanda/my-pokedex/assets/4970624/42e70d33-682a-4b17-861c-9f4946889670)

### Search for multiple Pokemon

![Search for multiple Pokemon - form input](https://github.com/IamManchanda/my-pokedex/assets/4970624/d043d7ae-3d87-492f-b0d4-390e3de3b5ce)
![Search for multiple Pokemon - Result](https://github.com/IamManchanda/my-pokedex/assets/4970624/7f2cece8-fbff-41ab-bfea-4048ccffa532)

### Filter Pokemon by type

![Filter Pokemon by type - select input](https://github.com/IamManchanda/my-pokedex/assets/4970624/a38e533a-30fd-4e53-a368-8780d67cbc40)
![Filter Pokemon by type - Result](https://github.com/IamManchanda/my-pokedex/assets/4970624/af094111-34db-446b-a79f-72ae9f30cc24)

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

> Note: Before proceeding, make sure you have Docker installed on your machine. Also, make sure to comment out `directUrl = env("DIRECT_URL")` in the `prisma/schema.prisma` file as it is not required for local development.

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

Deployment for this application has been done using Vercel and Supabase.
