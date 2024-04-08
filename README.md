# React config and setup tailwind

# create react app using vite
  npm create vite@latest react-project-name
  npm init vite@latest react-project-name -- --template     react

# if you like to change base server port we can change using at vite.config.js

export default defineConfig({
  plugins: [react()],
  server:{ // change default server port to 3000
    port:3000
  }
})

# install npm packages
npm install / npm i

# run
npm run dev

# use full extentions for VS Code
ES7 React/Redux/GraphQL/React-Native snippets

    # rafce : React Arrow Function Component with Export
    # rafc : React Arrow Function Component

    const App = () => {
      return (
        <div>
      
        </div>
      )
    }

    export default App

  
    # rfc : React Functional Component

    export default function App() {
      return (
        <div>
      
        </div>
      )
    }

# tailwind react css install (follow tailwind documentation)

    # Install Tailwind CSS
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
  
    # Configure your template paths
    # Add the Tailwind directives to your CSS

# Using this project 

    # useState
    # react-icons
    # react-router-dom
    # json-server
        npm install -D json-server : installing as dev dependency

    # react-spinners
    # configure vite proxy
        also need to create json server with port, in package.json file     "server": "json-server --watch src/jobs.json --port 8000"
 add this as script

     # useEffect
     # react-toastify
     
       

