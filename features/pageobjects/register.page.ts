import Page from '../pageobjects/page'


class appData extends Page {

    get header() { return $("//h1"); }
    get fname() { return $('//input[@name="firstname"]') }
    get lname() { return $('//input[@name="lastname"]') }
    get gender_radio() { return $$('//input[@name="sex"]') }
    get experience() { return $$('//input[@name="exp"]') }
    get date() { return $('//input[@id="datepicker"]') }
    get favouritechai_checkbox() { return $$('//input[@type="checkbox"]') }
    get excitingchai_checkbox() { return $$('//input[@name="tool"]') }
    get continent_dropdown() { return $('//select [@id="continents"]') }
    get selcommands() { return $('//select[@id="selenium_commands"]') }
    get submit_btn() { return $('//div[@class="button"]'); }
    

    async selectdropdown(element: WebdriverIO.ElementArray, value: string) {
        for (let i = 0; i < element.length; i++) {
            const elm = await (element[i]).getAttribute('value');
            if (elm == value) {
                await (element[i]).click()
                break;
            }
        }
    }

    //   async enterfirstname(firstname:string)
    //     await (await this.fname.setValue()

}

export default new appData()