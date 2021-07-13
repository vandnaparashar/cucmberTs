Feature: The Internet Website homepage

  Scenario Outline: As a user, I can open Internet Website

    Given I open the browser and load the url <homepageurl>
    Then I should see a header with text <headertext>

    Examples:
      | homepageurl                         | headertext|        
      | https://the-internet.herokuapp.com/ | Welcome to the-Internet |
