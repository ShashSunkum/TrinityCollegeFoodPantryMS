# Trinity College Food Pantry Management System

## Project Overview

This application is an inventory management system designed for Trinity College's on campus Food Pantry, Food n' Stuff. With a front end and persistent database, it will allow for staff to categorize and track inventory and replace the Excel spreadsheet that they currently use for inventory. The project also includes a feature that allows users to generate recipes that use ingredients currently avaliable in the database.   
   
Team members: Anupam Khargharia, George Zack, Meti Habtegiorgis, Mia Creane, and Shash Sunkum

## User Requirements

### Target Audience

The target audience for this application is Food Pantry staff.

### User Stories

- As the Manager of Food n' Stuff at Trinity College, I want to keep track of the inventory through an online system so that I can ensure a reliable distribution of food items, reduce waste by managing stock more effectively, and forecast future needs based on consumption patterns.
- As a patron of the pantry, I want to be able to generate recipes using ingredients from the pantry so that I can plan a delicious meal with the items that I have avaliable to me.

## Functional Requirements

### Core Features
- Feature 1: Item Management
   - Ability to add, edit, and delete products.
   - Categorization and tagging of products for easy search and filtering.
- Feature 2: Cost Calculator
   - Ability to see total price of inventory.
   - Automatically updates when new items are added or inventory quantity is changed.

### Additional Features
- Feature 1: Recipe Generator
   - Ability to generate recipes with items from inventory.
- Feature 2 (Unimplemented): Non-Admin accounts
   - Ability for non-admin users to create accounts.
   - Non-admin accounts can use the recipe generator and view inventory, but not edit inventory.

## Non-Functional Requirements

- Usability: We want the application to be easy to use and aesthetically pleasing.  
- Reliability: We want the application to run as expected and not display any confusing error messages to users.  
- Security: We want the application to authenticate users via a login to keep unauthorized users from editting the data.  

## Technical Specifications

- Programming Languages: Python, HTML, CSS, Javascript
- Frameworks: Flask, React, Node.js, Tailwind CSS
- Development Tools and Environments: Git, IntelliJ IDEA, VSCode
- Database and Storage: SQL database
- External APIs and Libraries: OPENAI API

## Milestones and Deliverables

- Week 1-2: Choose project and planning
   - Milestone: Roles assigned and intial design decided on.
- Week 3-4: Microservice Development
   - Milestone: Core functionality of both microservices implemented.
- Week 5-6: Database Integration and Persistence
   - Milestone: Database integration with microservice, data persistence achieved.
- Week 7: Integration and Testing
   - Milestone: Microservices integrated and basic functionality tested.
- Week 8: Documentation and Final Presentation
   - Milestone: Presentation complete and application fully documented.

## Collaboration Plan

- Communication Tools: Teammates used text and Slack for written communication and Zoom for video meetings.
- Version Control: Project was developed on Github, using Git as version control.
- Task Allocation: Shash focused on the pantry feature, Anupam did the recipe generator, Zack handled testing and CI/CD, and Meti and Mia wrote documentation and made presentation.

## Architecture Diagram

![food-pantry-diagram](https://github.com/ShashSunkum/TrinityCollegeFoodPantryMS/assets/124894058/a1c6517f-6e1c-45f2-9ad9-9f86064f562d)


## Project Setup

This repository contains both the front-end and server-side code for the Trinity College Food Pantry Management System. Follow the instructions below to set up both parts of the project on your local machine.

### Prerequisites

- [Node Version Manager (nvm)](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)
- Node.js
- npm (Node Package Manager)

### Setting Up the Frontend (Use Separate Terminals for each segment)

#### Setting Main Website

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

#### Setting up AI Recipe Generator frontend

1. Navigate to the Frontend directory:
   ```bash
   cd recipe-service/website
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

### Setting Up the Server Side (Use Separate Terminals for each segment)

#### Server for UI

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

 #### Recipe Generator Scripts

1. Navigate to the Server directory:
   ```bash
   cd ../recipe-service/openai-flask
   ```
2. Setting up Virtual Environment:
   ```bash
   source flaskenv/bin/activate
   ```

3. Install Node.js (if not already installed or if you need a specific version for the server):
   ```bash
   pip3 install Flask flask_restx flask_cors openai --break-system-packages
   ```
   
4. To run the server:
   ```bash
   python3 recipeApp.py
   ```

## Additional Information

Ensure that you are in the appropriate directory when running commands for either the front-end or server-side. If you encounter any issues with npm versions or node versions, make sure that the versions match the project's requirements by checking the `package.json` file in each directory for specific version details.

## Support

For support, please contact the repository maintainers or submit an issue in the GitHub issue tracker for this project.
