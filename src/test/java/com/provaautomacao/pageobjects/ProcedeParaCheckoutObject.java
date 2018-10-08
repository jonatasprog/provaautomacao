package com.provaautomacao.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ProcedeParaCheckoutObject extends BasePage {
    public ProcedeParaCheckoutObject(WebDriver navegador) {
        super(navegador);
    }

    public WebElement getProceedToCheckout(WebDriver navegador) {

        return navegador.findElement(By.linkText("Proceed to checkout"));
    }
}
