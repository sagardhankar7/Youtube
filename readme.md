git init
npm init
npm install -D parcel
npm install tailwindcss @tailwindcss/postcss (tailwindcss documentation for parcel)

Redux Store (Global State Handler :- Like Sidebar can be collapsed from any component, so we can use redux store to handle that state globally) npm i @reduxjs/toolkit react-redux

(how to create a store) create a file store.js in utils folder using API createStore 
(then create a slice for sidebar) create a file sidebarSlice.js in utils folder using API createSlice

install react-router

npm uninstall parcel

remove "scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}

npm install vite @vitejs/plugin-react --save-dev

Create vite.config.js
Create this file in the root of your project.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
});

npm run dev 
To start the vite server
