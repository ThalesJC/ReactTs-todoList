import { useContext, useState } from "react";
import myContext from '../context/myContext';

function Header() {
    const [text, setText] = useState<string>('');
    const { addTask, cleanTasks } = useContext(myContext);

    const handleClick = () => {
            addTask(text);
            setText('');
    }
    const deleteTasks = () => {
        cleanTasks();
    }

    return(
        <>

        <h1>ReactTS To-do-list</h1>

        <input
            type="text"
            value={ text }
            onChange={ (e) => setText(e.target.value) }
        />

        <button
          type="button"
          onClick={handleClick}
        >
            Adicionar Tarefa
        </button>

        <button
            type="button"
            onClick={ deleteTasks }
        >
            Excluir tudo
        </button>

        </>
    )
}

export default Header
