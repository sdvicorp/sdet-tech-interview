def test_step(self):
    driver = self.driver
    driver.get("https://dev.sdvi.com")

    driver.find_element_by_id('resource1TabId').click()
    descriptionElement = driver.find_element_by_id('resourceDescriptionId')
    descriptionText = descriptionElement.text
    self.assertTrue("Description of resource 1" in descriptionText)

    driver.find_element_by_id('resource2TabId').click()
    descriptionText = descriptionElement.text
    self.assertTrue("Description of resource 2" in descriptionText)