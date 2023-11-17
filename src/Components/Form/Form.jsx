import { useState } from "react";
import "./form.scss";

export default function Form(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [deliv, setDeliv] = useState("");
  return (
    <form action="">
      <div className="content_cab">
        <div className="item1">
          <div>
            <input
              placeholder="Имя"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Телефон"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="item2">
          <div>
            <input
              placeholder="Фамилимя"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Электронная почта"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="other">
        <input
          className="adres"
          placeholder="Адрес доставки"
          type="text"
          value={deliv}
          onChange={(e) => setDeliv(e.target.value)}
        />
      </div>
      <button
        type="button"
        className="buy"
        onClick={() => {
          props.addPost(name, phone, text, email, deliv);
          setName("");
          setDeliv("");
          setEmail("");
          setText("");
          setPhone("");
        }}
      >
        Показать заказ
      </button>
    </form>
  );
}
