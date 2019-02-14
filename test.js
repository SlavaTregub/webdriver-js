var webdriver = require('selenium-webdriver')

var emailData = {
    regEnvironment: 'http://stage.slotoking.com/',
    emailPrefix: 'chromeAuto',
    emailSuffix: '@mail.ru',
    emailPassword: '123456'
}

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build()

// driver.get(emailData.regEnvironment)
// driver.findElement({id:'registrationButtonTop'}).click()
// driver.findElement({id:'emailReg'}).sendKeys(emailData.emailPrefix + '1' + emailData.emailSuffix)
// driver.findElement({id:'passwordReg'}).sendKeys(emailData.emailPassword)
// driver.findElement({xpath:'//span[@class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"]'}).click()
// driver.findElement({xpath: '//button[@data-v-32f63d01]'}).click()

driver.get('http://stage.slotoking.com/')
driver.findElement({id:'registrationButtonTop'}).click()
driver.findElement({id:'emailReg'}).sendKeys('whyobjdontwork@mail.ru')
driver.findElement({id:'passwordReg'}).sendKeys('123456')
driver.findElement({xpath:'//span[@class="mdl-checkbox__ripple-container mdl-js-ripple-effect mdl-ripple--center"]'}).click()
driver.findElement({xpath: '//button[@data-v-32f63d01]'}).click()
