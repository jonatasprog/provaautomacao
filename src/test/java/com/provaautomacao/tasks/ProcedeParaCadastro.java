package com.provaautomacao.tasks;

import com.provaautomacao.pageobjects.ProcedeParaCadastroObject;
import org.openqa.selenium.WebDriver;

public class ProcedeParaCadastro {
    private WebDriver navegador;
    public ProcedeParaCadastroObject buttonProceedToCheckout;

    public ProcedeParaCadastro(WebDriver navegador) {
        this.navegador = navegador;
        this.buttonProceedToCheckout = new ProcedeParaCadastroObject(navegador);
    }

    public void clicarBotao() {
        this.buttonProceedToCheckout.getProceedToCheckout(navegador).click();
    }
}