import { useState } from "react";
import { useSubmit } from "react-router-dom";

export default function TodoAdd() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImage] = useState("");
  const submit = useSubmit();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    submit({ title, desc, img }, { action: "/add", method: "post" });
    // Очистка полей после отправки
    setTitle("");
    setDesc("");
    setImage("");
  };
  return (
    <section>
      <h1>Создание нового дела</h1>
      <form
        onSubmit={handleFormSubmit}
        onReset={() => {
          setTitle("");
          setDesc("");
          setImage("");
        }}
      >
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
              onChange={(e) => setDesc(e.target.value)}
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
