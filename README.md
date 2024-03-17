# controle-estoque-googleSheet

>Controle de estoque com google sheet com uso do google appscript e bootstrap5.
> 
>>

## Ambiente de Desenvolvimento
Linux, Visual Studio Code, appscript google, VueJs

## Documentação
- [NodeJs](https://nodejs.org/en/download)
- Dica planilhas google [SGP Google Sheets](https://www.youtube.com/@sgpgooglesheets)
- Dica planilhas google [Alessandro Trovato](https://www.youtube.com/@AlessandroTrovato)
- Dica planilhas google [Learn Google Sheets & Excel Spreadsheets](https://www.youtube.com/@ExcelGoogleSheets)
- [Google Clasp Install](https://unpkg.com/browse/@google/clasp@1.1.4/README.md)
- [Bootstrap5](https://getbootstrap.com/docs/5.2/getting-started/introduction/)


## Desenvolvimento
1. <span style="color:383E42"><b>Preparando ambiente</b></span>
    <details><summary><span style="color:Chocolate">Detalhes</span></summary>
    <p>

    - Criar repositório no github com `gitignore` e `README.md`
    - Editar `README` e colocar estrutura básica
    - Criar diretório `readmeImages` e colocar imagens para uso no `README.md`
    - Editar `gitignore` e colocar configuração para `Node, vue, vuejs, vscode/visualstudio code`
        >Use o site [gitignore.io](https://www.toptal.com/developers/gitignore/)
    
    - Instalar o `node js`
    - Criar planilha `Controle Estoque`

    - Incluir modulos node
        Basta pressionar `Enter` após executar o comando até concluir
        ````bash
        npm init
        ````
    - Instalar o `google clasp`
        ```bash
        sudo npm install -g @google/clasp
        npm i -S @types/google-apps-script
        ```
    - Efetuar `login` via navegador
        ```bash
        clasp login
        ```
    - Copiar id do projeto do google appScript(script da planilha). Clonar o projeto
        Consta na url do google appScript
        ```bash
        clasp clone "seuIdProjeto"
        ````
    - Após alguma alteração no arquivo de código
        Comando para atualizar appScript
        ```bash
        clasp push
        ````


    </p>

    </details> 

    ---


2. <span style="color:383E42"><b>Template básico `index.html`</b></span>
    <details><summary><span style="color:Chocolate">Detalhes</span></summary>
    <p>

    - Template `index.html`
        ```html
        <!DOCTYPE html>
        <html lang="pt-br">
            <head>
            <base target="_top">
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Bootstrap demo</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        </head>
        <body>
            <div class="container mt-3">
                <h1>Controle de Estoque</h1>
                <hr>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <div class="card-header">
                                <h5 class="card-title">Entradas</h5>
                            </div>
                            <div class="card-body">
                                <p class="card-text">
                                    <a href="/registrar-entrada" class="btn btn-primary">Registrar Entrada</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <div class="card-header">
                                <h5 class="card-title">Saídas</h5>
                            </div>
                            <div class="card-body">
                                <p class="card-text">
                                    <a href="/registrar-saida" class="btn btn-primary">Registrar Saída</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <div class="card-header">
                                <h5 class="card-title">Relatórios</h5>
                            </div>
                            <div class="card-body">
                                <p class="card-text">
                                    <a href="/relatorios" class="btn btn-primary">Gerar Relatórios</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-12">
                        <h2>Estoque Atual</h2>
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Quantidade</th>
                                    <th>Valor Unitário</th>
                                    <th>Valor Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Produto 1</td>
                                    <td>10</td>
                                    <td>R$ 10,00</td>
                                    <td>R$ 100,00</td>
                                    <td>
                                        <a href="/editar-produto/1" class="btn btn-sm btn-warning">Editar</a>
                                        <a href="/excluir-produto/1" class="btn btn-sm btn-danger">Excluir</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Produto 2</td>
                                    <td>20</td>
                                    <td>R$ 20,00</td>
                                    <td>R$ 400,00</td>
                                    <td>
                                        <a href="/editar-produto/2" class="btn btn-sm btn-warning">Editar</a>
                                        <a href="/excluir-produto/2" class="btn btn-sm btn-danger">Excluir</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        </body>
        </html>
        ```
    
    - Template básico `cadastro`
        ```html
        <!DOCTYPE html>
        <html lang="pt-br">
            <head>
            <base target="_top">
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Bootstrap demo</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        </head>
        <body>
            <div class="container mt-3">
                <h1>Cadastro de Produtos</h1>
                <hr>
                <form action="/cadastrar-produto" method="post">
                    <div class="mb-3">
                        <label for="nome" class="form-label">Nome do Produto:</label>
                        <input type="text" class="form-control" id="nome" name="nome" required>
                    </div>
                    <div class="mb-3">
                        <label for="nome" class="form-label">Fornecedor:</label>
                        <input type="text" class="form-control" id="nome" name="nome" required>
                    </div>
                    <div class="mb-3">
                        <label for="preco" class="form-label">Preço:</label>
                        <input type="number" class="form-control" id="preco" name="preco" required>
                    </div>
                    <div class="mb-3">
                        <label for="descricao" class="form-label">Descrição:</label>
                        <textarea class="form-control" id="descricao" name="descricao" rows="3" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Cadastrar</button>
                </form>
                <hr>
                <h2>Lista de Produtos</h2>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Produto 1</td>
                            <td>R$ 10,00</td>
                            <td>
                                <a href="/editar-produto/1" class="btn btn-sm btn-warning">Editar</a>
                                <a href="/excluir-produto/1" class="btn btn-sm btn-danger">Excluir</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Produto 2</td>
                            <td>R$ 20,00</td>
                            <td>
                                <a href="/editar-produto/2" class="btn btn-sm btn-warning">Editar</a>
                                <a href="/excluir-produto/2" class="btn btn-sm btn-danger">Excluir</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        </body>
        </html>
        ```

    </p>

    </details> 

    ---


## Meta
><span style="color:383E42"><b>Cristiano Mendonça Gueivara</b> </span>
>
>>[<img src="readmeImages/githubIcon.png">](https://github.com/sspectro "Meu perfil no github")
>
>><a href="https://linkedin.com/in/cristiano-m-gueivara/"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> 
>
>>[<img src="https://sspectro.github.io/images/cristiano.jpg" height="25" width="25"> - Minha Página Github](https://sspectro.github.io/#home "Minha Página no github")<br>



><span style="color:383E42"><b>Licença:</b> </span> Distribuído sobre a licença `Software Livre`. Veja Licença **[MIT](https://opensource.org/license/mit/)**.