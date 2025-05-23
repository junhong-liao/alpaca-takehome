# ABA Session Note Generator

A clinical note transformer built with Next.js, Prisma, and OpenAI GPT-3.5-Turbo. Transform bullet-point ABA session notes into professionally formatted clinical documentation.

## Features

- Create new ABA session notes from raw bullet points
- View and edit note titles inline
- Inline editing of AI-generated note content
- Regenerate AI-generated content with customizable prompt templates
- Copy note content to clipboard
- Persistent storage using SQLite via Prisma ORM
- Markdown rendering with GitHub Flavored Markdown
- Customizable prompt via the **Template** button in the UI

## Tech Stack

- **Next.js 13** App Router (TypeScript)
- **React** and **SWR** for data fetching
- **Prisma** ORM with SQLite database
- **OpenAI GPT-3.5-Turbo** for note generation
- **Tailwind CSS** for styling

## Prerequisites

- Node.js >= 18 and npm >= 8
- An OpenAI API key
- (Optional) Python 3.11+ for the legacy health-check server

## Environment Variables

In the `frontend/` directory, create a file named `.env.local` with the following contents:

```env
OPENAI_API_KEY=your_openai_api_key_here
DATABASE_URL="file:./dev.db"
```

## Setup and Installation

1. **Clone the repository**

   ```bash
git clone <repository-url>
cd alpaca-takehome
```

2. **Install frontend dependencies and generate Prisma client**

   ```bash
cd frontend
npm install
npx prisma generate
npx prisma db push
```

## Running in Development

Start the Next.js development server (frontend + API routes):

```bash
npm run dev
```

- Frontend and API will be served at: http://localhost:3000

### (Optional) Legacy FastAPI Health-Check Server

If you wish to run the original Python health-check server:

```bash
cd backend
python -m venv alpaca_venv
source alpaca_venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Access the health check endpoint at: http://localhost:8000

## API Endpoints

| Method | Endpoint           | Description                                  |
| ------ | ------------------ | -------------------------------------------- |
| GET    | `/api/notes`       | List all session notes                       |
| POST   | `/api/notes`       | Create a new session note                    |
| PATCH  | `/api/notes/:id`   | Update title, regenerate, or edit note text  |

### POST /api/notes

**Request Body:**
```json
{
  "rawText": "Bullet points here",
  "title": "Session Note",
  "prompt": "<custom prompt template>"
}
```

### PATCH /api/notes/:id

- **Regenerate AI content**:
  ```json
  { "prompt": "<custom prompt template>" }
  ```
- **Update note title**:
  ```json
  { "title": "New Title" }
  ```
- **Edit generated content manually**:
  ```json
  { "generatedNote": "Updated note text" }
  ```

## Project Structure

```
alpaca-takehome/
├── backend/                  # (Optional) FastAPI health-check server
│   ├── main.py
│   └── requirements.txt
├── frontend/                 # Next.js application and API routes
│   ├── app/                  # UI pages and API route definitions
│   ├── lib/                  # AI and database utilities
│   ├── prisma/               # Prisma schema
│   ├── src/generated/prisma/ # Generated Prisma client
│   ├── public/               # Static assets
│   ├── styles/               # Global and component styles
│   └── package.json
├── .gitignore
└── README.md
```

## License

This project is licensed under the MIT License.
