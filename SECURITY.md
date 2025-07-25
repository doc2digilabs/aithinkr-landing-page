# Supabase Security Guide

This document outlines the security model for this project, specifically regarding the use of Supabase for database interactions. It is critical that all developers understand and adhere to these principles to protect user data and maintain application integrity.

## API Keys: `anon` vs. `service_role`

Supabase provides two primary types of API keys. It is essential to understand the difference and use them correctly.

### 1. `anon` Key (Public Key)

-   **Purpose:** This key is intended for **client-side use**. It is safe to expose this key in the browser.
-   **How it's used:** The `anon` key is used to identify your Supabase project and handle requests from anonymous (not logged-in) users.
-   **Security:** The safety of this key relies entirely on **Row Level Security (RLS)** policies. On its own, this key has very limited power. It can only perform actions that are explicitly allowed by your RLS rules for an anonymous user.
-   **In this project:** We use the `anon` key (stored as `VITE_SUPABASE_ANON_KEY` in the `.env` file) in our client-side code to allow users to register for the course.

### 2. `service_role` Key (Secret Key)

-   **Purpose:** This is a secret, administrative-level key. It has the power to **bypass all Row Level Security policies**.
-   **How it's used:** This key should **ONLY** be used in a secure, server-side environment (e.g., a backend API, a serverless function, or an administrative script).
-   **Security:** **NEVER expose the `service_role` key in any client-side code.** Doing so would give anyone full, unrestricted access to your entire database, allowing them to steal, modify, or delete any data.

## Authentication and Registration Flow

Our registration process is handled by Supabase's built-in authentication (`supabase.auth.signUp`). This provides a secure and robust way to manage user identities.

### Key Security Features:

1.  **Email Verification:** When a new user signs up, Supabase automatically sends a verification link to their email address. The user is not considered fully authenticated until they click this link. This prevents fake or mistyped email addresses from being used.
2.  **Secure Password Handling:** All passwords are automatically hashed by Supabase before being stored. We never handle or store plaintext passwords.
3.  **Database Trigger for Data Sync:** We use a database trigger (`on_auth_user_created`) to automatically copy user data from the `auth.users` table to our public `registrations` table after a new user is created. This trigger runs with `security definer` privileges, allowing it to securely access both tables without exposing sensitive permissions to the client.

## Schema Security: `auth.users` and `public.registrations`

Our application relies on two key tables with distinct security profiles:

### 1. `auth.users`

-   **Owner:** Supabase Authentication system.
-   **Purpose:** This table stores the core identity and authentication information for each user, including their email, a secure password hash, and other metadata required by Supabase.
-   **Security:** This table is highly secure and is **not directly accessible** from the client-side. All interactions (like sign-up, login, and password reset) are handled through the secure `supabase.auth` API, which prevents direct data exposure. Our database trigger reads from this table in a secure, controlled manner on the backend.

### 2. `public.registrations`

-   **Owner:** Application (us).
-   **Purpose:** This table stores application-specific information related to a user's registration, such as their full name, phone number, course interest, and other details provided on the sign-up form.
-   **Security:** The security of this table is managed by us through Row Level Security (RLS). It is populated by the `handle_new_user` trigger after a successful user sign-up. This separation ensures that our application-specific data does not interfere with the core authentication schema.

#### `public.registrations` Schema Definition:
```sql
CREATE TABLE public.registrations (
  email character varying NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  course_name character varying,
  course_id character varying,
  name character varying,
  phone_no numeric,
  is_python boolean,
  is_student boolean,
  is_machine_learning boolean
);
```

## Database Triggers

### `on_auth_user_created`

This trigger is essential for our registration workflow. It automatically runs after a new user is created in the `auth.users` table and calls the `handle_new_user` function to copy the relevant data into our `public.registrations` table.

Here is the full SQL code for the function and the trigger:

```sql
-- 1. Create a function to insert a new row into public.registrations
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $
begin
  insert into public.registrations (email, name, phone_no, course_name, is_student, is_python, is_machine_learning, course_id)
  values (
    new.email,
    new.raw_user_meta_data->>'name',
    (new.raw_user_meta_data->>'phone_no')::numeric,
    new.raw_user_meta_data->>'course_name',
    (new.raw_user_meta_data->>'is_student')::boolean,
    (new.raw_user_meta_data->>'is_python')::boolean,
    (new.raw_user_meta_data->>'is_machine_learning')::boolean,
    new.raw_user_meta_data->>'course_id'
  );
  return new;
end;
$;

-- 2. Create a trigger that calls the function after a new user is created
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
```

## Row Level Security (RLS)

Row Level Security is the cornerstone of our data protection strategy. RLS allows us to define fine-grained access control policies directly on our database tables.

For our `registrations` table, we need to ensure that the public can submit their information, but cannot read, update, or delete anyone else's data.

### Required RLS Policy for the `registrations` Table

To secure the registration form, you **must** enable RLS on the `registrations` table and create the following policy in your Supabase SQL Editor:

```sql
-- 1. Enable Row Level Security on the table
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- 2. Create a policy that allows any user (anonymous or authenticated)
--    to insert a new row into the registrations table.
CREATE POLICY "Allow public insert for new registrations"
ON public.registrations
FOR INSERT
WITH CHECK (true);

-- Note: By default, SELECT, UPDATE, and DELETE operations are denied
-- when RLS is enabled unless a specific policy allows them.
-- This is the secure default we want.
```

## Social Logins (OAuth)

We support social logins (e.g., Google) via Supabase's OAuth integration. This provides a seamless and secure way for users to sign in without needing a separate password for our application.

### How it Works:

1.  **Initiation:** The user clicks the "Sign in with Google" button in the application.
2.  **Redirection:** Our app calls `supabase.auth.signInWithOAuth()` and redirects the user to Google's secure authentication screen.
3.  **Authentication:** The user authenticates with Google directly. At no point does our application see or handle their Google password.
4.  **Callback:** After successful authentication, Google redirects the user back to our application. Supabase automatically handles the callback, securely verifies the user's identity, and creates a new session.
5.  **Data Sync:** If this is the user's first time signing in, our existing `on_auth_user_created` trigger will fire, copying their information (name, email) into our `public.registrations` table, just as it does for email sign-ups.

### Configuration Steps:

To enable Google login, you **must** configure it in your Supabase project:

1.  **Enable the Google Provider:**
    *   Go to your Supabase project dashboard.
    *   Navigate to **Authentication** -> **Providers**.
    *   Find **Google** in the list and enable it.

2.  **Add Google OAuth Credentials:**
    *   You will need a **Client ID** and **Client Secret** from a Google Cloud project.
    *   Follow the official Supabase guide to create these credentials: [Supabase Google OAuth Guide](https://supabase.com/docs/guides/auth/social-login/auth-google).
    *   Add the credentials to the Google provider settings in your Supabase dashboard.

3.  **Configure the Redirect URL:**
    *   In your Supabase Google provider settings, you must add your site's URL to the "Redirect URLs" list.
    *   For local development, this is typically `http://localhost:5173/` (or whatever port you are using).
    *   For production, this will be your live website URL (e.g., `https://www.aithinkr.com/`).

By following these steps, you ensure that the OAuth flow is configured correctly and securely.
