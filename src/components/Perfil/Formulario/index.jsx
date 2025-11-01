import { useState, useEffect } from "react"

const Form = () => {
    let [MateriaA, setMateriaA] = useState(0);
    let [MateriaB, setMateriaB] = useState(0);
    let [MateriaC, setMateriaC] = useState(0);

    useEffect(() => {
        console.log("O estado mudou")
    })

    const media = () => {
        let med = ((parseInt(MateriaA) + parseInt(MateriaB) + parseInt(MateriaC))/3);
        if (med >= 7) {
            return (
                <p>Aprovado!</p>
            )
        } else {
            return (
                <p>Reprovado</p>
            )
        }
    }

    return (
        <form>
            <input type="number" placeholder="Nota mat A" onChange={evento => setMateriaA(evento.target.value)}/>
            <input type="number" placeholder="Nota mat B" onChange={evento => setMateriaB(evento.target.value)}/>
            <input type="number" placeholder="Nota mat C" onChange={evento => setMateriaC(evento.target.value)}/>
            {media()}
        </form>
    )
}

export default Form