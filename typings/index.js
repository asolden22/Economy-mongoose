"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Economy = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set('useFindAndModify', false);
var EconomySchema = require("./model/econonpm my");
var util_1 = require("./util/util");
var Economy = /** @class */ (function () {
    function Economy() {
    }
    //--------------------------------------------------------------------------------------\\
    //---------------------------------------------------------------------------------------\\
    /**
     * @param {string} url Here you will have the connection link to mongodb
    **/
    Economy.connect = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!url)
                    return [2 /*return*/, console.log('you need to enter a connection to MongoDB.')];
                return [2 /*return*/, mongoose_1.default.connect(url, {
                        useNewUrlParser: true,
                        useUnifiedTopology: true
                    })];
            });
        });
    };
    //--------------------------------------------------------------------------------------\\
    //---------------------------------------------------------------------------------------\\
    /**
     * @param {string} User Here you will put the user, that is, who will receive the money or others.
     * @param {string} Guild Here you will have the server, that is, where will the money or others be.
     *
    **/
    Economy.getUser = function (User, Guild) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        util_1.IsNaS(User, 'User');
                        util_1.IsNaS(Guild, 'Guild');
                        if (!User)
                            return [2 /*return*/, console.log('[User] You need to enter a user ID.')];
                        if (!Guild)
                            return [2 /*return*/, console.log('[Guild] You need to enter a server ID.')];
                        return [4 /*yield*/, EconomySchema.findOne({ User: User, Guild: Guild })];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            return [2 /*return*/, false];
                        return [2 /*return*/, user];
                }
            });
        });
    };
    /**
     * @param {string} User Here you will put the user, that is, who will receive the money or others.
     * @param {string} Guild Here you will have the server, that is, where will the money or others be.
     * @param {number} Amount Here you will put the amount of money.
    **/
    //--------------------------------------------------------------------------------------\\
    //---------------------------------------------------------------------------------------\\
    Economy.addWallet = function (User, Guild, Amount) {
        return __awaiter(this, void 0, void 0, function () {
            var user, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        util_1.IsNaS(User, 'User');
                        util_1.IsNaS(Guild, 'Guild');
                        if (!User)
                            return [2 /*return*/, console.log('[User]  You need to enter a user ID.')];
                        if (!Guild)
                            return [2 /*return*/, console.log('[Guild] You need to enter a server ID. to enter a user ID.')];
                        if (!Amount)
                            return [2 /*return*/, console.log('[Amount] You need to enter the amount.')];
                        if (isNaN(Amount))
                            return [2 /*return*/, console.log('[Amount NaN] The amount entered is not a number.')];
                        if (Amount < 0)
                            return [2 /*return*/, console.log('[NMZ] The amount entered is not less than zero or zero')];
                        return [4 /*yield*/, EconomySchema.findOne({ User: User, Guild: Guild })];
                    case 1:
                        user = _a.sent();
                        if (!!user) return [3 /*break*/, 3];
                        newUser = new EconomySchema({
                            Guild: Guild,
                            User: User,
                            Wallet: 0,
                            Bank: 0
                        });
                        return [4 /*yield*/, newUser.save().catch(function (err) { return console.error("[MongoDB-Error]" + err); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Amount];
                    case 3:
                        user.Wallet += Amount;
                        return [4 /*yield*/, user.save().catch(function (err) { return console.error("[MongoDB-Error]" + err); })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, Amount];
                }
            });
        });
    };
    //--------------------------------------------------------------------------------------\\
    //---------------------------------------------------------------------------------------\\
    /**
     * @param {string} User Here you will put the user, that is, who will receive the money or others.
     * @param {string} Guild Here you will have the server, that is, where will the money or others be.
     * @param {number} Amount Here you will put the amount of money.
    **/
    Economy.removeWallet = function (User, Guild, Amount) {
        return __awaiter(this, void 0, void 0, function () {
            var user, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        util_1.IsNaS(User, 'User');
                        util_1.IsNaS(Guild, 'Guild');
                        if (!User)
                            return [2 /*return*/, console.log('[User] You need to enter a user ID.')];
                        if (!Guild)
                            return [2 /*return*/, console.log('[Guild] You need to enter a server ID.')];
                        if (!Amount)
                            return [2 /*return*/, console.log('[Amount] You need to enter the amount.')];
                        if (isNaN(Amount))
                            return [2 /*return*/, console.log('[Amount NaN] The amount entered is not a number.')];
                        if (Amount < 0)
                            return [2 /*return*/, console.log('[NMZ] The amount entered is not less than zero or zero')];
                        return [4 /*yield*/, EconomySchema.findOne({ User: User, Guild: Guild })];
                    case 1:
                        user = _a.sent();
                        if (!!user) return [3 /*break*/, 3];
                        newUser = new EconomySchema({
                            Guild: Guild,
                            User: User,
                            Wallet: 0,
                            Bank: 0
                        });
                        return [4 /*yield*/, newUser.save().catch(function (err) { return console.error("[MongoDB-Error]" + err); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Amount];
                    case 3:
                        if (!(Amount > user.Wallet)) return [3 /*break*/, 5];
                        user.Wallet -= user.Wallet;
                        return [4 /*yield*/, user.save()
                                .catch(function (err) { return console.log(err); })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, Amount];
                    case 5:
                        user.Wallet -= Amount;
                        return [4 /*yield*/, user.save().catch(function (err) { return console.error("[MongoDB-Error]" + err); })];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, Amount];
                }
            });
        });
    };
    //--------------------------------------------------------------------------------------\\
    //---------------------------------------------------------------------------------------\\
    /**
     * @param
    **/
    Economy.removeBank = function (User, Guild, Amount) {
        return __awaiter(this, void 0, void 0, function () {
            var user, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        util_1.IsNaS(User, 'User');
                        util_1.IsNaS(Guild, 'Guild');
                        if (!User)
                            return [2 /*return*/, console.log('[User] You need to enter a user ID.')];
                        if (!Guild)
                            return [2 /*return*/, console.log('[Guild]You need to enter a server ID.')];
                        if (!Amount)
                            return [2 /*return*/, console.log('[Amount] You need to enter the amount.')];
                        if (isNaN(Amount))
                            return [2 /*return*/, console.log('[Amount NaN] The amount entered is not a number.')];
                        if (Amount < 0)
                            return [2 /*return*/, console.log('[NMZ] The amount entered is not less than zero or zero')];
                        return [4 /*yield*/, EconomySchema.findOne({ User: User, Guild: Guild })];
                    case 1:
                        user = _a.sent();
                        if (!!user) return [3 /*break*/, 3];
                        newUser = new EconomySchema({
                            Guild: Guild,
                            User: User,
                            Wallet: 0,
                            Bank: 0
                        });
                        return [4 /*yield*/, newUser.save().catch(function (err) { return console.error("[MongoDB-Error]" + err); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Amount];
                    case 3:
                        if (!(Amount > user.Bank)) return [3 /*break*/, 5];
                        user.Bank -= user.Bank;
                        return [4 /*yield*/, user.save()
                                .catch(function (err) { return console.log(err); })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, Amount];
                    case 5:
                        user.Bank -= Amount;
                        return [4 /*yield*/, user.save().catch(function (err) { return console.error("[MongoDB-Error]" + err); })];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, Amount];
                }
            });
        });
    };
    //--------------------------------------------------------------------------------------\\
    //---------------------------------------------------------------------------------------\\
    /**
    **/
    Economy.addBank = function (User, Guild, Amount) {
        return __awaiter(this, void 0, void 0, function () {
            var user, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        util_1.IsNaS(User, 'User');
                        util_1.IsNaS(Guild, 'Guild');
                        if (!User)
                            return [2 /*return*/, console.log('[User] You need to enter a user ID.')];
                        if (!Guild)
                            return [2 /*return*/, console.log('[Guild] You need to enter a server ID.')];
                        if (!Amount)
                            return [2 /*return*/, console.log('[Amount] You need to enter the amount.')];
                        if (isNaN(Amount))
                            return [2 /*return*/, console.log('[Amount NaN] The amount entered is not a number.')];
                        if (Amount < 0)
                            return [2 /*return*/, console.log('[NMZ] The amount entered is not less than zero or zero')];
                        return [4 /*yield*/, EconomySchema.findOne({ User: User, Guild: Guild })];
                    case 1:
                        user = _a.sent();
                        if (!!user) return [3 /*break*/, 3];
                        newUser = new EconomySchema({
                            Guild: Guild,
                            User: User,
                            Wallet: 0,
                            Bank: 0
                        });
                        return [4 /*yield*/, newUser.save().catch(function (err) { return console.error("[MongoDB-Error]" + err); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Amount];
                    case 3:
                        user.Bank += Amount;
                        return [4 /*yield*/, user.save().catch(function (err) { return console.error("[MongoDB-Error]" + err); })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, Amount];
                }
            });
        });
    };
    //--------------------------------------------------------------------------------------\\
    //---------------------------------------------------------------------------------------\\
    /**
     *
     *
     *
    **/
    Economy.Withdraw = function (User, Guild, Amount) {
        return __awaiter(this, void 0, void 0, function () {
            var x, user, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        util_1.IsNaS(User, 'User');
                        util_1.IsNaS(Guild, 'Guild');
                        if (!User)
                            return [2 /*return*/, console.log('[User] You need to enter a user ID.')];
                        if (!Guild)
                            return [2 /*return*/, console.log('[Guild] You need to enter a server ID.')];
                        if (!Amount)
                            return [2 /*return*/, console.log('[Amount] You need to enter the amount.')];
                        x = Number(Amount);
                        if (isNaN(x))
                            return [2 /*return*/, console.log('[Amount NaN] The amount entered is not a number.')];
                        if (x < 0)
                            return [2 /*return*/, console.log('[NMZ] The amount entered is not less than zero or zero')];
                        return [4 /*yield*/, EconomySchema.findOne({ User: User, Guild: Guild })];
                    case 1:
                        user = _a.sent();
                        if (!!user) return [3 /*break*/, 3];
                        newUser = new EconomySchema({
                            Guild: Guild,
                            User: User,
                            Wallet: 0,
                            Bank: 0
                        });
                        return [4 /*yield*/, newUser.save().catch(function (err) { return console.error("[MongoDB-Error]" + err); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Amount];
                    case 3:
                        if (x > user.Bank)
                            return [2 /*return*/, console.log('[Amount] The amount entered exceeds the amount the user has in the bank')];
                        user.Bank -= x;
                        user.Wallet += x;
                        return [4 /*yield*/, user.save()
                                .catch(function (err) { return console.log(err); })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, Amount];
                }
            });
        });
    };
    //--------------------------------------------------------------------------------------\\
    //---------------------------------------------------------------------------------------\\
    /**
     * @param
     * @param
     * @param
    **/
    Economy.Deposit = function (User, Guild, Amount) {
        return __awaiter(this, void 0, void 0, function () {
            var x, user, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        util_1.IsNaS(User, 'User');
                        util_1.IsNaS(Guild, 'Guild');
                        if (!User)
                            return [2 /*return*/, console.log('[User] You need to enter a user ID.')];
                        if (!Guild)
                            return [2 /*return*/, console.log('[Guild] You need to enter a server ID.')];
                        if (!Amount)
                            return [2 /*return*/, console.log('[Amount] You need to enter the amount.')];
                        x = Number(Amount);
                        if (isNaN(x))
                            return [2 /*return*/, console.log('[Amount NaN] The amount entered is not a number.')];
                        if (x < 0)
                            return [2 /*return*/, console.log('[NMZ] The amount entered is not less than zero or zero')];
                        return [4 /*yield*/, EconomySchema.findOne({ User: User, Guild: Guild })];
                    case 1:
                        user = _a.sent();
                        if (!!user) return [3 /*break*/, 3];
                        newUser = new EconomySchema({
                            Guild: Guild,
                            User: User,
                            Wallet: 0,
                            Bank: 0
                        });
                        return [4 /*yield*/, newUser.save().catch(function (err) { return console.error("[MongoDB-Error]" + err); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Amount];
                    case 3:
                        if (x > user.Wallet)
                            return [2 /*return*/, console.log('[Amount] The amount entered exceeds the amount the user has in the bank')];
                        user.Wallet -= x;
                        user.Bank += x;
                        return [4 /*yield*/, user.save().catch(function (err) { return console.log(err); })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, Amount];
                }
            });
        });
    };
    //--------------------------------------------------------------------------------------\\
    //---------------------------------------------------------------------------------------\\
    /**
     * @param {string} User Here you will put the user, that is, who will receive the money or others.
     * @param {string} Guild Here you will have the server, that is, where will the money or others be.
    **/
    Economy.createUser = function (User, Guild) {
        return __awaiter(this, void 0, void 0, function () {
            var user, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        util_1.IsNaS(User, 'User');
                        util_1.IsNaS(Guild, 'Guild');
                        if (!User)
                            return [2 /*return*/, console.log('[User] You need to enter a user ID.。')];
                        if (!Guild)
                            return [2 /*return*/, console.log('[Guild] You need to enter a server ID.')];
                        return [4 /*yield*/, EconomySchema.findOne({ User: User, Guild: Guild })];
                    case 1:
                        user = _a.sent();
                        if (user)
                            return [2 /*return*/, false];
                        newUser = new EconomySchema({
                            Guild: Guild,
                            User: User,
                            Wallet: 0,
                            Bank: 0
                        });
                        return [4 /*yield*/, newUser.save().catch(function (err) { return console.error("[MongoDB-Error]" + err); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {string} User Here you will put the user, that is, who will receive the money or others.
     * @param {string} Guild Here you will have the server, that is, where will the money or others be.
    **/
    Economy.DeleteUser = function (User, Guild) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!User)
                            return [2 /*return*/, console.log('[User] You need to enter a user ID.')];
                        if (!Guild)
                            return [2 /*return*/, console.log('[Guild] You need to enter a server ID.')];
                        return [4 /*yield*/, EconomySchema.findOne({ User: User, Guild: Guild })];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            return [2 /*return*/, false];
                        return [4 /*yield*/, EconomySchema.findOneAndRemove({ User: User, Guild: Guild })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {string} User Here you will put the user, that is, who will receive the money or others.
     * @param {string} Guild Here you will have the server, that is, where will the money or others be.
     * @param {number} Amount Here you will put the amount of money.
    **/
    Economy.setBank = function (User, Guild, Amount) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        util_1.IsNaS(User, 'User');
                        util_1.IsNaS(Guild, 'Guild');
                        if (!User)
                            return [2 /*return*/, console.log('[User] You need to enter a user ID.')];
                        if (!Guild)
                            return [2 /*return*/, console.log('[Guild] You need to enter a server ID.')];
                        if (!Amount)
                            return [2 /*return*/, console.log('[Amount] You need to enter the amount.')];
                        if (isNaN(Amount))
                            return [2 /*return*/, console.log('[NaN] The amount entered is not a number.')];
                        if (Amount < 0)
                            return [2 /*return*/, console.log('[AIC] The amount entered is not less than zero or zero')];
                        return [4 /*yield*/, EconomySchema.findOne({ User: User, Guild: Guild })];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            return [2 /*return*/, false];
                        user.Bank = Amount;
                        return [4 /*yield*/, user.save().catch(function (err) { return console.error("[MongoDB-Error]" + err); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Amount];
                }
            });
        });
    };
    /**
     * @param {string} User Here you will put the user, that is, who will receive the money or others.
     * @param {string} Guild Here you will have the server, that is, where will the money or others be.
     * @param {number} Amount Here you will put the amount of money.
    **/
    Economy.setWallet = function (User, Guild, Amount) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        util_1.IsNaS(User, 'User');
                        util_1.IsNaS(Guild, 'Guild');
                        if (!User)
                            return [2 /*return*/, console.log('[User] You need to enter a user ID.')];
                        if (!Guild)
                            return [2 /*return*/, console.log('[Guild] You need to enter a server ID.')];
                        if (!Amount)
                            return [2 /*return*/, console.log('[Amount] You need to enter the amount.')];
                        if (isNaN(Amount))
                            return [2 /*return*/, console.log('[NaN] The amount entered is not a number.')];
                        if (Amount < 0)
                            return [2 /*return*/, console.log('[AIC] The amount entered is not less than zero or zero')];
                        return [4 /*yield*/, EconomySchema.findOne({ User: User, Guild: Guild })];
                    case 1:
                        user = _a.sent();
                        if (!user)
                            return [2 /*return*/, false];
                        user.Wallet = Amount;
                        return [4 /*yield*/, user.save().catch(function (err) { return console.error("[MongoDB-Error]" + err); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Amount];
                }
            });
        });
    };
    /**
     * @param {string} ToUser Here you enter the id of the user who will give the money.
     * @param {string} FromUser Here you enter the id of the user who will receive the money.
     * @param {string} Guild Here you will have the server, that is, where will the money or others be.
     * @param {number} Amount Here you will put the amount of money.
    **/
    Economy.transfer = function (ToUser, FromUser, Guild, Amount) {
        return __awaiter(this, void 0, void 0, function () {
            var user1, user2, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        util_1.IsNaS(ToUser, 'User');
                        util_1.IsNaS(FromUser, 'User');
                        util_1.IsNaS(Guild, 'Guild');
                        if (!ToUser)
                            return [2 /*return*/, console.log('[To User] You need to enter a user ID.')];
                        if (!FromUser)
                            return [2 /*return*/, console.log('[From User] You need to enter a user ID.')];
                        if (!Guild)
                            return [2 /*return*/, console.log('[Guild] You need to enter a server ID.')];
                        if (!Amount)
                            return [2 /*return*/, console.log('[Amount] You need to enter the amount.')];
                        if (isNaN(Amount))
                            return [2 /*return*/, console.log('[NaN] The amount entered is not a number.')];
                        if (Amount < 0)
                            return [2 /*return*/, console.log('[AIC] The amount entered is not less than zero or zero')];
                        return [4 /*yield*/, EconomySchema.findOne({ User: ToUser, Guild: Guild })];
                    case 1:
                        user1 = _a.sent();
                        return [4 /*yield*/, EconomySchema.findOne({ User: FromUser, Guild: Guild })];
                    case 2:
                        user2 = _a.sent();
                        if (!user1)
                            return [2 /*return*/, false];
                        if (!!user2) return [3 /*break*/, 5];
                        user1.Wallet -= Amount;
                        newUser = new EconomySchema({
                            Guild: Guild,
                            User: user2,
                            Wallet: Amount,
                            Bank: 0
                        });
                        return [4 /*yield*/, newUser.save().catch(function (err) { return console.error("[MongoDB-Error]" + err); })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, user1.save().catch(function (err) { return console.error("[MongoDB-Error]" + err); })];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        user1.Wallet -= Amount;
                        user2.Wallet += Amount;
                        return [4 /*yield*/, user1.save().catch(function (err) { return console.error("[MongoDB-Error]" + err); })];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, user2.save().catch(function (err) { return console.error("[MongoDB-Error]" + err); })];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Economy;
}());
exports.Economy = Economy;
