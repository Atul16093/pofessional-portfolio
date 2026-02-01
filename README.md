# Professional Next.js Portfolio

A high-performance, CMS-driven portfolio application built with Next.js 15 (App Router), TypeScript, and Material UI. This application is designed to consume data from a decoupled backend services layer, ensuring content management is separated from presentation.

## Architecture

The system follows a headless architecture pattern:
1.  **CMS (Content Management System)**: The source of truth for all content (Projects, Experience, Site Config).
2.  **Backend API**: A public-facing API layer that exposes CMS data securely and efficiently to the frontend.
3.  **Portfolio (Frontend)**: This Next.js application, which consumes the public APIs to render the UI.

Data flow: `CMS Database` -> `Backend API Services` -> `Portfolio Frontend (Next.js Server Components)` -> `Client UI`

## Integration & Public APIs

The application integrates with the following public API endpoints to drive dynamic content:

| Feature | Endpoint | Method | Revalidation (ISR) |
| :--- | :--- | :--- | :--- |
| **Site Config** | `/api/public/site-config` | GET | 1800s (30m) |
| **Projects** | `/api/public/projects` | GET | 300s (5m) |
| **Case Study** | `/api/public/projects/:slug` | GET | 1800s (30m) |
| **Experience** | `/api/public/experience` | GET | 3600s (1h) |
| **Tech Stack** | `/api/public/tech-stack` | GET | 3600s (1h) |
| **Contact** | `/api/public/contact` | POST | No Cache |

### API Client Layer
All API interactions are centralized in `lib/api/index.ts`. We use a strongly-typed client that handles:
- Base URL configuration
- Error handling
- Next.js specific caching options (`next: { revalidate: ... }`)

## Caching Strategy

Performance is optimized using a hybrid caching strategy:
1.  **Backend**: The backend services apply standard `Cache-Control` headers.
2.  **Frontend (Next.js)**: We use Incremental Static Regeneration (ISR) to cache API responses.
    - **Projects**: Updated frequently (5 mins) to reflect new work.
    - **Site Config/Experience**: Updated less frequently (30-60 mins) as they change rarely.
    - **Contact Form**: Never cached (`cache: 'no-store'`) to ensure form submissions are always processed.
    - **Development**: Caching is automatically disabled when running locally to facilitate debugging.

## Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Environment Setup
Create a `.env.local` file in the root directory:

```bash
# Point to your local backend service or production API
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

### Running the App
1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```
3.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment (Vercel)

1.  Push code to a Git repository connected to Vercel.
2.  Configure Environment Variables in Vercel Project Settings:
    - `NEXT_PUBLIC_API_BASE_URL`: URL of your deployed backend service (e.g., `https://api.yourdomain.com`).
3.  Deploy. Vercel will automatically build the application and apply ISR policies.

## Future Improvements

- **Dedicated Tech Stack Section**: Implement a visual section to display tech stack items using the integrated `getTechStack()` API.
- **Search Functionality**: Add client-side search for projects.
- **Dark Mode Toggle**: Expose theme switching in the UI (currently supported by theme engine).
- **Integration Tests**: Add E2E tests for the Contact Form flow.
