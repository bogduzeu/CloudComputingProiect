INTRODUCERE

Aplicația “Trip Planner” este un instrument simplu și eficient pentru planificarea și gestionarea activităților legate de vacanțele tale. Cu ajutorul acestei aplicații, poți organiza cu ușurință pașii necesari pentru pregătirea unei excursii, de la rezervarea cazării și a transportului, până la împachetarea bagajelor sau planificarea activităților zilnice.
Aplicația utilizează metode CRUD (Create, Read, Update, Delete) pentru a permite adăugarea, vizualizarea, actualizarea și ștergerea sarcinilor legate de vacanță. Fie că e vorba de un city break, un sejur la mare sau o aventură prin Europa, „Trip Planner” îți oferă o modalitate clară și ușor de utilizat pentru a-ți organiza fiecare detaliu.
Un element cheie este funcționalitatea de status pentru fiecare activitate, astfel încât să știi mereu ce ai realizat și ce mai ai de făcut. Cu un singur click poți marca o sarcină ca fiind completată.
Baza de date MongoDB asigură stocarea în siguranță a datelor, iar platforma Vercel face aplicația accesibilă rapid și ușor de oriunde.

DESCRIEREA PROBLEMEI

Planificarea unei vacanțe implică multe sarcini – de la cumpărarea biletelor și rezervarea cazării, până la organizarea traseului și împachetarea bagajelor. Deseori, aceste sarcini sunt notate pe foi sau rămân doar în minte, ceea ce duce la uitarea unor lucruri importante.
Aplicația Trip Planner oferă o soluție digitală, organizată și intuitivă pentru gestionarea acestor activități. Cu o interfață simplă și prietenoasă, utilizatorii pot crea liste clare cu toate lucrurile pe care trebuie să le facă înainte sau în timpul unei vacanțe.
Indiferent de complexitatea călătoriei, aplicația ajută la menținerea organizării și la reducerea stresului cauzat de planificare.

TEHNOLOGII CLOUD FOLOSITE

MongoDB
Pentru gestionarea bazei de date, am ales MongoDB, o soluție NoSQL flexibilă și scalabilă. Este potrivită pentru aplicații web care necesită manipularea rapidă a datelor, precum lista de activități din cadrul planificării unei vacanțe.
Vercel
Aplicația este găzduită pe Vercel, o platformă cloud optimizată pentru aplicații web moderne. Aceasta permite implementarea rapidă și automată, fără a fi necesară gestionarea infrastructurii. Vercel este integrat perfect cu framework-uri ca Next.js și React.

DESCRIEREA API-ULUI

Aplicația utilizează un API RESTful care permite gestionarea activităților de vacanță. API-ul este responsabil pentru operațiile CRUD asupra obiectelor „activități”.
API-ul pentru activități:
GET /api/records: Returnează toate activitățile din baza de date.
GET /api/records?id=:id: Returnează o activitate specifică după ID.
POST /api/records: Creează o nouă activitate.
PUT /api/records: Actualizează o activitate existentă.
DELETE /api/records?id=:id: Șterge o activitate după ID.



STRUCTURA DATELOR:

_id 682e3c9ec911cdae238cca2d
Description "Rezervare Hotel Ebis"
Destination "Paris, Franta"
departureDate "2025-08-04"
departureTime "15:50"

EXEMPLE FLUX DE DATE

1. GET /api/records
 [{
    "_id": "682e3c9ec911cdae238cca2d",
   "description": "Rezervare Hotel Ebis",
"destination": "Paris, Franta",
"departureDate": "2025-08-04",
"departureTime": "15:50"
  },
  {
    "_id": "682e3c9ec911cdae238cca2e",
   "description": "Rezervare Sagrada Familia",
"destination": "Barcelona, Spania",
"departureDate": "2026-08-04",
"departureTime": "10:00"
  }
]

2. POST /api/records
{
  "description": "Rezervare Sagrada Familia",
"destination": "Barcelona, Spania",
"departureDate": "2026-08-04",
"departureTime": "10:00"
}

3. PUT /api/records
{
  "_id": "682e3c9ec911cdae238cca2d",
   "description": "Rezervare Hotel Ebis",
"destination": "Paris, Franta",
"departureDate": "2025-08-04",
"departureTime": "15:50"
}

4. DELETE /api/records?id=123abc
{
  "acknowledged": true,
  "deletedCount": 1
}


METODE HTTP UTILIZATE

GET – pentru a obține activitățile existente
POST – pentru a adăuga o activitate nouă
PUT – pentru a modifica o activitate
DELETE – pentru a șterge o activitate

CAPTURI DE ECRAN APLICATIE
![image](https://github.com/user-attachments/assets/b063e8cd-4e31-4386-a470-0920a80fc44e)
![image](https://github.com/user-attachments/assets/90393fbe-5a56-47e3-a5da-d2d2995942d0)
![image](https://github.com/user-attachments/assets/2c27d6ab-ebcd-484e-84eb-1802626c0fa6)
![image](https://github.com/user-attachments/assets/ec3dd9d0-ab28-41e2-baac-427839c9ff85)
![image](https://github.com/user-attachments/assets/0c60c687-b99b-4882-87f9-dbfaa929b641)




 




This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
