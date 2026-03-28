# FreshCart Fullstack Grocery Shop

A fullstack web application for a grocery shop that displays products, categorizes them, provides contact information, and includes an admin panel for product management. The shop does not require an online delivery or cart system; instead, it provides "Call Now" and "WhatsApp Enquiry" buttons.

## Tech Stack
- **Frontend**: Plain HTML, CSS (Green Theme), JavaScript
- **Backend**: Node.js, Express, CORS
- **Database**: MongoDB (Mongoose)

## Features
1. **Home Page**: Beautiful green-themed hero section, featured categories.
2. **Products Page**: View all products, search functionality, category filters. Each product has a "Call Now" and "WhatsApp" button instead of add to cart.
3. **Contact Page**: Google Maps embed, address details, interactive WhatsApp links.
4. **Admin Panel**: Login interface, ability to Add, Edit, and Delete products via a clean table interface.

## Prerequisites
- Node.js installed
- MongoDB installed locally or a MongoDB Atlas connection string.

## Local Setup Instructions

### 1. Backend Setup
1. Open a terminal and navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. (Optional) Create a `.env` file in the `backend` folder and add your MongoDB URI and desired port:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://127.0.0.1:27017/grocery_shop
   ```
4. Start the server:
   ```bash
   node index.js
   ```

### 2. Frontend Setup
1. Since the frontend is static HTML/CSS/JS, you can simply open `frontend/index.html` in any web browser.
2. If you prefer to serve it on a local server, you can use an extension like **Live Server** in VS Code, or use python:
   ```bash
   cd frontend
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`

### 3. Admin Access
1. Navigate to `admin.html` in your browser.
2. Use the credentials:
   - **Username**: admin
   - **Password**: admin123
3. From there, you can add products to populate your database!

## Deployment Instructions

### Deploying the Backend on Render
1. Create a `Render Web Service`.
2. Connect your GitHub repository containing this code.
3. Set the Root Directory to `backend`.
4. Build Command: `npm install`
5. Start Command: `node index.js`
6. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string.
   - `PORT`: `5000` (Render will override but it's safe to set).

### Deploying the Frontend on Vercel
1. Open Vercel and Add New Project.
2. Connect the same GitHub repository.
3. Edit the **Root Directory** to point to `frontend`.
4. Do not set a build command (Framework Preset: Other).
5. Deploy! Vercel will serve your static HTML files globally for free.

> **Note:** Once the backend is deployed on Render, make sure to update the `API_URL` variable in `frontend/js/script.js` and `frontend/admin.html` from `http://localhost:5000/api/products` to your actual deployed Render URL.
