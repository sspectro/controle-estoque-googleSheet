function doGet(e){
    let temp = 'index';
    if('temp' in e.parameters){
      temp = e.parameters['temp'][0];
    }
    try {
      const html = HtmlService.createTemplateFromFile(temp);
      html.data = {'title':temp+' Page'}
      return html.evaluate();
    }
    catch(err) {
      return ContentService.createTextOutput(JSON.stringify(err))
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function getScriptUrl(){
const url = ScriptApp.getService().getUrl();
return url;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function getOutputFile(fileName){
const url = getScriptUrl();
let html = HtmlService.createHtmlOutputFromFile(fileName).getContent();
html = html.replace(/\?temp/g, url+'?temp');
return html;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function getProdutos(){
    // Obtém a planilha ativa
    var sheet = SpreadsheetApp.getActiveSheet();
    // Define o intervalo de dados a ser lido (incluindo cabeçalho)
    var range = sheet.getRange("A1:F");

    // Obtém os valores como uma matriz bidimensional
    var dados = range.getValues();

    // Percorre os dados e imprime cada linha no console
    for (var i = 0; i < dados.length; i++) {
        var linha = dados[i];
        Logger.log("ID: " + linha[0]);
        Logger.log("Produto: " + linha[1]);
        Logger.log("Fornecedor: " + linha[2]);
        Logger.log("Marca: " + linha[3]);
        Logger.log("Tipo: " + linha[4]);
        Logger.log("Data de Cadastro: " + linha[5]);
        Logger.log("-----------------------");
    }

}

function postProdutos(novosDados) {
    // Obtém a planilha ativa
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Produtos");
    
    // Define o intervalo onde os novos dados serão escritos (sem cabeçalho)
    var range = sheet.getRange(sheet.getLastRow()+1, 1, novosDados.length, novosDados[0].length);
  
    // Escreve os dados na planilha
    range.setValues(novosDados);
}

function teste(){
    //const dataAtual = new Date();
    const dataHora = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dataFormatada = dataHora.toLocaleString('pt-BR', options).replace(/\//g, '/'); // Garante a barra como separador

    //const dataFormatada = dataAtual.toLocaleString('pt-BR', options); // Formata para português do Brasil
    var produto = [
    //['Id', 'Produto', 'Fornecedor', 'Marca', 'Tipo', 'DataCadastro'],
    //[3, 'Produto 1', 'Fornecedor 1', 'Marca 1', 'Tipo 1', new Date()],
    //[5, 'Produto 2', 'Fornecedor 2', 'Marca 2', 'Tipo 2', dataAtual.getDay().toString()+'/'+dataAtual.getMonth().toString()+'/'+dataAtual.getFullYear().toString()+' '+dataAtual.getTime().toLocaleString('pt-BR')],
    [dataHora.getTime(), 'Produto 2', 'Fornecedor 2', 'Marca 2', 'Tipo 2', dataFormatada.replace(',','')],

    // Adicione mais linhas conforme necessário
  ]


  postProdutos(produto);
    
}





