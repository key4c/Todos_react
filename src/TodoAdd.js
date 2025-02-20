import { useState } from "react";

export default function TodoAdd(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImage] = useState("");

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const newDeed = { title, desc, img, done: false };
    const date = new Date();
    newDeed.createdAt = date.toLocaleDateString();
    newDeed.key = date.getTime();
    props.add(newDeed);
    evt.target.reset();
  };
  const handleFormReset = () => {
    setTitle("");
    setDesc("");
    setImage("");
  };
  return (
    <section>
      <h1>Создание нового дела</h1>
      <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
        <div className="field">
          <label className="label">Заголовок</label>
          <div className="control">
            <input
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Примечание</label>
          <div className="control">
            <textarea
              className="textarea"
              value={desc}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="field is-grouped is-grouped-right">
          <div className="control">
            <input
              type="reset"
              className="button is-warning is-light"
              value="Сброс"
            />
          </div>
          <div className="control">
            <input
              type="submit"
              className="button is-primary"
              value="Создать дело"
            />
          </div>
        </div>
      </form>
    </section>
  );
}
