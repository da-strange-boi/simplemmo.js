"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleMMO = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const url_1 = require("url");
class SimpleMMO {
    apiKey;
    auth;
    baseUri = 'https://api.simple-mmo.com/v1/';
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.auth = new url_1.URLSearchParams(`api_key=${this.apiKey}`);
    }
    async playerInformation(playerID) {
        return node_fetch_1.default(`${this.baseUri}player/info/${playerID}`, {
            method: 'POST',
            body: this.auth
        })
            .then(res => res.json())
            .then(res => {
            if (res.error) {
                return res;
            }
            return res;
        });
    }
    async playerEquippedItems(playerID) {
        return node_fetch_1.default(`${this.baseUri}player/equipment/${playerID}`, {
            method: 'POST',
            body: this.auth
        })
            .then(res => res.json())
            .then(res => {
            if (res.error) {
                return res;
            }
            return res;
        });
    }
    async playerSkills(playerID) {
        return node_fetch_1.default(`${this.baseUri}player/skills/${playerID}`, {
            method: 'POST',
            body: this.auth
        })
            .then(res => res.json())
            .then(res => {
            if (res.error) {
                return res;
            }
            return res;
        });
    }
    async worldBosses() {
        return node_fetch_1.default(`${this.baseUri}worldboss/all`, {
            method: 'POST',
            body: this.auth
        })
            .then(res => res.json())
            .then(res => {
            if (res.error) {
                return res;
            }
            return res;
        });
    }
    async itemInformation(itemID) {
        return node_fetch_1.default(`${this.baseUri}item/info/${itemID}`, {
            method: 'POST',
            body: this.auth
        })
            .then(res => res.json())
            .then(res => {
            if (res.error) {
                return res;
            }
            return res;
        });
    }
    async listOfGuilds(page) {
        return node_fetch_1.default(`${this.baseUri}guilds/all?page=${page || 1}`, {
            method: 'POST',
            body: this.auth
        })
            .then(res => res.json())
            .then(res => {
            if (res.error) {
                return res;
            }
            return res;
        });
    }
    async guildInformation(guildID) {
        return node_fetch_1.default(`${this.baseUri}guilds/info/${guildID}`, {
            method: 'POST',
            body: this.auth
        })
            .then(res => res.json())
            .then(res => {
            if (res.error) {
                return res;
            }
            return res;
        });
    }
    async guildMembers(guildID) {
        return node_fetch_1.default(`${this.baseUri}guilds/members/${guildID}`, {
            method: 'POST',
            body: this.auth
        })
            .then(res => res.json())
            .then(res => {
            if (res.error) {
                return res;
            }
            return res;
        });
    }
}
exports.SimpleMMO = SimpleMMO;
