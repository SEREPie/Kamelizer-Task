# Kamelizer Automation Task

## Overview
This project contains automated tests for the **Buffalo Burger** website. The tests check if the login functionality works as expected using different scenarios. The tests are written using **Cypress**.

## Prerequisites
Make sure you have the following installed:

- Node.js (version 14 or higher)
- Cypress (I used version 13.15.0)

## Test Scenarios
Here’s what the tests do:

- **Valid Login:**
  - Logs in with a correct phone number and password.
  - Confirms that a welcome message appears after login.

- **Invalid Password:**
  - Tries to log in with the right phone number but a wrong password.
  - Checks for an error message saying "Wrong password."

- **Invalid Phone Number:**
  - Tries to log in with a wrong phone number.
  - Checks for an error message saying "Mobile number not found."

- **Empty Password:**
  - Tries to log in with a phone number but leaves the password blank.
  - Confirms the login button is disabled.

- **Empty Fields:**
  - Tries to log in without entering a phone number or password.
  - Confirms the login button is disabled.
