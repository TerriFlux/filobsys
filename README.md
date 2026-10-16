# FilObsys, page vitrine

Site statique de présentation de **FilObsys**, l'observatoire de filière proposé par
[Dynartio](https://dynartio.com) et [TerriFlux](https://terriflux.com).

- Page publiée par GitHub Pages : https://terriflux.github.io/filobsys/
- Contact : contact@filobsys.fr

## Contenu du dépôt

| Fichier | Rôle |
|---|---|
| `index.html` | la page, une seule, en français |
| `base.css` | remise à zéro et règles de base |
| `style.css` | jetons de design (couleurs, typographie, espacements) et composants |
| `app.js` | en-tête qui se masque au défilement, menu mobile, apparition au défilement |
| `assets/` | image d'en-tête et logos des deux entreprises et des deux logiciels |

Aucune dépendance, aucun outil de construction : ouvrir `index.html` dans un navigateur suffit.
Les polices (Cabinet Grotesk, Satoshi) sont chargées depuis Fontshare.

## Modifier la page

1. Cloner le dépôt, éditer `index.html` (textes) ou `style.css` (apparence).
2. Vérifier dans un navigateur, sur écran large et sur téléphone.
3. Pousser sur `main` : GitHub Pages republie en une à deux minutes.

Les questions de fond encore ouvertes (grille d'offres, références citées, périmètre du socle
open source) sont suivies dans les tickets du dépôt.

## Domaine

Pour servir la page sur `filobsys.fr` : ajouter un fichier `CNAME` contenant `filobsys.fr`,
puis chez le registraire un enregistrement `A` vers les adresses de GitHub Pages
(ou un `CNAME` de `www` vers `terriflux.github.io`).
