package com.provaautomacao.tasks;

import com.provaautomacao.pageobjects.AdicionaNoCarrinhoObject;
import org.openqa.selenium.WebDriver;

public class AdicionaNoCarrinhoTask {
    private WebDriver navegador;

    public AdicionaNoCarrinhoTask(WebDriver navegador) {
        this.navegador = navegador;
    }

    AdicionaNoCarrinhoObject buttonAddToCart = new AdicionaNoCarrinhoObject(navegador);
    public void clicarBotao() {

    }
}
