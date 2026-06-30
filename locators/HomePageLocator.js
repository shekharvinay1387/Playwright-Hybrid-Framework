export const HomePageLocator = (page) => ({

    homeLogo: page.getByAltText("Website for automation practice"),

    signupLoginBtn: page.getByRole("link", { name: /Signup \/ Login/i }),

    productsBtn: page.getByRole("link", { name: /Products/i }),

    cartBtn: page.getByRole("link", { name: /Cart/i }),

    contactUsBtn: page.getByRole("link", { name: /Contact us/i }),

    loggedInUser: page.locator("a").filter({ hasText: "Logged in as" })

});