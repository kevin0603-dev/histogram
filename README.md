
<div align="center">
  <a href="https://highstorm.app?ref=github">highstorm.app</a>
</div>
<br/>

## Installation

To install the project and its dependencies, follow these steps:

1.  Ensure you have `pnpm` installed on your system. If not, you can install it by running:

    ```sh-session
    npm install -g pnpm
    ```

2.  Run the following command to install the project dependencies:
    ```sh-session
    pnpm install
    ```

### Environment Variables

After setting up the required services, you need to set the corresponding environment variables in the `/apps/web/.env` file. To do this, follow these steps:

1.  Make a copy of the `.env.example` file:
    ```sh-session
    cp apps/web/.env.example apps/web/.env
    ```
2.  Open the `/apps/web/.env` file in a text editor and populate the values for the services mentioned above.

## Database Preparation

### Prisma

To prepare the Prisma database, follow these steps:

1.  Navigate to the `/apps/web` directory:
    ```sh-session
    cd apps/web
    ```
2.  Run the following command to push the database schema and generate Prisma Client:
    ```sh-session
    npx prisma db push
    ```

### Tinybird

To prepare the Tinybird database, follow these steps:

1.  Download the Tinybird CLI from [here](https://www.tinybird.co/docs/cli.html) and install it on your system.
2.  After authenticating with the Tinybird CLI, navigate to the `/apps/web/lib/tinybird` directory:
    ```sh-session
    cd apps/web/lib/tinybird
    ```
3.  Push the necessary datasources using the following command:
    ```sh-session
    tb push datasources/
    tb push
    ```

**Note: If the CLERK_WEBHOOK_SECRET env variable is not set, pass an empty string, and make sure to visit `/onboarding` after signing up.**

## Build

To build the project, execute the following command:

```sh-session
pnpm build
```

## Run

To run the project locally, use the following command:

```sh-session
pnpm turbo run dev --filter=web
```
