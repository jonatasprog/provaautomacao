$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/provaautomacao/features/ComprarProduto.feature");
formatter.feature({
  "line": 1,
  "name": "ComprarProduto",
  "description": "",
  "id": "comprarproduto",
  "keyword": "Feature"
});
formatter.before({
  "duration": 280798,
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
  "duration": 11980108206,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.usuário_escolhe_um_produto()"
});
formatter.result({
  "duration": 123260,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.é_redirecionado_para_a_página_de_descrição_do_produto()"
});
formatter.result({
  "duration": 2703856340,
  "status": "passed"
});
formatter.before({
  "duration": 150245,
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
  "duration": 42497847,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.usuário_adiciona_seu_produto_no_carrinho()"
});
formatter.result({
  "duration": 64547,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.o_usuário_vai_para_a_página_de_confirmação_de_seu_item_no_carrinho()"
});
formatter.result({
  "duration": 5122195941,
  "status": "passed"
});
formatter.before({
  "duration": 301220,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Prosseguir na compra do produto",
  "description": "",
  "id": "comprarproduto;prosseguir-na-compra-do-produto",
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
  "duration": 1748958677,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.procede_para_o_checkout()"
});
formatter.result({
  "duration": 6558908477,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.o_usuário_confirma_o_produto()"
});
formatter.result({
  "duration": 65719831,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.o_usuário_finaliza_a_primeira_etapa_da_compra()"
});
formatter.result({
  "duration": 1766469160,
  "status": "passed"
});
formatter.before({
  "duration": 184524,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Criar uma conta",
  "description": "",
  "id": "comprarproduto;criar-uma-conta",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "Usuario cadastra seu email",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Usuario confirma seu email",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Usuário preenche e envia formulário de cadastro",
  "keyword": "Then "
});
formatter.match({
  "location": "ComprarProduto.usuario_cadastra_seu_email()"
});
formatter.result({
  "duration": 182300544,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.usuario_confirma_seu_email()"
});
formatter.result({
  "duration": 88474305,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.usuário_preenche_e_envia_formulario_de_cadastro()"
});
formatter.result({
  "duration": 12254888253,
  "status": "passed"
});
formatter.before({
  "duration": 143681,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Finalizar a compra do produto",
  "description": "",
  "id": "comprarproduto;finalizar-a-compra-do-produto",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "Usuário valida seus dados e prossegue",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Usuário aceita os termos de serviço e prossegue",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Usuário valida o total do valor de seu produto",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Usuário seleciona um método de pagamento e prossegue",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Usuário confere a finalização da sua compra",
  "keyword": "Then "
});
formatter.match({
  "location": "ComprarProduto.usuário_valida_seus_dados_e_prossegue()"
});
formatter.result({
  "duration": 1140148407,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.usuário_aceita_os_termos_de_serviço_e_prossegue()"
});
formatter.result({
  "duration": 979744262,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.usuário_valida_o_total_do_valor_de_seu_produto()"
});
formatter.result({
  "duration": 39204124,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.usuário_seleciona_um_método_de_pagamento_e_prossegue()"
});
formatter.result({
  "duration": 963932790,
  "status": "passed"
});
formatter.match({
  "location": "ComprarProduto.usuário_confere_a_finalização_da_sua_compra()"
});
formatter.result({
  "duration": 1999022677,
  "status": "passed"
});
});