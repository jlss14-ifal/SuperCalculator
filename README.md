# SuperCalculator

## Node.js Version

This project requires Node.js version `20.18.1`. The version is specified to ensure compatibility with certain packages, specifically [`rethinkdb-ts`](https://github.com/rethinkdb/rethinkdb-ts), which requires a Node.js version between `16.x` and `20.x`. Using a different version of Node.js may result in compatibility issues and unexpected behavior.

To manage Node.js versions, we recommend using `nvm` (Node Version Manager). You can switch to the required version by running the following commands:

```sh
nvm install 20.18.1
nvm use 20.18.1
```

Additionally, a `.nvmrc` file is provided in the project root directory, which specifies the required Node.js version. This allows `nvm` to automatically switch to the correct version when you navigate to the project directory.

For more information on installing and using `nvm`, please refer to the [official nvm documentation](https://github.com/nvm-sh/nvm).


## Overview
SuperCalculator is a robust and ready-to-use template for starting new projects with a powerful tech stack. It includes pre-installed configurations for Node.js, TypeScript, DotEnv, Express, Jest, Babel, and Mocha, providing a comprehensive setup for both JavaScript and TypeScript development and testing.

## Features
- **Node.js**: Server-side JavaScript runtime environment.
- **TypeScript**: Strongly typed programming language that builds on JavaScript.
- **DotEnv**: Environment variable management.
- **Express**: Minimalist web framework for Node.js.
- **Jest**: Testing framework for TypeScript code.
- **Babel**: Compiler for JavaScript code, specifically for testing.
- **Mocha**: Testing framework, used in combination with Babel for JavaScript tests.

### News Features
- **Rethinkdb**: Is a[DB](https://registry.hub.docker.com/_/rethinkdb/);

## Getting Started
Follow these instructions to get your development environment set up.

### Prerequisites
Ensure you have Node.js and npm installed on your machine.

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/jlss14-ifal/SuperCalculator.git
2. Install the dependencies:
```bash
npm install
```

## Use
Start the server:
```bash
npm start
```

## Available Scripts

In the project directory, you can run the following scripts:

### Build Scripts
- **`npm run build:src`**: Compiles the TypeScript files in the `src` directory into JavaScript using Babel and outputs them to the `dist/src` directory.
- **`npm run build:test`**: Compiles the TypeScript test files in the `test` directory into JavaScript using Babel and outputs them to the `dist/test` directory.
- **`npm run build:rename`**: Renames the compiled `.js` files to `.mjs` in the `dist` directory for compatibility with ES module syntax.
- **`npm run build:fix-imports`**: Compiles the `scripts/fix-imports.ts` script into JavaScript and executes it to fix import statements in the compiled `.mjs` files.
- **`npm run build`**: Runs the `build:src`, `build:test`, `build:rename`, and `build:fix-imports` scripts sequentially to perform a full build.

### Start Scripts
- **`npm start`**: Executes the application from the `dist/src/server.mjs` file.
- **`npm run dev`**: Starts the development server using `ts-node` with the `src/server.ts` file.
- **`npm run startdev`**: Compiles the TypeScript files and starts the application from the `dist/src/server.mjs` file.

### Test Scripts
- **`npm run test:ts`**: Runs all the TypeScript tests using Jest.
- **`npm run test:js`**: Runs all the compiled JavaScript tests in the `dist/test` directory using Mocha.
- **`npm test`**: Executes the `test:ts`, `build`, and `test:js` scripts sequentially to perform a full test cycle.
- **`npm run test:ts:watch`**: Runs Jest in watch mode, automatically re-running TypeScript tests when files change.
- **`npm run test:js:watch`**: Builds the project and then runs Mocha in watch mode to re-run JavaScript tests when files change.
- **`npm run test:watch`**: Runs both Jest and Mocha in watch mode, allowing you to monitor and automatically re-run both TypeScript and JavaScript tests when files change.

These scripts provide a streamlined workflow for building, starting, and testing your project.

## Running RethinkDB in a Docker Container

To start a RethinkDB container that removes itself upon stopping, use the following command:

```sh
docker run --rm -d --name rethinkdb1 -p 28015:28015 -p 8080:8080 rethinkdb:2.4.4-bookworm-slim
```

- `--rm`: Automatically remove the container when it is stopped.
- `-d`: Run the container in detached mode (in the background).
- `--name rethinkdb1`: Assign the name "rethinkdb1" to the container.
- `-p 28015:28015`: Map port 28015 of the container to port 28015 on your host machine (driver port).
- `-p 8080:8080`: Map port 8080 of the container to port 8080 on your host machine (web interface port).
- `rethinkdb:2.4.4-bookworm-slim`: Use the RethinkDB image with the tag `2.4.4-bookworm-slim`.

This command will start RethinkDB in a Docker container, making it accessible via the specified ports, and will ensure the container is automatically removed when stopped.

## Commands Used

1. **Initialize Project**:
   ```bash
   npm init
   ```
   - Create the `package.json` file.

2. **Install TypeScript and Node Types**:
   ```bash
   npm install typescript @types/node --save-dev
   ```
   - Create and configure `tsconfig.json`.
   - Update `scripts` in `package.json`.

3. **Create Entry File**:
   - Create the file `src/server.ts` and add a simple server with "Hello World".

4. **Transpile TypeScript to JavaScript**:
   ```bash
   tsc server.ts
   ```
   - Transpile the TypeScript file to `server.js`.

5. **Run the Server**:
   ```bash
   npm test
   ```
   - Run `server.js`.

6. **Initialize Git Repository**:
   ```bash
   git init
   ```

7. **Configure Git User**:
   ```bash
   git config --local user.name "Author"
   git config --local user.email "email@email.com"
   ```

8. **Check Git Status**:
   ```bash
   git status
   ```
   - Show the working tree status.

9. **Create .gitignore**:
   - Create the file `.gitignore` and add `node_modules/` and other necessary paths.

10. **Stage and Commit Initial Files**:
    ```bash
    git add .
    git status
    git commit -m "feat: initial project setup with Node.js and TypeScript"
    ```

11. **Install dotenv**:
    ```bash
    npm install dotenv
    ```
    - Create the file `.env`.

12. **Install Express and Types**:
    ```bash
    npm install express @types/express
    ```

13. **Install Jest and Related Packages**:
    ```bash
    npm install --save-dev jest
    npm install --save-dev ts-jest
    npm install --save-dev @types/jest
    ```
      - Create the file `jest.config.ts`.

14. **Install ts-node**:
    ```bash
    npm install ts-node --save-dev
    ```

15. **Install Babel and Presets**:
    ```bash
    npm install --save-dev @babel/cli
    npm install --save-dev @babel/preset-env
    npm install --save-dev @babel/preset-typescript
    ```

16. **Install Mocha**:
    ```bash
    npm install --save-dev mocha
    ```

17. **Create fix-imports.ts**:
    - Create the file `<rootDir>/scripts/fix-imports.ts` to handle `.mjs` imports in the `dist` folder.

18. **Commit Changes**:
    ```bash
    git commit -m "chore: add DotEnv, Express, Jest, Babel, Mocha and TypeScript dependencies"
    ```

19. **Install rethinkdb-ts**:
    ```bash
    npm install rethinkdb-ts
    ```

20. **Install axios**:
    ```bash
    npm install axios
    ```

## Future:
- [VITE](https://vite.dev/guide/);
- [TESTING-LIBRARY](https://testing-library.com/docs/guiding-principles)

## Contribution
Contributions are welcome! Please see the file `CONTRIBUTING.md` for details.

## License
This project is licensed under the MIT License.
