# TodoIst React TypeScript 📝

Welcome to the **TodoIst** project! This application is the second lab work for the Web Programming 2024 course at Belarusian State University. It takes task management to the next level with advanced filtering capabilities. Let's explore the details! 🌟

## Project Overview

This TodoIst app is built using React and TypeScript with class components, providing a powerful and user-friendly interface for managing your tasks efficiently. 🎨

## Features 🌈

- **Task Creation**: 
  - An input field for task title and description. ✏️
  - A button to add new tasks. ➕

- **Advanced Task Management**: 
  - Each task has a checkbox to mark it as completed or not. ✅
  - Tasks can be deleted with a hover action. ❌
  - Completed tasks are displayed after incomplete ones. 📋
  - Tasks are represented with unique IDs (UUID/GUID/auto-increment). 🆔
  - Tasks have a `title` (non-empty) and `description`. 📝

## Filters 🔍

1. **Hide Completed Tasks** (toggle):
   - A checkbox or switch. 🎛️
   - When enabled, only incomplete tasks are visible. 🙈

2. **Search by Substring** (search):
   - An input field. 🔎
   - Filters tasks by `title` and `description`. 🔤
   - Case-insensitive filtering: "ДЗ", "Дз", "дз" should yield the same results. 📂

3. **Filter by Importance** (multiselect):
   - A group of checkboxes. 📑
   - Values correspond to the importance levels present in tasks. 📊
   - Tasks matching any of the selected importance levels are displayed. 🎯

4. **Reactive Application**: 
   - Filters update the displayed tasks in real-time, without needing an "Apply Filters" button. ⏱️

5. **No Tasks Found Message**:
   - If no tasks match the filters, display a message: "По вашим критериям ничего не найдено". 🕵️‍♂️

## Code Quality 📋

- **Extensible and Easily Modifiable**: 
  - The code is designed for ease of expansion and modification. 🛠️
- **Consistent Styling**: 
  - Adheres to the project style guide. 🖌️
- **Meaningful Names**: 
  - Classes, functions, and variables have concise and meaningful names. 📛
- **Clean Code**: 
  - No unnecessary comments, files, or unused code. 🧹
  - Tidy and readable code. 📚

## Installation 🔧

To get started with the TodoIst application, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/dedserch/Web2024.git

2. Navigate to the project directory:
   ```bash
   cd .\TodoIst\

3. Install the dependencies:
   ```bash
   npm install

4. Start the application:
   ```bash
   npm run dev

## Usage 🚀

- Open your browser and go to `http://localhost:5173/` 🌐
- Create tasks by entering a title and description, then click "Add". ✍️
- Use the checkbox to mark tasks as completed. ☑️
- Hover over a task to reveal the delete option. 🗑️
- Use the filters to view tasks based on various criteria. 🔄

## Contributing 🤝

We welcome contributions! If you'd like to help improve the TodoIst, please fork the repository and submit a pull request. 👥

---

Thank you for checking out the TodoIst project! Happy task managing! 🎉🗂️✨
