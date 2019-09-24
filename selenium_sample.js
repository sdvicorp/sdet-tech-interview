test.describe( 'Test Suite' , function(){

    test.it( 'Test Case' , function(){
        driver.findElement(webdriver.By.id(tab1Id)).click();
        var descriptionElement = driver.findElement(webdriver.By.id(resourceDescription));
        var text = descriptionElement.getText();
        expect(text).equals("This is the description of item 1");

        driver.findElement(webdriver.By.id(tab2Id)).click();
        text = descriptionElement.getText();
        expect(text).equals("This is the description of item 2");

        driver.sleep();
    });

});