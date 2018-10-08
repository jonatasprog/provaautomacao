package com.provaautomacao.tasks;

import com.provaautomacao.pageobjects.ProcedeParaCheckoutObject;
import org.openqa.selenium.WebDriver;

public class ProcedeParaCheckout {
    private WebDriver navegador;
    public ProcedeParaCheckoutObject buttonAddToCart;

    public ProcedeParaCheckout(WebDriver navegador) {
        this.navegador = navegador;
        this.buttonAddToCart = new ProcedeParaCheckoutObject(navegador);
    }

    public void clicarBotao() {
        this.buttonAddToCart.getProceedToCheckout(navegador).click();
    }
}
