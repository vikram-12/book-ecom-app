# Codebook Web App.

The CodeBook E-Commerce Application is a modern, responsive online shopping platform built with React and Tailwind CSS. It offers essential e-commerce features such as product browsing, authentication via JWT, cart management, and a seamless checkout process. Designed to provide an intuitive user experience, the app leverages Context API for state management and is backed by a mock JSON Server. Deployed on Netlify, it is ideal for showcasing products and enhancing digital business strategies.

*This application has been developed  for learning frontend developement using react.js and various advance concepts around react.*

## Technical Overview
The Book E-Commerce Application is a robust platform for browsing and purchasing books online. It combines modern tools and best practices for seamless functionality and an engaging user experience. Key technical details include:

### Frontend Development:
- Built using *React.js* for a responsive and interactive UI.
- *Tailwind CSS* ensures a clean, modern design with utility-first styling.Responsive design is implemented and light-dark theme has been implemented

### State Management:
- Employs *Context API* and *reducers* for managing application-wide state efficiently.
  
### Authentication:
- Secured with *JWT (JSON Web Token)* for login and user session handling.
  
### Backend & APIs:
- Uses *JSON Server* as a mock backend to simulate real API behavior during development.
(The mock backend is created using node and express ,where  json server is used, so that it can be deployed ,and can be used in production)->The sole purpose was to demostrate
api integration and jwt token for authentication
  
### Core Features:
- Product Listings: Browse a catalog of books with detailed information.
- Search & Filter: Intuitive tools to find specific books.
- Cart Management: Add, update, and review items in the shopping cart.
- Checkout Process: Streamlined steps for completing purchases.(This is just a UI demonstration for now,where you can place the order and view the same in dashboard on success.
No realtime purchase or any such itegration is done).
  
### Deployment:
- Frontend deployed on Netlify for fast and reliable access.
- Backend hosted on Render, simulating API behavior.(Free services are used , apis can be slow)

## How to run on Local

- Clone the repository [Repo link](https://github.com/vikram-12/book-ecom-app)
- Open VS code. Open Terminal and run command **npm i**
- Once packages are installed run **npm start** to start the frontend.
- Run **json-server data/db.json -m ./node_modules/json-server-auth  -r data/routes.json  --port 8000** in a new terminal to run the backend.
- Create a .env file and update REACT_APP_HOST value with the localhost url(http://localhost:8000). Stop the frontend server , and restart and the application will be up and running.
- Stop the frontend server , run again **npm start** , the application will be up and running to use.


## Information

*This application is developed for learning purpose(specifically frontend development related topics). In this project I have learned about react js , context , reducer , hooks in react(useEffect ,useState , useRef , useReducer , useContext) , custom hooks , api integration(apis made with json-server) , learned to structure a project , creating filters , react-router , react-toastify(a library to show toast message),html/css , tailwindCSS , responsive design , dark-light theme and javascript.*
