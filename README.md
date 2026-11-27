# Madadly

> An AI-powered customer support platform that helps businesses provide instant, intelligent support through an embeddable chatbot.

---

## Overview

Madadly is an AI-powered customer support platform built to help businesses automate customer interactions using their own business information.

Businesses can configure their support details and knowledge, then integrate a chatbot into their websites using a lightweight JavaScript embed script. The chatbot uses Google's Gemini API to generate responses and assist visitors with their queries.

The goal is to make AI-powered customer support easier to set up and accessible to businesses without requiring them to build their own chatbot infrastructure.

## Features

### 🤖 AI-Powered Customer Support
- **Gemini Integration:** Generates AI responses using Google's Gemini API.
- **Business Context:** Uses business-specific information to provide relevant customer support.
- **Readable Responses:** Supports Markdown formatting for structured and easy-to-read answers.

### 🏢 Business Dashboard
- **Business Configuration:** Manage business information and support details.
- **Knowledge Management:** Add business-specific knowledge for chatbot responses.
- **Setup Progress:** View the progress of your chatbot configuration.

### 💬 Embeddable Chatbot
- **Website Integration:** Add the chatbot to an external website using a JavaScript embed script.
- **Custom Chat Interface:** Provides an interactive chat experience for website visitors.
- **Independent Widget:** Loads through a dedicated script from the Madadly platform.

### 🔐 Authentication
- **Scalekit Authentication:** Handles user authentication and session management.

### ⚙️ Backend & API
- **API Routes:** Handles chatbot requests and business settings.
- **MongoDB:** Stores application data using Mongoose.
- **CORS Support:** Allows the chatbot widget to communicate with the backend from external websites.
- **Secure Rendering:** Uses DOMPurify to sanitize rendered chatbot HTML.

## Tech Stack

### Frontend
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- Motion

### Backend & Database
- Next.js API Routes
- Node.js
- MongoDB
- Mongoose
- Axios

### AI Integration
- Google Gemini API
- `@google/genai`

### Authentication
- Scalekit

### Chatbot & Utilities
- JavaScript
- Marked
- DOMPurify

## How It Works

```text
          Business Owner
                |
                v
        Sign in with Scalekit
                |
                v
         Madadly Dashboard
                |
        Configure Business
        & Support Knowledge
                |
                v
          Embed Chatbot
                |
                v
       Add Script to Website
                |
                v
          Website Visitor
                |
          Sends a Message
                |
                v
          Madadly API
                |
                v
          Google Gemini
                |
                v
       AI-Generated Response
                |
                v
          Chatbot Widget
```

## Getting Started

Follow these steps to run Madadly locally.

### Prerequisites

- Node.js
- npm
- MongoDB database
- Google Gemini API key
- Scalekit account and application credentials

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Abdullah-Hunjra1/Madadly.git
```

**2. Navigate to the project directory**

```bash
cd Madadly
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env.local` file in the root directory and add the required credentials.

```env
GEMINI_API_KEY=your_gemini_api_key
```

Also configure your MongoDB connection and Scalekit authentication credentials using the environment variable names expected by the application.

**5. Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the production application |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Project Structure

```text
Madadly/
│
├── public/
│   ├── chatBot.js
│   └── ...
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   ├── dashboard/
│   │   ├── embed/
│   │   ├── globals.css
│   │   ├── icon.svg
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── DashboardPage.tsx
│   │   └── EmbedPage.tsx
│   │
│   ├── lib/
│   │   ├── cn.ts
│   │   ├── db.ts
│   │   ├── getSession.ts
│   │   └── scalekit.ts
│   │
│   └── model/
│       ├── settings.model.ts
│       └── types.d.ts
│
├── .env.local
├── package.json
├── next.config.ts
└── tsconfig.json
```

## Main Architecture

Madadly follows a centralized architecture where the platform manages business settings, authentication, database operations, and AI-powered chat responses.

- **Authentication Layer:** Scalekit manages authentication and user sessions.
- **Dashboard Layer:** Provides the interface for configuring business information and support knowledge.
- **Database Layer:** MongoDB stores application settings and business data through Mongoose.
- **AI Layer:** The Gemini API generates responses using the configured business context.
- **Widget Layer:** A standalone JavaScript script connects external websites to Madadly's chatbot API.

## What I Learned

Building Madadly has helped me work with several concepts beyond traditional full-stack application development:

- Integrating Google's Gemini API into a real-world application.
- Implementing authentication and session management with Scalekit.
- Working with MongoDB and Mongoose in a Next.js application.
- Building an embeddable JavaScript widget for external websites.
- Handling cross-origin requests and CORS configuration.
- Rendering Markdown responses safely in the browser.
- Structuring a centralized application for business-specific chatbot configurations.

## Future Improvements

- Chat conversation history and management.
- More advanced knowledge management.
- Chatbot customization options for businesses.
- Usage analytics and conversation insights.
- Subscription plans and usage limits.
- Improved chatbot configuration and testing tools.

## Author

**Abdullah Iftikhar**

Full Stack MERN Developer | Next.js Developer

- **Portfolio:** [abdullah-s-portfolio-one.vercel.app](https://abdullah-s-portfolio-one.vercel.app/)
- **LinkedIn:** [Abdullah Iftikhar](https://www.linkedin.com/in/abdullah-jutt-8194bb279/)
- **GitHub:** [Abdullah-Hunjra1](https://github.com/Abdullah-Hunjra1)

---

## License

This project is currently private and is not intended for redistribution without permission.
