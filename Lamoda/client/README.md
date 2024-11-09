# Lamoda React TypeScript 🛍️

Welcome to the **Lamoda** project! This application is the third lab work for the Web Programming 2024 course at Belarusian State University. It features an online store with advanced product filtering and sorting capabilities, built using React TS and styled with Tailwind CSS. Let's dive into the details! 🌟

## Project Overview

The Lamoda app is built using React and TypeScript with functional components, focusing on clean and efficient code optimized with hooks like `useCallback`, `useMemo`, and `useEffect`.

## Features 🌈

- **Product Creation**:
  - Unique ID for each product (UUID/GUID/auto-increment). 🆔
  - Randomly generated `name`, `description`, `color`, `category`, `price`, and `rating` for each product. 🛒

- **Product Management**: 
  - Each product includes a unique ID, name, description, color, category, price, and rating. 📝
  - Images stored locally in the public folder or linked from the internet. 🖼️

## Filters & Sorting 🔍

1. **Search by Substring**:
   - Input field for searching products by `name` and `description`. 🔎
   - Case-insensitive search: "Майка", "маЙка", "МаЙКА" yield the same results.

2. **Filter by Color**:
   - Multiselect checkboxes for filtering products by color. 🎨
   - Only colors present in at least one product are displayed.

3. **Filter by Price Range**:
   - Two input fields for setting a price range. 💰
   - Only numeric values allowed.

4. **Reactive Application**:
   - Real-time filtering without additional buttons to apply filters. ⚡

5. **No Products Found Message**:
   - Displays "По вашему запросу ничего не найдено" if no products match the filters. 🚫

## Sorting Options 🗂️

- Sort by Price (Ascending): Сначала дешевые 💸
- Sort by Price (Descending): Сначала дорогие 💰
- Sort by Rating (Descending): Сначала популярные ⭐

One sort option is active by default, and only one can be active at a time. The active sort option is highlighted. ✨

## Requirements & Constraints 📋

- **Functional Components**: 
  - Class components are not allowed.
  
- **Responsive Design**: 
  - The application adapts to various screen sizes. 📱💻

- **Styling Options**:
  - Tailwind CSS for styling the application. 🎨

- **Clean Code**:
  - No unnecessary comments, files, or unused code. 🧹
  - Meaningful names for classes, functions, and variables. 📛
  - Consistent code style throughout the project. 📚

## Installation 🔧

To get started with the Lamoda application, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/dedserch/Web2024.git

2. Navigate to the project directory:
   ```bash
   cd .\Lamoda\client\

3. Install the dependencies:
   ```bash
   npm install

4. Start the application:
   ```bash
   npm run dev

## Usage 🚀

- Open your browser and go to `http://localhost:5173/` 🌐
- Browse products, apply filters, and sort them to find exactly what you need. 🛍️

## Contributing 🤝

We welcome contributions! If you'd like to help improve Lamoda, please fork the repository and submit a pull request. 👥

---

Thank you for checking out the Lamoda project! Happy shopping! 🎉🛒✨
