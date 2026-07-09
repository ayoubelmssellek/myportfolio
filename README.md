# Portfolio - Ayoub Elmssellek

Portfolio personnel développé avec Next.js, TypeScript et Tailwind CSS.

## Démarrage

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Personnalisation

### Photo de profil

1. Ajoutez votre photo dans `public/profile.jpg`
2. Modifiez `profileImage` dans `src/data/portfolio.ts` :

```ts
profileImage: "/profile.jpg",
```

### CV (téléchargement)

1. Ajoutez votre CV en PDF dans `public/cv.pdf`
2. Le chemin est déjà configuré dans `src/data/portfolio.ts` (`cvPath: "/cv.pdf"`)

### Contenu

Toutes les informations du CV sont centralisées dans **`src/data/portfolio.ts`** :
- Informations personnelles
- Profil
- Expériences et projets
- Compétences
- Formations
- Langues

Modifiez ce fichier pour mettre à jour le contenu du site.

## Sections

- **Hero** — Présentation avec photo à droite, texte à gauche
- **Profil** — Description professionnelle
- **Expérience & Projets** — Parcours et réalisations
- **Compétences** — Personnelles et techniques
- **Formation & Langues** — Parcours académique
- **Contact** — Coordonnées et liens sociaux

## Build production

```bash
npm run build
npm start
```
