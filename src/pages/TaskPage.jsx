import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center p-6 relative">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-6 top-10 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes de Tarefas</Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-slate-700 font-bold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
