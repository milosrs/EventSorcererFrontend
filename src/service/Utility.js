export const Utility = {
    isEmpty: (data) => data === null || data === undefined,

    createStringFromObject: (object) => {
        let ret = '';

        for(const [key, value] of object) {
            ret += `${key}: ${value} 
            `;
        }

        return ret;
    },

    createStringFromArray: (array) => {
        let ret = '';

        for(const value of array) {
            ret += `${value} 
`;
        }

        return ret;
    }
}