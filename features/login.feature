Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area
    Given I am on the login page
    When I login with <username> and <password>
    Then User successfully logged in

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |

  Scenario Outline: As a user, I cannot log in because I enter the wrong username and password
    Given I am on the login page
    When I login with <username> and <password>
    Then User cannot logged in and error message <message> showed

    Examples:
      | username | password | message                                                                   |
      | foobar   | barfoo   | Epic sadface: Username and password do not match any user in this service |
