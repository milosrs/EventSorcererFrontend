const defaultHeader = 'Welcome to Event Sorcerer'
let mainPageHeader = defaultHeader;

const urls = {
    '/keycloak/AddProduct' : 'Create new Product',
    '/keycloak/ManageProduct' : 'Edit a product',
    '/keycloak/AddOrder' : 'Create new Order',
    '/keycloak/ManageOrder' : 'Edit an Order',
    '/keycloak/ProfileOverview' : 'Your Profile',
};

const HeaderService = {
    setHeader: () => {
        const url = window.location.href;
        let replaced = false;
        
        for(const [key, value] of Object.entries(urls)) {
            if(url.indexOf(key) > -1) {
                mainPageHeader = value;
                replaced = true;
            }
        }

        if(!replaced) {
            mainPageHeader = defaultHeader;
        }
    },
    getHeader: () => mainPageHeader
};

export default HeaderService;