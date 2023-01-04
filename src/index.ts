import axios from 'axios';
import { URLSearchParams } from 'url';
import {
    PlayerInformationResponse,
    YourInformationResponse,
    PlayerEquippedItemsResponse,
    PlayerSkillsResponse,
    DiamondMarketResponse,
    OrphanageResponse,
    WorldBossesResponse,
    GuildInformationResponse,
    ItemInformationResponse,
    ListOfGuildsResponse,
    GuildMembersResponse,
    GuildWarsResponse,
    SimpleMMOError
} from './types';

const API_BASE = "https://api.simple-mmo.com/v1";

class SimpleMMO {
    apiKey: string;
    auth: URLSearchParams;

    /**
     * 
     * @param apiKey 
     */
    constructor (apiKey: string) {
      this.apiKey = apiKey;
      this.auth = new URLSearchParams(`api_key=${this.apiKey}`);
    }

    /**
     * 
     * @param error 
     * @returns 
     */
    handleError(error: unknown): SimpleMMOError {
        if (axios.isAxiosError(error)) {
            return error.response?.data as SimpleMMOError;
        } else {
            throw error;
        }
    }

    /**
     * 
     * @param playerID 
     * @returns 
     */
    async playerInformation(playerID: number | string): Promise<PlayerInformationResponse|SimpleMMOError> {
        try {
            const res = await axios.post(API_BASE + `/player/info/${playerID}`, this.auth);
            const data: PlayerInformationResponse = res.data;
            return data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    /**
     * 
     * @returns 
     */
    async yourInformation(): Promise<YourInformationResponse|SimpleMMOError> {
        try {
            const res = await axios.post(API_BASE + `/player/me`, this.auth);
            const data: YourInformationResponse = res.data;
            return data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    /**
     * 
     * @param playerID 
     * @returns 
     */
    async playerEquippedItems(playerID: number | string): Promise<PlayerEquippedItemsResponse[]|SimpleMMOError> {
        try {
            const res = await axios.post(API_BASE + `/player/equipment/${playerID}`, this.auth);
            const data: PlayerEquippedItemsResponse[] = res.data;
            return data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    /**
     * 
     * @param playerID 
     * @returns 
     */
    async playerSkills(playerID: number | string): Promise<PlayerSkillsResponse[]|SimpleMMOError> {
        try {
            const res = await axios.post(API_BASE + `/player/skills/${playerID}`, this.auth);
            const data: PlayerSkillsResponse[] = res.data;
            return data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    /**
     * 
     * @returns 
     */
    async diamondMarket(): Promise<DiamondMarketResponse[]|SimpleMMOError> {
        try {
            const res = await axios.post(API_BASE + `/diamond-market`, this.auth);
            const data: DiamondMarketResponse[] = res.data;
            return data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    /**
     * 
     * @returns 
     */
    async orphanage(): Promise<OrphanageResponse[]|SimpleMMOError> {
        try {
            const res = await axios.post(API_BASE + `/diamond-market`, this.auth);
            const data: OrphanageResponse[] = res.data;
            return data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    /**
     * 
     * @returns 
     */
    async worldBosses(): Promise<WorldBossesResponse[]|SimpleMMOError> {
        try {
            const res = await axios.post(API_BASE + `/worldboss/all`, this.auth);
            const data: WorldBossesResponse[] = res.data;
            return data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    /**
     * 
     * @param itemID 
     * @returns 
     */
    async itemInformation(itemID: number|string): Promise<ItemInformationResponse|SimpleMMOError> {
        try {
            const res = await axios.post(API_BASE + `/item/info/${itemID}`, this.auth);
            const data: ItemInformationResponse = res.data;
            return data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    /**
     * 
     * @param page 
     * @returns 
     */
    async listOfGuilds(page?: number|string): Promise<ListOfGuildsResponse[]|SimpleMMOError> {
        try {
            const res = await axios.post(API_BASE + `/guilds/all?page=${page || 1}}`, this.auth);
            const data: ListOfGuildsResponse[] = res.data;
            return data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    /**
     * 
     * @param guildID 
     * @returns 
     */
    async guildInformation(guildID: number|string): Promise<GuildInformationResponse|SimpleMMOError> {
        try {
            const res = await axios.post(API_BASE + `/guilds/info/${guildID}`, this.auth);
            const data: GuildInformationResponse = res.data;
            return data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    /**
     * 
     * @param guildID 
     * @returns 
     */
    async guildMembers(guildID: number|string): Promise<GuildMembersResponse[]|SimpleMMOError> {
        try {
            const res = await axios.post(API_BASE + `/guilds/members/${guildID}`, this.auth);
            const data: GuildMembersResponse[] = res.data;
            return data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    /**
     * 
     * @param guildID 
     * @returns 
     */
    async guildWars(guildID: number|string): Promise<GuildWarsResponse[]|SimpleMMOError> {
        try {
            const res = await axios.post(API_BASE + `/guilds/wars/${guildID}/4`, this.auth);
            const data: GuildWarsResponse[] = res.data;
            return data;
        } catch (error) {
            return this.handleError(error);
        }
    }
}

export { SimpleMMO }
