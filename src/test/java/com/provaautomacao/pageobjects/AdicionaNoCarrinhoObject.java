package com.provaautomacao.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class AdicionaNoCarrinhoObject {

    private WebDriver navegador;

    public AdicionaNoCarrinhoObject(WebDriver navegador) {
        this.navegador = navegador;

    }

    public WebElement getAddToCartButton (WebDriver navegador){

        return  navegador.findElement(By.className("exclusive"));

    }


}
