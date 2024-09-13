Feature: Login to Conduit App

    This is a feature file to test all login and signup scenarios

    Scenario: Login with correct credentials
        Given Saurabh is a writer and has access to the Conduit application
        When Saurabh uses the credentials as "testuser@test.com" and "testpassword"
        Then Saurabh get access to the application to write and view articles
    
    Scenario: Login with correct credentials as list
        Given Saurabh is a writer and has access to the Conduit application
        When Saurabh uses the credentials as 
        | testuser@test.com | 
        | testpassword      |
        Then Saurabh get access to the application to write and view articles
    
    Scenario: Login with correct credentials as map
        Given Saurabh is a writer and has access to the Conduit application
        When Saurabh uses the credentials as map
        | useremail    | testuser@test.com | 
        | userpassword | testpassword      |
        Then Saurabh get access to the application to write and view articles
    
    Scenario: Login with correct credentials as map
        Given Saurabh is a writer and has access to the Conduit application
        When Saurabh uses the credentials as map 2
        | useremail    | userepassword | 
        | testuser@test.com | testpassword      |
        Then Saurabh get access to the application to write and view articles

    Scenario Outline: Login with correct credentials as map
        Given Saurabh is a writer and has access to the Conduit application
        When Saurabh uses the credentials as map 2
        | useremail    | userpassword | 
        | <useremail> | <userpassword>     |
        Then Saurabh get access to the application to write and view articles

        Examples:
            | useremail | userpassword |
            | testuser@test.com | userpassword |
            | testuser1@test.com | userpassword |