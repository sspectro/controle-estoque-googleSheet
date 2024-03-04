function doGet(){
    let template = HtmlService.createTemplateFromFile('index');
    //template.data = getDB();
    return template.evaluate().setTitle("Cadastro Produto").setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
