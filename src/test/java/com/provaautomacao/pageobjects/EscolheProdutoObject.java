package com.provaautomacao.pageobjects;

import com.provaautomacao.utils.TestBase;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class EscolheProdutoObject {

    private WebDriver navegador;

    public EscolheProdutoObject(WebDriver driver) {
        navegador = driver;
    }

    public WebElement imagemDoProduto() {
        return this.navegador.findElement(By.linkText());

    }
}
