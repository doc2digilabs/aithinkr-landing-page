# Project Understanding Guide

## 1. Overview

Welcome to the `aithinkr-WEB-Platform` project! This is a modern web application built with **React** and **TypeScript**, designed to serve as the main website for AIThinkr. The application is more than just a static landing page; it includes dynamic features such as user authentication, user profiles, and dedicated sections for various content like a blog, careers, and product information.

The project is bootstrapped with **Vite**, ensuring a fast and efficient development experience. It leverages **Supabase** for its backend services, including database and authentication, and uses **Tailwind CSS** for styling, complemented by a rich set of UI components.

## 2. Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: A custom component library in `src/components/ui`, likely based on [shadcn/ui](httpshttpss://ui.shadcn.com/), which uses Radix UI primitives.
- **Backend & Database**: [Supabase](https://supabase.io/)
- **Package Manager**: [Bun](https://bun.sh/) (inferred from `bun.lockb`)

## 3. Project Structure

The codebase is organized to separate concerns, making it easier to navigate and maintain.

```
/
├── supabase/
│   └── migrations/
│       └── 001_initial_schema.sql  # Initial database schema
├── src/
│   ├── assets/         # Static assets like images, logos, etc.
│   ├── components/     # Reusable React components
│   │   ├── ui/         # Core, generic UI components (Button, Card, etc.)
│   │   ├── layout/     # Components that define the page structure (Header, Footer)
│   │   ├── auth/       # Components related to user authentication (Login, Register)
│   │   └── [feature]/  # Components specific to a feature (e.g., home, products)
│   ├── lib/            # Shared libraries, utilities, and configurations
│   │   └── supabaseClient.ts # Supabase client initialization and configuration
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Top-level page components, mapped to routes
│   └── ...
├── public/             # Static assets that are copied directly to the build output
└── package.json        # Project dependencies and scripts
```

### Key Directories

-   **`src/components`**: This is where most of a developer's work will be.
    -   **`ui/`**: Contains generic, reusable UI components that form the design system. Before creating a new UI element, check here first.
    -   **Feature-based directories (e.g., `home/`, `products/`, `auth/`)**: These contain components that are specific to a particular feature or page. This helps in organizing the code logically.
-   **`src/pages`**: Each file in this directory (or its subdirectories) represents a route in the application. These components are responsible for fetching data and composing the page using components from `src/components`.
-   **`src/lib`**: Contains core logic and configurations.
    -   `supabaseClient.ts`: This is a critical file that configures the connection to the Supabase backend. All interactions with Supabase should go through this client.
    -   `utils.ts`: A home for miscellaneous utility functions that can be used across the application.
-   **`supabase/migrations`**: This directory contains the database migration scripts. These scripts are used to manage the database schema.

## 4. Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)
-   [Bun](https://bun.sh/) (as inferred from `bun.lockb`)
-   A [Supabase](https://supabase.com/) account and project.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd aithinkr-landing-page
    ```

2.  **Install dependencies:**
    This project uses Bun as the package manager.
    ```bash
    bun install
    ```

3.  **Set up environment variables:**
    The application requires a connection to a Supabase backend. You will need to create a `.env.local` file in the root of the project and add your Supabase project URL and anon key.
    ```bash
    cp .env .env.local
    ```
    Now, edit `.env.local` with your credentials.
    ```env
    VITE_SUPABASE_URL=your-supabase-project-url
    VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```

### Database Setup

To set up the database, you need to apply the initial schema using the Supabase CLI.

1.  **Install the Supabase CLI:**
    ```bash
    npm install -g supabase
    ```

2.  **Login to Supabase:**
    ```bash
    supabase login
    ```

3.  **Link your project:**
    ```bash
    supabase link --project-ref <your-project-ref>
    ```

4.  **Apply the database migrations:**
    ```bash
    supabase db push
    ```

This will execute the SQL script in `supabase/migrations` and set up your database.

### Running the Application

-   **Development:** To start the development server with hot-reloading.
    ```bash
    bun run dev
    ```
    The application will be available at `http://localhost:8080` (or another port if 8081 is busy).

-   **Build:** To create a production-ready build of the application.
    ```bash
    bun run build
    ```
    The output will be in the `dist/` directory.

-   **Lint:** To run the linter and check for code quality issues.
    ```bash
    bun run lint
    ```

## 5. How to Contribute

1.  **Create a new branch:**
    ```bash
    git checkout -b feature/your-feature-name
    ```
2.  **Make your changes:**
    -   Follow the existing coding style and conventions.
    -   Add new components to the appropriate directory in `src/components`.
    -   If you add a new page, create a new file in `src/pages`.
3.  **Test your changes:**
    -   Run the linter to ensure your code is clean: `bun run lint`.
    -   Manually test your changes in the browser to ensure they work as expected.
4.  **Commit your changes:**
    -   Write a clear and concise commit message.
5.  **Push your changes and open a pull request.**

This guide should provide a solid starting point for any new developer joining the project. If you have any questions, please don't hesitate to ask
