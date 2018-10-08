package com.provaautomacao.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ProcedeParaCadastroObject extends BasePage {
    public ProcedeParaCadastroObject(WebDriver navegador) {
        super(navegador);
    }

    public WebElement getProceedToCheckout(WebDriver navegador) {

        return navegador.findElement(By.linkText("Proceed to checkout"));
    }
}
