package com.provaautomacao.utils;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {

    public static void createChrome() {

        WebDriver driver;
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\jonat\\drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("http://www.automationpractice.com");


    }
}
