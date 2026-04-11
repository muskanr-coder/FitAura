# FitAura - Full-Stack Fashion E-commerce

Modern fashion e-commerce project with a premium UI, built using:

- Frontend: React (functional components + hooks), Tailwind CSS, React Router
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Auth: JWT-based authentication

## Folder Structure

```text
FitAura/
  client/
    src/
      components/
      context/
      pages/
      services/
    package.json
  server/
    src/
      config/
      controllers/
      data/
      middleware/
      models/
      routes/
      app.js
      server.js
      seed.js
    .env.example
    package.json
  README.md
```

## Backend Setup

```bash
cd server
npm install
cp .env.example .env
```

Update `.env` values:

- `MONGO_URI`
- `JWT_SECRET`
- `CLIENT_URL`

Seed sample products:

```bash
npm run seed
```

Run backend:

```bash
npm run dev
```

Server runs on `http://localhost:5000`.

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`.

## API Endpoints

- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/users/register`
- `POST /api/users/login`
- `POST /api/cart` (protected)
- `GET /api/cart` (protected)
- `DELETE /api/cart/:productId` (protected)
- `POST /api/wishlist` (protected)
- `GET /api/wishlist` (protected)
- `DELETE /api/wishlist/:productId` (protected)

## Included UI/UX Features

- Premium modern fashion-brand inspired interface
- Soft palette, large product imagery, minimalist layout
- Sticky navbar, hero banner with CTA
- Responsive grid product listing
- Product hover zoom + smooth transitions
- Dynamic search/filter/sort
- Loading spinner and skeleton loaders
- Toast notifications
- Cart + wishlist interactions
- JWT auth + protected routes
- Dark mode toggle
