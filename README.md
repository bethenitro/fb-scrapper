# FB-Video-Downloader

A web-based tool for scraping video information and direct URLs from Facebook videos. This project provides a simple frontend interface and backend server, so you can easily extract Facebook video details without writing code.

## Features

- Paste a Facebook video URL and get video info instantly
- View and download SD/HD video links
- See video title, duration, and thumbnail
- No coding required—use via your browser

## Getting Started

### Prerequisites
- Node.js (v16 or newer recommended)
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/victorsouzaleal/fb-downloader-scrapper.git
cd fb-downloader-scrapper
npm install
```

### Running the Server

Start the frontend server:

```bash
npm start
```

By default, the app will be available at [http://localhost:3000](http://localhost:3000) (or another port if configured).

## Usage

1. Open your browser and go to [http://localhost:3000](http://localhost:3000)
2. Paste a Facebook video URL into the input field
3. Click the "Get Video Info" button
4. View the video details, preview the thumbnail, and download SD/HD video links

## Development

- The backend is built with TypeScript and Node.js
- The frontend is a simple web interface (React or plain HTML/JS, depending on implementation)
- To build the backend:
  ```bash
  npm run build
  ```
- To run in development mode (with auto-reload):
  ```bash
  npm run dev
  ```
