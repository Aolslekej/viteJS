import { useState } from "react";
import posts from "./posts.json";
import "./App.scss";
import Card from "./Components/Card/Card";

function App() {
  const [arr, setArr] = useState(posts);

  function delCard(id) {
    const copyArr = [...arr];
    const resultArr = copyArr.filter((item) => item.id != id);
    setArr(resultArr);
  }
  function addPost() {
    const newPost = {
      userId: 10,
      id: 100,
      title: "at nam consequatur ea labore ea harum",
      body: "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut",
    };
    setArr([...arr, newPost]);
  }
  return (
    <div>
      <button onClick={addPost}>Add post</button>
      {arr.map((item, index) => (
        <Card object={item} delCard={delCard} key={index} />
      ))}
    </div>
  );
}

export default App;
