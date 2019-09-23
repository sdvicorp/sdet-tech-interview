def test_step(self):
    driver = self.driver
    driver.find_element_by_id('resource1Id').click()
    descElem = driver.find_element_by_id('description')
    description = descElem.text
    self.assertTrue("Description of resource 1" in description)
    driver.find_element_by_id('resource2Id').click()
    description = descElem.text
    self.assertTrue("Description of resource 2" in description)