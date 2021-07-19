/// <reference types="node" />
import { URLSearchParams } from 'url';
interface PlayerInformationResponse {
    id: number;
    name: string;
    level: number;
    motto: string;
    profile_number: string;
    exp: number;
    gold: number;
    steps: number;
    npc_kills: number;
    user_kills: number;
    quests_complete: number;
    dex: number;
    def: number;
    str: number;
    bonus_dex: number;
    bonus_def: number;
    bonus_str: number;
    hp: number;
    max_hp: number;
    energy?: number;
    max_energy?: number;
    safeMode: number;
    safeModeTime: string | null;
    background: number;
    membership: number;
    guild?: {
        id: number;
        name: string;
    };
}
interface PlayerEquippedItems {
    item_id: number;
    name: string;
    type: string;
    description: string;
    stat1: string;
    stat1modifier: number;
    stat2: string;
    stat2modifier: number;
    stat3: string;
    stat4modifier: number;
}
interface PlayerSkillsResponse {
    skill: string;
    level: number;
    exp: number;
}
interface WorldBosses {
    id: number;
    name: string;
    avatar: string;
    level: number;
    god: number;
    str: number;
    def: number;
    dex: number;
    current_hp: number;
    max_hp: number;
    enable_time: number;
}
interface GuildInformation {
    id: number;
    name: string;
    tag: string;
    owner: number;
    exp: number;
    passive: number;
    icon: string;
}
interface ItemInformation {
    id: number;
    name: string;
    type: string;
    description: string;
    equipable: string;
    level: number;
    rarity: string;
    value: number;
    stat1: string;
    stat1modifier: number;
    stat2: string;
    stat2modifier: number;
    stat3: string;
    stat4modifier: number;
    custom_item: number;
    tradable: number;
    locked: number;
}
interface ListOfGuilds {
    current_page: number;
    data: GuildInformation[];
    first_page_url: string;
    from: number;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
}
interface GuildMember {
    user_id: number;
    position: string;
    name: string;
    level: number;
    safe_mode: number;
    current_hp: number;
    max_hp: number;
}
interface SimpleMMOError {
    error: string;
}
declare class SimpleMMO {
    apiKey: string;
    auth: URLSearchParams;
    baseUri: string;
    constructor(apiKey: string);
    playerInformation(playerID: number | string): Promise<PlayerInformationResponse | SimpleMMOError>;
    playerEquippedItems(playerID: number | string): Promise<PlayerEquippedItems[] | SimpleMMOError>;
    playerSkills(playerID: number | string): Promise<PlayerSkillsResponse[] | SimpleMMOError>;
    worldBosses(): Promise<WorldBosses[] | SimpleMMOError>;
    itemInformation(itemID: number | string): Promise<ItemInformation | SimpleMMOError>;
    listOfGuilds(page?: number | string): Promise<ListOfGuilds | SimpleMMOError>;
    guildInformation(guildID: number | string): Promise<GuildInformation | SimpleMMOError>;
    guildMembers(guildID: number | string): Promise<GuildMember[] | SimpleMMOError>;
}
export { SimpleMMO };
