import Page from '../pageobjects/page'


class appData extends Page {

    private get header() { return $("//h1"); }
    private get fname() { return $('//input[@name="firstname"]') }
    private get lname() { return $('//input[@name="lastname"]') }
    private get gender_radio() { return $$('//input[@name="sex"]') }
    private get experience() { return $$('//input[@name="exp"]') }
    private get date() { return $('//input[@id="datepicker"]') }
    private get favouritechai_checkbox() { return $$('//input[@type="checkbox"]') }
    private get excitingchai_checkbox() { return $$('//input[@name="tool"]') }
    private get continent_dropdown() { return $('//select [@id="continents"]') }
    private get selcommands() { return $('//select[@id="selenium_commands"]') }
    private get submit_btn() { return $('//div[@class="button"]'); }

    getHeader() {
        return this.header
    }
    

    async selectdropdown(element: WebdriverIO.ElementArray, value: string) {
        for (let i = 0; i < element.length; i++) {
            const elm = await (element[i]).getAttribute('value');
            if (elm == value) {
                await (element[i]).click()
                break;
            }
        }
    }

       async enterfirstname(firstname:string) {
        await (await this.fname).setValue(firstname)
       }

      async enterlastname(lastname:string) {
          await (await this.lname).setValue(lastname)
      }
      

      async selectGender(gender:string) {
          await this.selectdropdown(await this.gender_radio,gender)
          
      }

      async selectExperience(years: string){
          await this.selectdropdown(await this.experience,years)
      }

      async selectData(date:string){
        await (await this.date).setValue(date)

    }

      async selectfavouriteChai(chaiType:string){
       await this.selectdropdown(await this.favouritechai_checkbox,chaiType)
    }

    async selectexcitingchaireason(reason:string){
        await this.selectdropdown(await this.excitingchai_checkbox,reason)
    }

    async selectContinent(continent:string){
        await (await this.continent_dropdown).selectByVisibleText(continent)
    }

    async selectCommand(command:string){
        await (await this.selcommands).selectByVisibleText(command)
    }

    async clickonsubmit(){
        await (await this.submit_btn).click()
    }
}
export default new appData()