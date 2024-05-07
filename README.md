# Trinity College Food Pantry Management System

## Project Setup

This repository contains both the front-end and server-side code for the Trinity College Food Pantry Management System. Follow the instructions below to set up both parts of the project on your local machine.

### Prerequisites

- Node Version Manager (nvm)
- Node.js
- npm (Node Package Manager)

### Setting Up the Frontend

1. Navigate to the Frontend directory:
   ```bash
   cd TrinityCollegeFoodPantryMS/PantryMS
   ```

2. Install Node.js (this will install the latest version compatible with the project):
   ```bash
   nvm install node
   ```

3. Install npm using Homebrew:
   ```bash
   brew install npm
   ```

4. Install all dependencies for the front-end:
   ```bash
   npm install
   ```

5. To start the front-end development server:
   ```bash
   npm run dev
   ```

### Setting Up the Server Side

1. Navigate to the Server directory:
   ```bash
   cd ../PantryMSServer
   ```

2. Install Node.js (if not already installed or if you need a specific version for the server):
   ```bash
   nvm install node
   ```

3. Install npm using Homebrew (if not already installed):
   ```bash
   brew install npm
   ```

4. Install all dependencies for the server-side:
   ```bash
   npm install
   ```

5. To run the server:
   ```bash
   node index.js
   ```

## Additional Information

Ensure that you are in the appropriate directory when running commands for either the front-end or server-side. If you encounter any issues with npm versions or node versions, make sure that the versions match the project's requirements by checking the `package.json` file in each directory for specific version details.

## Support

For support, please contact the repository maintainers or submit an issue in the GitHub issue tracker for this project.
