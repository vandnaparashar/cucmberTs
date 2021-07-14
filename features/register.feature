Feature: chai page

    Scenario Outline: Test chai form
        Given I am on practice page "http://www.practiceselenium.com/practice-form.html"
        Then I validate page header "Practice Form"
        When I enter firstname <fname> and lastname <lname>
        And I select gender <gender> years <yrs> date <date> favourite chai <favchai> and reason <reason>
        And I select continent <continent> and commands <command>
        And I click on submit button
        

        Examples:
            | fname  | lname    | gender | yrs | date       | favchai | reason             | continent | command       |
            | vandna | parashar | Female | 5  | 08-09-2019 | Red Tea | Harmless Addiction | Europe    | Wait Commands |  

