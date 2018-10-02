package com.provaautomacao.tasks;

import com.provaautomacao.pageobjects.EscolheProdutoObject;
import org.openqa.selenium.WebDriver;

public class EscolheProdutoTask {

    WebDriver navegador;
    EscolheProdutoObject produtoPageObject = new EscolheProdutoObject(navegador);

    public  EscolheProdutoTask(WebDriver navegador) {
        this.navegador = navegador;
    }


    public void clicarBotao(){
        produtoPageObject.imagemDoProduto().click();
    }
}
