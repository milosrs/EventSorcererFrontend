import Keycloak from 'keycloak-js';
import { Endpoints, Request } from '../request/Requests';

const keycloakConfig = {
    "clientId": "event_sorcerer_frontend",
    "realm": "sorcerer_realm",
    "auth-server-url": "http://localhost:8083/auth/",
    "url": "http://localhost:8083/auth",
    "ssl-required": "external",
    "resource": "event_sorcerer",
    "public-client": true,
    "verify-token-audience": true,
    "use-resource-role-mappings": true,
    "confidential-port": 0
};

const keycloak = new Keycloak(keycloakConfig);

const initKeycloak = (onSuccessCallback, onFailureCallback) => {
    let success = false;

    timeoutWrapper(() => {
        if(!success){
            onFailureCallback();
        }
    });

    keycloak.init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        pkceMethod: 'S256',

    }).then((isAuthenticated) => {
        success = true;
        if(isAuthenticated) {
            onSuccessCallback();
        } else {
            login();
        }
    });
}

const timeoutWrapper = (func) => {
    setTimeout(func, 3000);
}

const login = keycloak.login;

const logout = keycloak.logout;

const register = keycloak.register;

const getToken = () => keycloak.token;

const updateToken = (successCallback) => {
    return keycloak.updateToken(7200)
        .then(successCallback())
        .catch(login({
            redirectUri: "/keycloak"
        }));
}

const getUsername = () => keycloak.idTokenParsed ? keycloak.idTokenParsed.preferred_username : '';

const getRole = () => keycloak.tokenParsed ? keycloak.tokenParsed.realm_access.roles : '';

const getUserData = () => {
    const username = getUsername();
    Request.get(username, Endpoints.Users.getByUsername);
}

export default {
    initKeycloak,
    login,
    register,
    logout,
    getToken,
    updateToken,
    getUsername,
    keycloak,
    getUserData,
    getRole,
};