git init
npm init
npm install -D parcel
npm install tailwindcss @tailwindcss/postcss (tailwindcss documentation for parcel)

Redux Store (Global State Handler :- Like Sidebar can be collapsed from any component, so we can use redux store to handle that state globally) npm i @reduxjs/toolkit react-redux

(how to create a store) create a file store.js in utils folder using API createStore 
(then create a slice for sidebar) create a file sidebarSlice.js in utils folder using API createSlice

install react-router