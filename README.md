# 🧑‍💼 User Profiles – React App

A clean, responsive web app to manage and display user profiles with options to add, edit, and delete users. Built using React, Tailwind CSS, and React Icons.

## 🚀 Features

- 🧍‍♀️ Display user cards with name, email, and role

- ✏️ Edit and 🗑️ Delete user profiles

- 🖼️ Uses a default placeholder image if no profile photo is provided

- 🌗 Supports light & dark themes

- ⚡ Fast, modular React components

## 🗂️ Project Structure
```
User-Profiles/
├─ public/
│ └─ index.html
├─ src/
│ ├─ assets/
│ │ └─ placeholder.png
│ ├─ components/
│ │ ├─ ProfileCard.jsx
│ │ ├─ ProfileList.jsx
│ │ ├─ ProfileForm.jsx
│ │ ├─ ProfileModal.jsx
│ │ ├─ LoadingSkeleton.jsx
│ │ └─ ErrorState.jsx
│ ├─ hooks/
│ │ └─ useProfiles.js
│ ├─ services/
│ │ └─ profilesStorage.js
│ ├─ pages/
│ │ └─ Home.jsx
│ ├─ App.jsx
│ └─ main.jsx
├─ README.md
├─ package.json
├─ postcss.config.js
└─ tailwind.config.js
```
## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| ⚛️ React | Frontend framework |
| 🎨 Tailwind CSS | Styling & responsiveness |
| 🧰 React Icons | Iconography |
| 📦 NPM | Package management |

## 🏗️ Installation
1. Clone this repository
```
git clone https://github.com/your-username/User-Profiles.git
cd User-Profiles
```

2. Install dependencies
```
npm install
```

3. Run the app
```
npm start
```
App will be available at http://localhost:3000/User-Profiles

## 🌍 Deployment (Optional for GitHub Pages)

Add this line in your package.json:
```
"homepage": "https://<your-username>.github.io/User-Profiles",
```

Install the deploy package:
```
npm install gh-pages --save-dev
```

Add scripts:
```
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Deploy to GitHub Pages:
```
npm run deploy
```

## 👩‍💻 Author

**K.N.V. Sai Meghana** <br>
🎓 B.Tech in Electronics and Communication Engineering <br>
📍 Kakinada, India <br>

---

© 2025 K.N.V. Sai Meghana | Built with 💙 using React + Tailwind CSS.

✨ "Code. Create. Contribute." ✨
