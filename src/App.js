import Question from "./Question";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // важно обрабатывать ошибки именно здесь, а не в блоке catch().
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div>
        <h1>FAQ/Accordion</h1>
        <div className="container">
          <h2>Часто задаваемые вопросы</h2>
          <div className="questions">
            {items.map((item) => (
              <Question key={item.id} question={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
