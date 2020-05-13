export class Store{

    constructor() {

        this.city;
        this.countryCode;
        this.defaultCity = 'Kiev';
        this.defaultCountry = 'ua';
    }

    getLocationData() {
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        if (localStorage.getItem('countrycode') === null) {
            this.countryCode = this.defaultCountry;
        } else {
            this.countryCode = localStorage.getItem('countrycode');
        }

        return {
            city: this.city, 
            countryCode: this.countryCode
        }
    }

    setLocationDate(city, countryCode) {
        localStorage.setItem('city', city);
        localStorage.setItem('countrycode', countryCode);

    }
}