package com.provaautomacao.steps;

import com.provaautomacao.tasks.AdicionaNoCarrinhoTask;
import com.provaautomacao.tasks.EscolheProdutoTask;
import com.provaautomacao.tasks.ProcedeParaCadastro;
import com.provaautomacao.tasks.ProcedeParaCheckout;
import com.provaautomacao.utils.TestBase;
import com.provaautomacao.verificationpoints.ConfirmacaoDoProdutoVerificationPoint;
import com.provaautomacao.verificationpoints.PaginaConfirmacaoVerificationPoint;
import com.provaautomacao.verificationpoints.PaginaDescricaoVerificationPoint;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;

import java.util.concurrent.TimeUnit;


public class ComprarProduto {

    private static WebDriver navegador;
    EscolheProdutoTask elemento;
    AdicionaNoCarrinhoTask buttonAddToCart;

    @Before
    public void beforeCenario() {
        System.out.println("This will run before the every Scenario");
    }


    @Given("^Usuário está na Home Page$")
    public void usuário_está_na_home_page() {
        this.navegador = TestBase.createChrome();
    }

    @When("^Usuário escolhe um produto$")
    public void usuário_escolhe_um_produto() {
        this.elemento = new EscolheProdutoTask(this.navegador);

    }

    @Then("^É redirecionado para a página de descrição do produto$")
    public void é_redirecionado_para_a_página_de_descrição_do_produto() {
        this.elemento.clicarImagem();

    }

    @Given("^Usuário está na página de descrição de seu produto$")
    public void usuário_está_na_página_de_descrição_de_seu_produto() {
        PaginaDescricaoVerificationPoint tituloDescricaoDoProduto = new PaginaDescricaoVerificationPoint(this.navegador);
        tituloDescricaoDoProduto.getTitulo();

    }

    @When("^Usuário adiciona seu produto no carrinho$")
    public void usuário_adiciona_seu_produto_no_carrinho() {
        this.buttonAddToCart = new AdicionaNoCarrinhoTask(this.navegador);

    }

    @Then("^O usuário vai para a página de confirmação de seu item no carrinho$")
    public void o_usuário_vai_para_a_página_de_confirmação_de_seu_item_no_carrinho() {
        this.buttonAddToCart.clicarBotao();
    }

    @Given("^Usuário está na pagina de confirmação$")
    public void usuário_está_na_pagina_de_confirmação() {
        PaginaConfirmacaoVerificationPoint tituloProccedToCheckout = new PaginaConfirmacaoVerificationPoint(this.navegador);
        tituloProccedToCheckout.getTitulo();
    }

    @And("^Procede para o checkout$")
    public void procede_para_o_checkout() {
        ProcedeParaCheckout buttonProceedToCheckout = new ProcedeParaCheckout(this.navegador);
        buttonProceedToCheckout.clicarBotao();
    }

    @When("^O usuário confirma o produto$")
    public void o_usuário_confirma_o_produto() {
        ConfirmacaoDoProdutoVerificationPoint linkTextDoProduto = new ConfirmacaoDoProdutoVerificationPoint(this.navegador);
        linkTextDoProduto.getTitulo();
    }

    @Then("^O usuário finaliza a primeira etapa da compra$")
    public void o_usuário_finaliza_a_primeira_etapa_da_compra() {
        ProcedeParaCadastro buttonProceedToCheckout2 = new ProcedeParaCadastro(this.navegador);
        buttonProceedToCheckout2.clicarBotao();
    }
}