import { useLoaderData } from "react-router-dom";

export default function TodoList({ setDone, del }) {
  const list = useLoaderData();
  return (
    <section>
      <h1>Дела</h1>
      <table className="table is-hoverable is-fullwidth">
        <tbody>
          {list.map((item) => (
            <tr key={item.id || item.key}>
              <td>{item.done ? <del>{item.title}</del> : item.title}</td>

              <td>
                <button
                  className="button is-success"
                  title="Выполнено"
                  disabled={item.done}
                  onClick={() => {
                    setDone(item.key);
                  }}
                >
                  {`\u2611`}
                </button>
              </td>
              <td>
                <button
                  className="button is-danger"
                  title="Удалить"
                  onClick={() => del(item.key)}
                >
                  {`\u2612`}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
