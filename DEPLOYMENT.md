# Déploiement GitHub Pages

✅ Le workflow de déploiement automatique a été créé !

## 🚀 Comment activer le déploiement :

### 1. Activer GitHub Pages dans votre repository
- Aller sur GitHub : https://github.com/ElHoussineDarrazi/Portfolio
- Cliquer sur **Settings** (Paramètres)
- Dans la section gauche, descendre jusqu'à **Pages**
- Dans **Source**, sélectionner **GitHub Actions** au lieu de "Deploy from a branch"

### 2. Commit et pousser le fichier workflow
```bash
git add .github/workflows/deploy.yml
git commit -m "Ajout workflow déploiement GitHub Pages automatique"
git push origin main
```

### 3. Le déploiement se lance automatiquement
Dès que vous poussez sur la branche `main`, le workflow se déclenche automatiquement.

Vous pouvez suivre l'avancement dans l'onglet **Actions** de votre repository GitHub.

### 📍 URL du site
Votre site sera disponible à l'adresse :
```
https://ElHoussineDarrazi.github.io/Portfolio/
```

## ✨ Caractéristiques du workflow :
- Déploiement automatique à chaque push sur main
- Possibilité de lancer manuellement le déploiement depuis l'interface GitHub
- Cache optimisé et déploiement sécurisé
- Aucune configuration supplémentaire nécessaire
- Fonctionne directement avec votre site statique HTML/CSS/JS existant

## 🔧 Pour déployer manuellement :
1. Aller sur l'onglet **Actions**
2. Cliquer sur "Deploy to GitHub Pages" dans la liste à gauche
3. Cliquer sur le bouton **Run workflow**
4. Confirmer en cliquant sur "Run workflow"