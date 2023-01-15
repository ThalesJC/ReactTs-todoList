import { useContext } from "react";
import myContext from '../context/myContext';

function Main() {
    const { task, deleteATask } = useContext(myContext);

    const deleteTask = (e: React.MouseEvent<HTMLElement>) => {
        deleteATask((e.target as HTMLInputElement).value);
    }

    // const updateTask = (e: React.MouseEvent<HTMLElement>) => {
    //     updateATask((e.target as HTMLInputElement).value);
    // }

    return(
        <>
            <h2>Tarefas</h2>
            <ul>
                {task.map((el:string) => (
                <>
                    <li
                      key={el}
                    >
                        {el}
                    </li>
                    <button onClick={ deleteTask } value={el}>Excluir</button>
                    {/* <button onClick={ updateTask } value={el}>update</button> */}

                </>
                )
                )}
            </ul>
        </>
    )
}

export default Main
