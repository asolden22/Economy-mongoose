import mongoose from "mongoose";
export declare class Economy {
    /**
     * @param {string} url Here you will have the connection link to mongodb
    **/
    static connect(url: string): Promise<void | typeof mongoose>;
    /**
     * @param {string} User Here you will put the user, that is, who will receive the money or others.
     * @param {string} Guild Here you will have the server, that is, where will the money or others be.
     *
    **/
    static getUser(User: string, Guild: string): Promise<any>;
    /**
     * @param {string} User Here you will put the user, that is, who will receive the money or others.
     * @param {string} Guild Here you will have the server, that is, where will the money or others be.
     * @param {number} Amount Here you will put the amount of money.
    **/
    static addWallet(User: string, Guild: string, Amount: number): Promise<number | void>;
    /**
     * @param {string} User Here you will put the user, that is, who will receive the money or others.
     * @param {string} Guild Here you will have the server, that is, where will the money or others be.
     * @param {number} Amount Here you will put the amount of money.
    **/
    static removeWallet(User: string, Guild: string, Amount: number): Promise<number | void>;
    /**
     * @param
    **/
    static removeBank(User: string, Guild: string, Amount: number): Promise<number | void>;
    /**
    **/
    static addBank(User: string, Guild: string, Amount: number): Promise<number | void>;
    /**
     *
     *
     *
    **/
    static Withdraw(User: string, Guild: string, Amount: number): Promise<number | void>;
    /**
     * @param
     * @param
     * @param
    **/
    static Deposit(User: string, Guild: string, Amount: number): Promise<number | void>;
    /**
     * @param {string} User Here you will put the user, that is, who will receive the money or others.
     * @param {string} Guild Here you will have the server, that is, where will the money or others be.
    **/
    static createUser(User: string, Guild: string): Promise<false | void>;
    /**
     * @param {string} User Here you will put the user, that is, who will receive the money or others.
     * @param {string} Guild Here you will have the server, that is, where will the money or others be.
    **/
    static DeleteUser(User: string, Guild: string): Promise<false | void>;
    /**
     * @param {string} User Here you will put the user, that is, who will receive the money or others.
     * @param {string} Guild Here you will have the server, that is, where will the money or others be.
     * @param {number} Amount Here you will put the amount of money.
    **/
    static setBank(User: string, Guild: string, Amount: number): Promise<number | false | void>;
    /**
     * @param {string} User Here you will put the user, that is, who will receive the money or others.
     * @param {string} Guild Here you will have the server, that is, where will the money or others be.
     * @param {number} Amount Here you will put the amount of money.
    **/
    static setWallet(User: string, Guild: string, Amount: number): Promise<number | false | void>;
    /**
     * @param {string} ToUser Here you enter the id of the user who will give the money.
     * @param {string} FromUser Here you enter the id of the user who will receive the money.
     * @param {string} Guild Here you will have the server, that is, where will the money or others be.
     * @param {number} Amount Here you will put the amount of money.
    **/
    static transfer(ToUser: string, FromUser: string, Guild: string, Amount: number): Promise<false | void>;
}
