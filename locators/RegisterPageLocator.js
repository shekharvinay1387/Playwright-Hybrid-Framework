export const RegisterPageLocator = (page) => ({

    // Signup Section
    signupName: page.getByPlaceholder("Name"),

    signupEmail: page.getByPlaceholder("Email Address").nth(1),

    signupButton: page.getByRole("button", { name: "Signup" }),

    // Account Information
    titleMr: page.getByRole("radio", { name: "Mr." }),

    password: page.getByLabel("Password *"),

    day: page.locator("#days"),

    month: page.locator("#months"),

    year: page.locator("#years"),

    // Address Information
    firstName: page.getByLabel("First name *"),

    lastName: page.getByLabel("Last name *"),

    company: page.getByLabel("Company", { exact: true }),

    address: page.getByLabel(/Address \*/),

    country: page.locator("#country"),

    state: page.getByLabel("State *"),

    city: page.getByLabel(/City \*/),

    zipcode: page.locator("#zipcode"),

    mobileNumber: page.getByLabel("Mobile Number *"),

    // Buttons
    createAccountBtn: page.getByRole("button", { name: "Create Account" }),

    continueBtn: page.getByRole("link", { name: "Continue" }),

    // Verification
    accountCreatedMsg: page.getByText("Account Created!")

});