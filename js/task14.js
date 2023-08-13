/**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */
// const client = new Client("mango", "mango@gmail.com");

class Client {
    #login;
    #email;

    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    get clientData() {
        return { login: this.#login, email: this.#email }
    } 

    set clientData(parametr) {
        const {login, email} = parametr;
        this.#login = login;
        this.#email = email;

    }
}

const client = new Client("mango", "mango@gmail.com");
console.log(client);
// client.clientData;
client.clientData = { login: "polly", email: "polly@gmail.com" };
console.log(client.clientData);
