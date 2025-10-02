# 🤖 FusionAI

FusionAI is a **full-stack AI SaaS platform** that empowers creators with advanced AI tools for **content creation, image generation, background & object removal, resume reviews, and more**.  
It features a **React + Vite frontend**, an **Express backend with Neon PostgreSQL**, and integrates **Clerk authentication** & **Cloudinary** for media management.  

---

## 📂 Project Structure
```
FusionAI/
├── client/ # React frontend
│ ├── src/
│ │ ├── pages/ # Pages (Dashboard, Tools, Community)
│ │ ├── components/ # Reusable UI components
│ │ ├── assets/ # Logos, icons, images
│ │ └── App.jsx # Routes setup
│ └── package.json
│
├── server/ # Express backend
│ ├── configs/ # Cloudinary, DB, Multer setup
│ ├── controllers/ # AI & User controllers
│ ├── routes/ # API routes
│ ├── middlewares/ # Auth middleware
│ ├── server.js # Server entry point
│ └── package.json
│
└── README.md
```

---

## 🚀 Features

### ✨ Frontend
✅ Built with **React + Vite** and styled using **Tailwind CSS**  
✅ Authentication & user management with **Clerk**  
✅ Dashboard to manage AI-generated creations  
✅ AI Tools:  
   - 📝 Write Articles  
   - 🏷 Generate Blog Titles  
   - 🎨 AI Image Generator  
   - 🖼 Remove Backgrounds  
   - ✂️ Remove Objects  
   - 📄 Resume Review  
✅ **Community Page** – publish, share & like AI creations  
✅ **Responsive UI** for all devices  

---

### 🔐 Backend
✅ **Node.js + Express** server  
✅ **Neon PostgreSQL** database  
✅ **Clerk Middleware** for authentication  
✅ **Cloudinary** integration for image storage  
✅ **Multer** for file uploads  
✅ **OpenAI Gemini API** for text & image generation  
✅ **pdf-parse** for analyzing resumes  
✅ REST APIs for AI tools & user creations  

---

## ⚙️ Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Hannaa31/ai-saas-app.git
cd ai-saas-app
```

### 2️⃣ Install dependencies

#### Backend
```bash
cd server
npm install
```

#### Frontend
```bash
cd ../client
npm install
```

---

## 🚀 Running the app locally

#### Backend
```bash
cd server
npm run server
```
➡ Runs on: **http://localhost:3000**

#### Frontend
```bash
cd ../client
npm run dev
```
➡ Runs on: **http://localhost:5173**

---

## 🔑 Environment variables

### Client (`client/.env`)
```ini
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BASE_URL=http://localhost:3000
```

### Server (`server/.env`)
```ini
PORT=3000
DATABASE_URL=your_neon_postgres_url
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
GEMINI_API_KEY=your_openai_gemini_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

---

## 🖥 Deployment
✅ **Frontend** → Configured with `client/vercel.json` for deployment on **Vercel**  
✅ **Backend** → Configured with `server/vercel.json` for serverless deployment on **Vercel**  
✅ Ensure **CORS origins** are updated with deployed client URL  

---

## 📝 Credits
- React, Vite, TailwindCSS  
- Node.js, Express  
- Neon PostgreSQL  
- Clerk for authentication  
- Cloudinary for image storage  
- OpenAI Gemini API for AI generation  

---

## 🧑‍💻 Developed by
**Sakshi**  
GitHub: [Hannaa31](https://github.com/Hannaa31)  
Website: [FusionAI](https://fusion-ai-one.vercel.app/)  
