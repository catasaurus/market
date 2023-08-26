import { createClient, RedisClientType } from "redis";

export default async function settle(client: RedisClientType): Promise<void> {
 console.log(client) 
}

void settle(createClient())