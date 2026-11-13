# P14 - Advanced Mobile Testing with Appium

## Project Description
This project is part of the Digital Skola QA Automation Bootcamp (Pertemuan 14).

The project implements mobile automation testing on the Sauce Labs Demo Android application using Appium and WebdriverIO.

**Testing Environment:**
- Device: Vivo Y36 (Real Device)
- Operating System: Android 15
- Automation Tool: Appium
- Framework: WebdriverIO
- Test Framework: Mocha
- Reporting: Allure Report
- Programming Language: JavaScript

**Note:** All automation tests were executed using a physical Android device connected via USB Debugging, not an Android Emulator.

## Test Scenarios

| No. | Test Scenario | Expected Result |
|---|---|---|
| 1 | Successful Login | User successfully logs in |
| 2 | Failed Login | Error message is displayed |
| 3 | Locked User Login | Locked user error is displayed |
| 4 | Sort Products (Z to A) | Products are sorted descending |
| 5 | Sort Products (Price Low to High) | Products are sorted by ascending price |
| 6 | Add and Remove Product | Product can be added and removed from cart |
| 7 | Logout | User successfully logs out |

## Project Structure

- `apk/` - Android application file
- `test/actions/` - Test action functions
- `test/pageobjects/` - Mobile element locators
- `test/specs/` - Automation test scenarios
- `test/test_data/` - Test credentials and expected messages
- `utils/` - Application helper functions
- `reports/allure-results/` - Allure test execution results
- `reports/screenshots/` - Test execution screenshots

## How to Run

1. Install dependencies:

   `npm install`

2. Connect an Android device using USB Debugging.

3. Run the automation tests:

   `npx wdio run wdio.conf.js`

## Test Execution Results

**Execution Summary:**
- Total Test Cases: 7
- Passed: 7
- Failed: 0
- Execution Status: PASSED

All test scenarios were executed successfully on a real Android device.

## Allure Report

Allure results and test execution screenshots are included in the project repository.

To generate and open the report, use:

- `npm run allure:generate`
- `npm run allure:open`

## Author

Debora Sidabutar

Digital Skola - QA Automation Bootcamp

Project: Pertemuan 14 - Advanced Mobile Testing with Appium