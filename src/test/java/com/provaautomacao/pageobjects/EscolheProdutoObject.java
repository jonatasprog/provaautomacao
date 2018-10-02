package com.provaautomacao.pageobjects;

import com.provaautomacao.utils.TestBase;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class EscolheProdutoObject {

    private WebDriver navegador;


    public void setUp(){
        navegador = TestBase.createChrome();
    }

    public static void clicarNoProduto() {
        this.navegador =
        this.navegador.findElement(By.linkText("Faded Short Sleeve T-shirts")).click();


    }
}
