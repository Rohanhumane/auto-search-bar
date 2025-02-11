import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Input from "./assets/components/Input";
import searhImg from "./images/search.png";

interface Recipe {
  id: number;
  name: string;
}

const App = () => {
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState<Recipe[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [cache, setCache] = useState<Record<string, Recipe[]>>({});
  const [selectedId, setSelectedId] = useState<null | number>(null);

  const fecthData = async () => {
    if (cache[search]) {
      setResult(cache[search]);
      return;
    }

    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${search}`
    );
    const data = await response.json();
    setResult(data?.recipes);
    setCache((prev) => ({ ...prev, [search]: data?.recipes }));
  };

  useEffect(() => {
    const searchTimer = setTimeout(() => {
      fecthData();
    }, 1000);

    return () => {
      clearTimeout(searchTimer);
    };
  }, [search]);

  const inputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const blurHandler = useCallback(() => {
    setResult([]);
    setShowResult(false);
  }, []);

  const focusHandler = useCallback(() => {
    setShowResult(true);
    fecthData();
  }, [search]);

  const keyDownHandler = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!result.length) return; // Prevent errors if no results

      setSelectedId((prev) => {
        const currentIndex = result.findIndex(
          (item: Recipe) => item.id === prev
        );

        if (e.key === "ArrowDown") {
          // Move down or loop back to the first item
          const nextIndex =
            currentIndex === -1 || currentIndex === result.length - 1
              ? 0
              : currentIndex + 1;
          return result[nextIndex]?.id;
        }

        if (e.key === "ArrowUp") {
          // Move up or loop back to the last item
          const prevIndex =
            currentIndex === -1 || currentIndex === 0
              ? result.length - 1
              : currentIndex - 1;
          return result[prevIndex]?.id;
        }

        return null; // Default return
      });
    },
    [result]
  );

  useEffect(() => {
    if (selectedId === null) return;

    const selectedRecipe = result.find((item) => item.id === selectedId);
    if (selectedRecipe) setSearch(selectedRecipe.name);
  }, [selectedId, result]);

  return (
    <div>
      <h1>AutoComplete Search Bar</h1>
      <div>
        <img src={searhImg} className="searchImg"></img>
        <Input
          key="input"
          name="search"
          placeholder="Search"
          value={search}
          onChange={inputHandler}
          onBlur={blurHandler}
          onFocus={focusHandler}
          onKeyDown={keyDownHandler}
        />
      </div>
      {showResult && (
        <ul className="search-container">
          {result.map((item: Recipe) => (
            <li
              className={`search-result ${
                item.id === selectedId ? "selected" : ""
              }`}
              key={item.id}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
