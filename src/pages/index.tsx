import { useState, useEffect } from "react"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import ClienteRepositorio from '../core/ClienteRepositorio'
import ColecaoCliente from '../backend/database/ColecaoCliente'

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })

  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()

  }
  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }



  return (
    <div className={`
     flex justify-center items-center 
     h-screen bg-gradient-to-r
   from-blue-500 to-purple-500 text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao
                onClick={novoCliente}
                cor='green'
                className="mb-4">
                Novo Cliente
              </Botao>
            </div>

            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido} />
          </>
        ) : (
          <Formulario cancelado={() => setVisivel('tabela')}
            cliente={cliente}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  )
}
