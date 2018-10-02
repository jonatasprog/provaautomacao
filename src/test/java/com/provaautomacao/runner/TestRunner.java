package com.provaautomacao.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


    @RunWith(Cucumber.class)
    @CucumberOptions(
            features = "src/test/java/com/provaautomacao/features/ComprarProduto.feature/",
            glue = {"steps"}

    )
    public class TestRunner {
    }

