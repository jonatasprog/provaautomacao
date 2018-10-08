$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/provaautomacao/features/ComprarProduto.feature");
formatter.feature({
  "line": 1,
  "name": "ComprarProduto",
  "description": "",
  "id": "comprarproduto",
  "keyword": "Feature"
});
formatter.before({
  "duration": 234120,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Selecionar um produto na página",
  "description": "",
  "id": "comprarproduto;selecionar-um-produto-na-página",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Usuário está na Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Usuário escolhe um produto",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "É redirecionado para a página de descrição do produto",
  "keyword": "Then "
});
formatter.match({
  "location": "ComprarProduto.usuário_está_na_home_page()"
});
formatter.result({
  "duration": 11735443548,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.usuário_escolhe_um_produto()"
});
formatter.result({
  "duration": 93356,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.é_redirecionado_para_a_página_de_descrição_do_produto()"
});
formatter.result({
  "duration": 1586618486,
  "status": "passed"
});
formatter.before({
  "duration": 107214,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Adicionar um produto no carrinho",
  "description": "",
  "id": "comprarproduto;adicionar-um-produto-no-carrinho",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Usuário está na página de descrição de seu produto",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Usuário adiciona seu produto no carrinho",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "O usuário vai para a página de confirmação de seu item no carrinho",
  "keyword": "Then "
});
formatter.match({
  "location": "ComprarProduto.usuário_está_na_página_de_descrição_de_seu_produto()"
});
formatter.result({
  "duration": 48997771,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.usuário_adiciona_seu_produto_no_carrinho()"
});
formatter.result({
  "duration": 49231,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.o_usuário_vai_para_a_página_de_confirmação_de_seu_item_no_carrinho()"
});
formatter.result({
  "duration": 107495261,
  "status": "passed"
});
formatter.before({
  "duration": 118884,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Finalizar a compra do produto",
  "description": "",
  "id": "comprarproduto;finalizar-a-compra-do-produto",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "Usuário está na pagina de confirmação",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Procede para o checkout",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "O usuário confirma o produto",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "O usuário finaliza a primeira etapa da compra",
  "keyword": "Then "
});
formatter.match({
  "location": "ComprarProduto.usuário_está_na_pagina_de_confirmação()"
});
formatter.result({
  "duration": 776461553,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.procede_para_o_checkout()"
});
formatter.result({
  "duration": 1415578666,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.o_usuário_confirma_o_produto()"
});
formatter.result({
  "duration": 51800644,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.o_usuário_finaliza_a_primeira_etapa_da_compra()"
});
formatter.result({
  "duration": 1737088586,
  "status": "passed"
});
});