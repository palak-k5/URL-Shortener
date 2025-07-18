# URL Shortener

A simple and efficient application that allows users to create short, shareable links from long URLs.

**This project stands out for its clean codebase, maintainable architecture, and seamless integration of modern technologies, ensuring reliability and adaptability for both small and large deployments. The user interface is clean and simple, built using Tailwind CSS for a modern and responsive experience.**

## Features

- **Shorten long URLs:** Generate compact, easy-to-share short links.
- **QR Code generation:** Automatically create a QR code for each short URL for quick sharing and scanning.
- **Redirect short URLs:** Seamlessly redirect short links to their original destinations.
- **Usage analytics:** Track the number of visits, geolocation, and more for each short URL.
  
- **JWT Authentication:** Secure API endpoints with JSON Web Tokens.
- **RESTful API:** Integrate easily with other applications.
- **Modern front-end:** Built with React, Redux, TanStack Router , and Tailwind CSS.
- **Simple web interface:** Create and manage links visually.
- **Easy scalability:** Modular codebase designed for horizontal scaling and easy microservice integration.

## Tech Stack

- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (jsonwebtoken)
- **QR Codes:** [qrcode](https://www.npmjs.com/package/qrcode)
- **Frontend:** React, Redux, [TanStack Router](https://tanstack.com/router), Tailwind CSS
- **Routing:** TanStack Router 
- **State Management:** Redux
- **UI:** Tailwind CSS

## Frontend Architecture

- **Redux** is used for managing global application state (auth, links, analytics).
- **TanStack Router** handles client-side routing for a fast, SPA experience.
- **Tailwind CSS** ensures a responsive and clean UI, making user interactions pleasant and accessible.
- Components are organized for scalability and maintainability.
- API communication is implemented with JWT tokens-secured requests .

## Scalability & Modular Design

- **Modular folder structure** for easy feature addition and maintenance.
- Easily add new features as separate modules/services.
- Backend is stateless and ready for horizontal scaling.
- Frontend is component-based and can be split into micro-frontends.

## Getting Started

### Installation

#### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables (see `.env.example`):
   - Database connection string
   - Server port
   - JWT secret key
4. Start the server:
   ```bash
   npm start
   ```

#### Frontend

1. Go to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Usage

#### Web Interface

- Visit `http://localhost:PORT` in your browser.
- Log in or register for a JWT token.
- Enter the long URL you want to shorten.
- Receive a short URL and its QR code, which you can copy, download, or share.
- View analytics for your links.

#### API Endpoints

| Method | Endpoint           | Description                          | Auth Required |
|--------|--------------------|--------------------------------------|--------------|
| POST   | `/api/auth/login`  | Log in and receive JWT token         | No           |
| POST   | `/api/shorten`     | Shorten a long URL                   | Yes          |
| GET    | `/:shortId`        | Redirect to the original URL         | No           |
| GET    | `/api/qr/:shortId` | Get QR code for a short URL          | Yes          |
| GET    | `/api/stats/:id`   | Get analytics for a short URL        | Yes          |


### Configuration

- Edit `.env` for database, server, and JWT settings.
- Customize base URL, expiration policies, analytics options, and QR code styles as needed.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.
