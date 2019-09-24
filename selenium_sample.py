def test_step(self):
    driver = self.driver
    driver.find_element_by_id('tab1Id').click()
    descriptionElement = driver.find_element_by_id('description')
    descriptionText = descriptionElement.text
    self.assertTrue("Description of resource 1" in descriptionText)
    driver.find_element_by_id('tab2Id').click()
    descriptionText = descriptionElement.text
    self.assertTrue("Description of resource 2" in descriptionText)