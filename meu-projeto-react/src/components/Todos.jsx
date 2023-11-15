import { useEffect, useState } from "react";

const tarefas = [
  { id: "1", title: "minha primeira tarefa" },
  { id: "2", title: "minha segunda tarefa" },
  { id: "3", title: "minha terceira tarefa" },
  { id: "4", title: "minha quarta tarefa" },
];

export default function Todos() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      const resultado = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const final = await resultado.json();
      return final;
    }

    buscarDados().then((res) => setTarefas(res));
  }, []);

  return (
    <div>
      <h1>Buscando dados</h1>
      <ol>
        {tarefas.map((tarefas) => {
          return (
            <div>
              <li key={tarefas.id}>
                {tarefas.title}
                {tarefas.completed
                  ? " - Tarefa concluída!"
                  : " - Tarefa ainda não concluída."}
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
}
