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
- [Materialize](https://materializecss.com/getting-started.html)


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
    - Copiar id do projeto do google appScript da planilha e clonar o projeto
        Consta na url do google appScript
        ```bash
        clasp clone "seuIdProjeto"
        ````
    - Após alguma alteração no arquivo de código baixado
        Comando para atualizar appScript
        ```bash
        clasp push
        ````


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