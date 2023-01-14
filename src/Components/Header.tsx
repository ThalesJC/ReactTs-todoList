import { useState } from "react"

function Header() {
    const [text, setText] = useState<string | undefined>();

    return(
        <>

        <h1>ReactTS To-do-list</h1>

        <input
            type="text"
            value={ text }
            onChange={ (e) => setText(e.target.value) }
        />

        <button type="button">Adicionar Tarefa</button>

        <button type="button">Excluir tudo</button>

        </>
    )
}

export default Header
