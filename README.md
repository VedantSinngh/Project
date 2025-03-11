# Frontend

This is a Next.js project bootstrapped using `create-next-app` with Tailwind CSS.

## Features
- Next.js 14 with App Router
- Tailwind CSS for styling
- Fast development with hot-reloading
- Pre-configured with ESLint and PostCSS

## Getting Started

### Prerequisites
Ensure you have Node.js installed. You can check by running:
```sh
node -v
```

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate into the project folder:
   ```sh
   cd frontend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
frontend/
│   .gitignore
│   package.json
│   README.md
│   tailwind.config.js
│   postcss.config.js
│
├───app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│
├───public/
│
├───components/
│   ├── Header.tsx
│   ├── Footer.tsx
│
├───styles/
│   ├── custom.css
│
└───lib/
    ├── utils.ts
```

## Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## Contributing
Feel free to fork the repo and submit pull requests.

## License
This project is licensed under the MIT License.

