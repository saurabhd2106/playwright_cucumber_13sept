Feature: Login to Conduit App

    This is a feature file to test all login and signup scenarios

    Scenario: Login with correct credentials
        Given Saurabh is a writer and has access to the Conduit application
        When Saurabh uses the credentials as "testuser@test.com" and "testpassword"
        Then Saurabh get access to the application to write and view articles