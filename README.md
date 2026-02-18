# Private Circle - Luxury Concierge

## Run frontend

```bash
npm install
npm run dev
```

Frontend: http://localhost:3000/private-circle

## Run backend scaffold

```bash
npm run server:start
```

Backend: http://localhost:4100

## API endpoints

- `GET /user/profile`
- `GET /journey/next`
- `GET /journey/flights` (powered by AviationStack)
- `GET /journey/:id`
- `PATCH /user/travel-dna`
- `GET /user/connected-services`
- `PATCH /user/service-toggle`
- `GET /user/circle`
- `POST /ai/generate-suggestions`

## Live flight data setup

1. Create an AviationStack free account and copy your API key.
2. Export it before starting the backend:

```bash
export AVIATIONSTACK_API_KEY=your_api_key_here
npm run server:start
```

Example request:

```bash
curl "http://localhost:4100/journey/flights?flightIata=EK202&limit=5"
```
