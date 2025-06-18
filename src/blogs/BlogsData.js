const blogList = [
  {
    id: "blog1",
    title: "React Basics",
    headings: [
      { id: "intro", label: "Introduction" },
      { id: "jsx", label: "JSX" },
      { id: "hooks", label: "Hooks" },
    ],
    content: {
      intro:
        "React is a JavaScript library developed by Facebook for building user interfaces. It allows developers to build reusable UI components and efficiently update the DOM using a virtual DOM. React is declarative, meaning you describe what the UI should look like, and React takes care of updating it. It’s widely used for building single-page applications (SPAs) and mobile apps (via React Native). Its component-based architecture promotes clean, manageable code, especially in large applications.",
      jsx:
        "JSX stands for JavaScript XML. It allows developers to write HTML-like code directly in JavaScript. Under the hood, JSX is compiled to React.createElement calls. JSX makes it easier to visualize and structure the UI. Instead of separating HTML and JavaScript, JSX encourages mixing them within components, leading to a more cohesive and modular structure. For example: `<h1>Hello, {name}</h1>` is valid JSX that compiles into React code dynamically inserting `name`.",
      hooks:
        "Hooks are functions that let you use React features like state and lifecycle methods in functional components. Introduced in React 16.8, popular hooks include `useState`, `useEffect`, `useContext`, and more. `useState` allows you to add local state to components, while `useEffect` is used to perform side effects such as data fetching, setting up subscriptions, or manually manipulating the DOM. Hooks simplify code and remove the need for class components in most cases.",
    },
  },
  {
    id: "blog2",
    title: "Node.js Guide",
    headings: [
      { id: "setup", label: "Setup" },
      { id: "routes", label: "Routes" },
      { id: "database", label: "Database" },
    ],
    content: {
      setup:
        "To start with Node.js, first install Node using a version manager like `nvm` (Node Version Manager). It allows you to switch between multiple versions of Node.js easily. After installation, initialize a project with `npm init -y`, and install required packages like `express` with `npm install express`. Create a basic `server.js` file and start a simple server using Express. Node.js uses the CommonJS module system, so you’ll write code like `const express = require('express')`.",
      routes:
        "In Node.js, routing is commonly handled by the Express framework. Routes define how the server responds to different HTTP methods and URL patterns. For example, `app.get('/home', handlerFunction)` sets up a GET route. You can also define POST, PUT, DELETE routes. Middlewares such as `body-parser` help in handling request data. Routes can be separated into different files using Express Router, making code cleaner and more modular for larger apps.",
      database:
        "Node.js works well with various databases, but MongoDB is a popular NoSQL choice often used with Node. Mongoose is an ODM (Object Data Modeling) library that provides schema-based solutions to model your data. You can connect to MongoDB using `mongoose.connect(connectionURL)`. Mongoose allows you to define schemas and models, perform CRUD operations, and apply validations. Alternatively, Node also supports SQL databases like MySQL or PostgreSQL using packages like `sequelize` or `knex`.",
    },
  },
];

export { blogList };