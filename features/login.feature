Feature: The Internet Guinea Pig Website

  @Login @Scenario_1
  Scenario Outline: As a user, I can log into the secure area
    Given 01_I am on the login page
    When 02_I login with <username> and <password>
    Then 03_User successfully logged in

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |

  @Login @Scenario_2
  Scenario Outline: As a user, I cannot log in because I enter the wrong username and password
    Given 01_I am on the login page
    When 02_I login with <username> and <password>
    Then 03_User cannot logged in and error message <message> showed

    Examples:
      | username | password | message                                                                   |
      | foobar   | barfoo   | Epic sadface: Username and password do not match any user in this service |
