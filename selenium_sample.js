test.describe( 'Test Suite' , function(){
    WebDriver driver = new ChromeDriver();

    test.it( 'Test Case' , function(){
        driver.get("https://dev.sdvi.com");
        driver.findElement(webdriver.By.id("resource1TabId")).click();
        var descriptionElement = driver.findElement(By.id("resourceDescription"));
        var text = descriptionElement.getText();
        expect(text).equals("This is the description of item 1");

        driver.findElement(By.id("resource2TabId")).click();
        text = descriptionElement.getText();
        expect(text).equals("This is the description of item 2");

        driver.sleep();
    });

});