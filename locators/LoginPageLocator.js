export const LoginPageLocator = (page) => ({

    loginEmail: page.getByPlaceholder("Email Address").first(),

    loginPassword: page.getByPlaceholder("Password"),

    loginButton: page.getByRole("button", { name: "Login" }),

    signupName: page.getByPlaceholder("Name"),

    signupEmail: page.getByPlaceholder("Email Address").nth(1),

    signupButton: page.getByRole("button", { name: "Signup" }),

    loginHeading: page.getByRole("heading", { name: "Login to your account" })

});