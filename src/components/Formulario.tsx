import { useState } from "react"
import Cliente from "../core/Cliente"
import Botao from "./Botao"
import Input from "./Input"

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id
                ? <Input
                    className='mb-4'
                    texto="Código"
                    valor={id}
                    somenteLeitura={true} /> : false}
            <Input
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                className='mb-4'
            />
            <Input

                texto="Idade"
                tipo='number'
                valor={idade}
                valorMudou={setIdade}
            />

            <div className="mt-3 flex justify-end">
                <Botao onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
                    className="mr-2"
                    cor='blue'>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado} cor='gray'>Cancelar</Botao>
            </div>
        </div >
    )
}

export default Formulario