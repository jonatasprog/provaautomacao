package com.provaautomacao.pageobjects;

import org.openqa.selenium.WebDriver;

public class BasePage {
        //protected para que as classes filhas possam utilizar esse atributo, pois assim a gente mata o problema de repetição.
        protected WebDriver navegador;

        public BasePage(WebDriver navegador){
            this.navegador = navegador;
        }
    }

