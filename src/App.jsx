import { useState } from "react";
import posts from "./posts.json";
import "./App.scss";
import Card from "./Components/Card/Card";
import Form from "./Components/Form/Form";

function App() {
  const [arr, setArr] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  function delCard(id) {
    const copyArr = [...arr];
    const resultArr = copyArr.filter((item) => item.id != id);
    setArr(resultArr);
  }

  const addPost = (name, phone, text, email, deliv) => {
    setArr([...arr, { id: Date.now(), name, phone, text, email, deliv }]);
    console.log(arr)
  };

  return (
    <div>
      <button
        type="button"
        className="buy"
        onClick={() => setIsOpenModal(true)}
      >
        open modal
      </button>
      {isOpenModal && (
        <div className="modal">
          <div className="content-modal" onClick={(e) => e.stopPropagation()}>
            <button className="buy close" onClick={() => setIsOpenModal(false)}>
              X
            </button>
            <Form addPost={addPost}/>
          </div>
        </div>
      )}
      <>
       {arr.map((item, index) => (
        <Card object={item} delCard={delCard} key={index} />
      ))}
      </>
    </div>
  );
}

export default App;
