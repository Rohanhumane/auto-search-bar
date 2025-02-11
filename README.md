# AutoComplete Search Bar

An intuitive and responsive autocomplete search bar built with **React & TypeScript** that fetches recipe data from an API and provides a smooth user experience with caching and keyboard navigation.

## 🚀 Features

- **Debounced API Requests**: Reduces API calls by implementing a delay when typing.
- **Caching**: Stores previously searched results to minimize redundant API requests.
- **Keyboard Navigation**: Navigate search results using **Arrow Up/Down** keys.
- **Auto-selection**: Selecting an item updates the input field.
- **Blur Handling**: Hides results when the input loses focus.

## 🛠️ Technologies Used

- **React** (useState, useEffect, useCallback)
- **TypeScript** (for type safety)
- **CSS Modules** (for styling)

## 📦 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/autocomplete-search-bar.git
   cd autocomplete-search-bar
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## 🔗 API Used

This project fetches recipes from [DummyJSON](https://dummyjson.com/recipes/search).

## 📸 Screenshots

_Add relevant screenshots here_

## 🎯 Future Enhancements

- Add **mouse selection** for search results.
- Improve **accessibility** (ARIA attributes).
- Implement **better error handling** for API failures.

## 🤝 Contributing

Contributions are welcome! If you’d like to improve this project, feel free to fork the repository and create a pull request.

## 📜 License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

---

Happy coding! 🚀


