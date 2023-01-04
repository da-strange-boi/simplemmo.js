// https://api.simple-mmo.com/v1/player/info/[player_id]
interface PlayerInformationResponse {
    id: number,
    name: string,
    level: number,
    avatar: string,
    motto: string,
    profile_number: string,
    exp: number,
    last_activity: number,
    gold: number,
    steps: number,
    npc_kills: number,
    user_kills: number,
    quests_complete: number,
    quests_performed: number,
    dex: number,
    def: number,
    str: number,
    bonus_dex: number,
    bonus_def: number,
    bonus_str: number,
    hp: number,
    max_hp: number,
    safeMode: number,
    background: number,
    membership: number,
    tasks_completed: number,
    boss_kills: number,
    market_trades: number,
    reputation: number,
    creation_date: string,
    bounties_completed: number,
    dailies_unlocked: number,
    chests_opened: number,
    current_location: {
        name: string,
        id: number
    },
    guild: {
        id: number,
        name: string
    }
}

// https://api.simple-mmo.com/v1/player/me
interface YourInformationResponse extends PlayerInformationResponse {
    diamonds: number,
    quest_points: number,
    maximum_quest_points: number,
    energy: number,
    maximum_energy: number,
    total_tasks_complete: number,
    task_complete_today: string,
    safe_mode_time: string
}

// https://api.simple-mmo.com/v1/player/equipment/[player_id]
interface PlayerEquippedItemsResponse {
    item_id: number,
    name: string,
    type: string,
    description: string,
    stat1: string,
    stat1modifier: number,
    stat2: string,
    stat2modifier: number,
    stat3: string,
    stat3modifier: number,
}

// https://api.simple-mmo.com/v1/player/skills/[player_id]
interface PlayerSkillsResponse {
    skill: string,
    level: number,
    exp: number
}

// https://api.simple-mmo.com/v1/diamond-market
interface DiamondMarketResponse {
    seller: {
        id: number,
        name: string
    },
    diamond_amount_at_start: number,
    diamonds_remaining: number,
    price_per_diamond: number,
    last_updated: string,
    listing_created: string
}

interface Donator {
    user_id: number,
    amount: number,
    type: string,
    created_at: string
}

// https://api.simple-mmo.com/v1/orphanage
interface OrphanageResponse {
    current_amount: number,
    max_amount: number,
    recent_donators: Donator[]
}

// https://api.simple-mmo.com/v1/worldboss/all
interface WorldBossesResponse {
    id: number,
    name: string,
    avatar: string,
    level: number,
    god: number,
    str: number,
    def: number,
    dex: number,
    current_hp: number,
    max_hp: number,
    enable_time: number
}

// https://api.simple-mmo.com/v1/item/info/[item_id]
interface ItemInformationResponse {
    id: number,
    name: string,
    type: string,
    description: string,
    equipable: string,
    level: number,
    rarity: string,
    value: number,
    stat1: string,
    stat1modifier: number,
    stat2: string,
    stat2modifier: number,
    stat3: string,
    stat3modifier: number,
    custom_item: number,
    tradable: number,
    locked: number,
    circulation: number,
    market: {
        low: number,
        high: number
    },
    image_url: string
}

// https://api.simple-mmo.com/v1/guilds/all
interface ListOfGuildsResponse {
    current_page: number,
    data: GuildInformationResponse[],
    first_page_url: string,
    from: number,
    next_page_url: string,
    path: string,
    per_page: number,
    prev_page_url: string|null,
    to: number
}

// https://api.simple-mmo.com/v1/guilds/info/[guild_id]
interface GuildInformationResponse {
    id: number,
    name: string,
    tag: string,
    owner: number,
    exp: number,
    passive: number,
    icon: string,
    legacy_exp: number,
    member_count: number|undefined,
    eligible_for_guild_war: boolean|undefined
}

// https://api.simple-mmo.com/v1/guilds/members/[guild_id]
interface GuildMembersResponse {
    user_id: number,
    position: string,
    name: string,
    level: number,
    safe_mode: number,
    last_activity: number,
    current_hp: number,
    max_hp: number,
    steps: number,
    npc_kills: number,
    user_kills: number
}

// https://api.simple-mmo.com/v1/guilds/wars/[guild_id]/[status_id]
type GuildWarStatus = "ongoing"|"hold"|"end"
interface GuildWarsResponse {
    guild_1: {
        id: number,
        name: string,
        kills: number
    },
    guild_2: {
        id: number,
        name: string,
        kills: number
    },
    status: GuildWarStatus
}

interface SimpleMMOError {
    error: string
}

export {
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
};
