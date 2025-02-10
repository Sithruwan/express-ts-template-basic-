npm init -y

npm i express

npm i -D @types/express @types/node typescript tsx

// Generate tsconfig file -  typescript config file

npx tsc --init

// change configs in tsconfig.json
"target": "ES2022",
"module": "ESNext",
"rootDir": "./src",
"outDir": "./dist",


** create src folder

//change package.json

"type": "module"
"main": "dist/server.mjs",
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node dist/server.mjs",
    "build" : "tsc",
    "start:dev": "tsx --watch src/server.mts"
  },

// run cmd

npm run start:dev
