import router from "@/router"
import firebaseApp from "@/middleware/firebase"

export const authGuardSettings = {
    debug: true, // enable debug messages in console log
    session: "local", // session persistence

    router, // routes
    firebase: firebaseApp, // pass on firebase middleware app init

    saml: false, // allow authentication with SAML
    saml_text: "Login with OKTA", // text for large login button
    saml_provider_id: "saml.okta", // firebase provider ID for SAML

    email: true, // allow authentication with email
    phone: true, // allow authentication with phone
    google: true, // allow authentication with gmail account
    facebook: true, // allow authentication with facebook account

    verification: false, // require user email to be verified before granting access
    registration: false, // allow new user registrations
}
