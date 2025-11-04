# 🎬 Movie Explorer

A modern, responsive movie discovery web app built with **React (Vite)**, **Tailwind CSS**, and **Appwrite**, powered by **The Movie Database (TMDB)** API.  
Deployed on **Vercel** for fast and seamless hosting.

---

## 🌐 Live Demo

🔗 [https://moive-search-app-delta.vercel.app](https://moive-search-app-delta.vercel.app)

---


## 💻 GitHub Repository

🔗 [https://github.com/Varshini-Yenjarlapati/Moive-Search-app](https://github.com/Varshini-Yenjarlapati/Moive-Search-app)

---

## ✨ Features

- 🔍 **Instant Search** — Find movies by title in real time using the TMDB API  
- 🔥 **Trending Movies** — View what’s popular right now  
- 📊 **Appwrite Integration** — Tracks search activity with a lightweight backend  
- ⚡ **Blazing Fast** — Built with Vite for lightning-fast development and builds  
- 🎨 **Responsive Design** — Styled with Tailwind CSS 4 for all screen sizes  
- ☁️ **One-Click Deploy** — Hosted globally with Vercel  

---

## 🧱 Tech Stack

| Category | Technologies |
|-----------|--------------|
| Frontend | React 19, Vite 7 |
| Styling | Tailwind CSS 4 |
| Backend | Appwrite 21 |
| API | TMDB (The Movie Database) |
| Hosting | Vercel |
| Utilities | React-Use, Fetch API |


---

## ⚙️ Environment Variables

Create a file named `.env` in the project root and add:

```bash
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

>  All environment variables **must start with `VITE_`** or they will not be available in the browser.  
> When deploying on **Vercel**, add these variables under  
> **Project → Settings → Environment Variables**.

---

## 🧑‍💻 Local Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Varshini-Yenjarlapati/Moive-Search-app.git
cd Moive-Search-app
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the app locally
```bash
npm run dev
```

Now open **http://localhost:5173** in your browser.

---

## 🏗 Build for Production

```bash
npm run build
```

The production-ready files will be available in the **`dist/`** directory.  
You can test your build locally:

```bash
npm run preview
```

---

## ☁️ Deploy on Vercel

1. Push your project to **GitHub**.  
2. Go to [Vercel](https://vercel.com/new) and import your repository.  
3. Set the following in your project settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Add your environment variables under  
   **Project → Settings → Environment Variables**
5. (Optional but recommended) Add a `vercel.json` file at the project root:

   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/" }]
   }
   ```

   This ensures React Router routes don’t break when you refresh the page.

---

## ⚙️ Appwrite Setup

1. Create a new project in [Appwrite Console](https://appwrite.io/).  
2. Add your deployed domain (e.g. `https://movie-explorer.vercel.app`) under  
   **Settings → Platforms → Allowed Web Origins**.  
3. Create a **Database** and **Collection or Rows** to store search data.  
4. Copy your **Project ID**, **Database ID**, and **Collection ID** to your `.env` file.

---

## 🧾 Available Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the project for production |
| `npm run preview` | Previews the production build locally |

---

## 🧠 Design Notes

- Built with **Tailwind CSS** for effortless responsive design  
- Uses **SVG loader** for smooth animations  
- Clean typography and intuitive layout  
- Optimized for both desktop and mobile users  


> _“Built with React, powered by TMDB, and crafted for movie lovers.” 🎥_
