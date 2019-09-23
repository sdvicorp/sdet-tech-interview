test.describe( 'Test Suite' , function(){

    test.it( 'Test Case' , function(){
        driver.findElement(webdriver.By.id(resource1Id)).click();
        driver.findElement(webdriver.By.id(tab_description)).getText();
        var desc_element = driver.findElement(webdriver.By.id(resourceDescription));
        var text = desc_element.getText();
        expect(text).equals("This is the description of item 1");

        driver.findElement(webdriver.By.id(resource2Id)).click();
        text = desc_element.getText();
        expect(text).equals("This is the description of item 2");

        driver.sleep();
    });

});