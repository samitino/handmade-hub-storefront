This is the store front of the Handmade Hub project

## Getting Started

First, install project dependencies by running on the command line from the project root directory:

```bash
npm install

```

Second, add project environment variables. You will need to create a .env file in the root directory, your variables will live in the .env files. Check the ".env.example" file to see all the required variables. You will need to get most of the environment variables from the third party services used. The followings are the third party services used:

# Clerk: for handling authentication. Create account, Check clerk documentation on how to use clerk and get clerk API keys. You will use the same Clerk API keys for both store front and back office projects.

# MongoDB: for database. Check MongoDB documentation on how to setup your database and get the database connection string. You will use the same connection string for both store front and back office projects.

second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Proceed to the nexts steps if server running successfully...

# Stripe Test Card

4242 4242 4242 4242
05/24 CVC:123

# By default stripe is in development mode, so you will use the above test card details for payments
