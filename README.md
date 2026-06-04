# 💸 Smart Expense Tracker

Smart Expense Tracker is a modern, responsive single-page web application designed to help users log, organize, and analyze their daily expenses. Built with a React frontend, Vite build system, Tailwind CSS styling, and Recharts visualization, it provides an intuitive dashboard experience with persistent local storage.

---

## ✨ Features

- **📊 Visual Dashboard & Charts**: Displays a dynamic category distribution pie chart powered by `recharts` to visualize spending behavior.
- **🏷️ Real-time Summary Cards**: Interactive header cards summarizing total expenditures and breakdowns for core categories (Food, Travel, Bills).
- **📝 Expense Entry Form**: Easily add expenses with Amount, Category (Food, Travel, Bills, Others), Date, and Notes.
- **🔍 Advanced Search & Filters**:
  - Filter expenses by specific categories.
  - Search by note description or category.
  - Filter by custom amount ranges (min/max amount).
  - Filter by date range (from/to dates).
- **🔀 Multi-criteria Sorting**: Sort your expense list by *Most Recent*, *Oldest First*, *Highest Amount*, or *Lowest Amount*.
- **💾 Local Storage Persistence**: Expenses are automatically stored in the browser's local storage so data is retained across page reloads.
- **🎨 Premium UI/UX**: Designed with a clean gradient background, responsive grids, and subtle shadows for an immersive, premium desktop and mobile interface.

---

## 🛠️ Tech Stack

- **Core**: React 19, JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts
- **Icons & Utilities**: React Icons, UUID

---

## 📁 Directory Structure

```text
smart-expense-tracker/
├── src/
│   ├── components/
│   │   ├── ExpenseChart.jsx   # Pie chart displaying expense categories distribution
│   │   ├── ExpenseForm.jsx    # Input form to add new expenses
│   │   ├── ExpenseList.jsx    # List displaying filtered expense items with delete option
│   │   ├── Filters.jsx        # Search, filter, and sorting controls
│   │   └── SummaryCards.jsx   # Cards showcasing total and category-wise spending
│   ├── utils/
│   │   └── localStorage.js    # Utility functions to read and write to localStorage
│   ├── App.css                # App-specific custom CSS
│   ├── App.jsx                # Main application component & state management
│   ├── index.css              # Entrypoint CSS
│   └── main.jsx               # React application entry point
├── index.html                 # Main HTML template
├── package.json               # Node dependencies and scripts
└── vite.config.js             # Vite configuration
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine:

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Installation

Install all the dependencies defined in `package.json`:

```bash
npm install
```

### 3. Running the Development Server

Start the Vite development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### 4. Production Build

To build the application for production, run:

```bash
npm run build
```

The build artifacts will be generated in the `dist/` directory. You can preview the production build locally with:

```bash
npm run preview
```
