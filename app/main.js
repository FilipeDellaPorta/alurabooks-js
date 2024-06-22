let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosdaAPI()

async function getBuscarLivrosdaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    // console.table(livros)
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivrosNaTela(livrosComDesconto)
}

