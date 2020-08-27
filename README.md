# Desafio sobre Conceitos do Node.js aplicado no Bootcamp GoStack
## Rotas da aplicação
:white_check_mark: POST /repositories : A rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: { id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs : ["Node.js", "..."], likes: 0 }; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.

:white_check_mark: GET /repositories: Rota que lista todos os repositórios;

- [ ] PUT /repositories/:id : A rota deve alterar apenas o title, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;

:white_check_mark: DELETE /repositories/:id : A rota deve deletar o repositório com o id presente nos parâmetros da rota;

:white_check_mark: POST /repositories/:id/like : A rota deve aumentar o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;

## Revisão Conceito
 * Método HTTP
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end

  * Tipos de parametros
  * Query Params: Filtros e paginação
  * Route Params: Identificar recursos (Atualizar or Deletar)
  * Request Body: Conteúdo na hora de criar ou editar um recurso {Json}

 * Middleware é um Interceptador de requisições, que pode:
    1. Interromper totalmente a requisição ou
    2. Alterar dados da requisição.
