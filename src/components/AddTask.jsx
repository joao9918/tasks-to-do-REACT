import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDesciption] = useState("");
  return (
    <div
      className={"space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col"}
    >
      <Input
        onChange={(e) => setTitle(e.currentTarget.value)}
        value={title}
        type="text"
        placeholder="Digite a tarefa:"
      />
      <Input
        onChange={(e) => setDesciption(e.currentTarget.value)}
        value={description}
        type="text"
        placeholder="Digite a descricao da tarefa:"
      />
      <button
        onClick={() => {
          //verificar se o titulo e descricao estao preenchidos
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o titulo e a descricao da tarefa!");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDesciption("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
