# Remove.bg Background Remover Tool

A simple web app that lets you upload an image and remove its background using the [Remove.bg API](https://www.remove.bg/). Built with Node.js, Express, and plain JavaScript/CSS.

---

## 🚀 Features

- Drag-and-drop or click to select an image  
- Shows selected filename in the upload box  
- “Remove Background” button becomes active on valid image selection  
- Loading spinner while processing  
- Displays result preview and “Download” link for the transparent PNG  
- Responsive, modern UI with error handling  

---

## 🛠️ Tech Stack

- **Node.js** + **Express** for the backend  
- **Multer** for handling file uploads  
- **Axios** + **form-data** to call Remove.bg’s multipart API  
- **dotenv** for environment variable management  
- **HTML**, **CSS**, **Vanilla JS** on the frontend  

---

## 📋 Prerequisites

- Node.js (v14+) & npm  
- A Remove.bg account & valid API key  
- Git (optional, for cloning)  

---

## ⚙️ Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/your-username/removebg-app-js.git
   cd removebg-app-js
