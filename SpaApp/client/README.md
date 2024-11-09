# Api & Spa React TypeScript 🌐

Welcome to the **Api & Spa** project! This application is the fourth lab work for the Web Programming 2024 course at Belarusian State University. It features a multi-page application utilizing external APIs and React Router Dom for navigation. Let's dive into the details! 🌟

## Project Overview

The Api & Spa app is built using React and TypeScript, with a focus on clean and efficient code using Axios for API calls and Tailwind CSS for styling. Both `createBrowserRouter` and `BrowserRouter` approaches are supported for page definitions.

## Features 🌈

- **External API Integration**:
  - Uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) for data.
  - Supports any other public API with similar page and connection requirements.

- **Navigation**:
  - Two main links in the navigation bar:
    1. **User List**: Click on a user to navigate to their detail page.
    2. **User Detail**: Displays user information and their photo albums. Click on an album to navigate to the album page.
  - **Album List**: Displays a list of album titles. Click on an album to navigate to its page.
  - **Album Detail**: Displays photos in the album and the user who created it. Includes a loading indicator while data is fetched. Click on the user's name to navigate to their detail page.
  - **404 Page**: Displays a "Return to Home" link for unsupported URLs. Custom implementation required.

- **Reactive Application**:
  - Real-time filtering and sorting without additional apply buttons. ⚡

## Requirements & Constraints 📋

- **Styling Options**:
  - Tailwind CSS for styling the application. 🎨

- **Component Structure**:
  - Well-organized components and files. 🗂️

- **Clean Code**:
  - No unnecessary comments, files, or unused code. 🧹
  - Consistent code style throughout the project. 📚
  - Meaningful names for classes, functions, and variables. 📛

## Installation 🔧

To get started with the Api & Spa application, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/dedserch/Web2024.git

2. Navigate to the project directory:
   ```bash
   cd .\SpaApp\client\

3. Install the dependencies:
   ```bash
   npm install

4. Start the application:
   ```bash
   npm run dev

## Usage 🚀

- Open your browser and go to `http://localhost:5173/` 🌐
- Navigate through the user list, user details, albums, and album details seamlessly. 🗺️

---

Thank you for checking out the Api & Spa project! Enjoy exploring the application! 🎉✨
