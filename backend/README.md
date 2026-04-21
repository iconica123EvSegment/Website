# Iconica Backend

Minimal Express + MongoDB backend for all website form submissions.

## Setup

1. Copy `backend/.env.example` to `backend/.env`
2. Set your MongoDB connection string in `MONGODB_URI`
3. Install dependencies:

```bash
cd backend
npm install
```

4. Start the backend:

```bash
npm run dev
```

The API runs on `http://localhost:5000` by default.

## API

- `GET /api/health`
- `POST /api/forms/contact`
- `POST /api/forms/dealers`
- `POST /api/forms/test-ride`
- `POST /api/forms/careers`
- `POST /api/forms/buy-now`
- `POST /api/forms/quick-buy`
- `POST /api/forms/newsletter`
- `GET /api/forms`

## Notes

- Career form supports CV uploads up to 5 MB.
- Uploaded files are stored in `backend/uploads`.
- MongoDB collections are separated by form:
  `contacts`, `dealers`, `testrides`, `careers`, `buynow`, `quickbuys`, `newsletters`.
