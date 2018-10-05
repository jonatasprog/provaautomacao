package com.provaautomacao.verificationpoints;

import com.provaautomacao.pageobjects.BasePage;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class PaginaDescricaoVerificationPoint extends BasePage {

    public PaginaDescricaoVerificationPoint(WebDriver navegador) {
        super(navegador);
    }

    public String getTitulo(){

        String titulo;
        titulo = navegador.findElement(By.xpath("//h3[contains(text(),'More info')]")).getText();
        Assert.assertEquals(titulo,"MORE INFO");

        return titulo;
    }
}




