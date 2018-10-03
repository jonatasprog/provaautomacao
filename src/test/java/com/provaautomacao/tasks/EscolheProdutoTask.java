package com.provaautomacao.tasks;

import com.provaautomacao.pageobjects.EscolheProdutoObject;
import com.provaautomacao.utils.TestBase;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.concurrent.TimeUnit;

public class EscolheProdutoTask {

    private WebDriver navegador;

    public  EscolheProdutoTask(WebDriver navegador) {
        this.navegador = navegador;
    }

    EscolheProdutoObject produtoPageObject = new EscolheProdutoObject(navegador);

    public void clicarImagem(){
        produtoPageObject.imagemDoProduto(navegador).click();
        //navegador.findElement(By.linkText("Faded Short Sleeve T-shirts")).click();
    }

}
