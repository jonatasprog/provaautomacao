package com.provaautomacao.verificationpoints;

import com.provaautomacao.pageobjects.BasePage;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;


public class PaginaConfirmacaoVerificationPoint extends BasePage {

    public PaginaConfirmacaoVerificationPoint(WebDriver navegador) {
        super(navegador);
    }

    public String getTitulo() {

        String titulo;
        titulo = navegador.findElement(By.linkText("Proceed to checkout")).getText();
        Assert.assertEquals(titulo, "Proceed to checkout");

        return titulo;
    }
}

