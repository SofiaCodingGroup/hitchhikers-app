import * as redis from 'redis';

/**
 * Init Names List.
 */
export function Init() {

    let RedisClient = redis.createClient();

    RedisClient.quit();
}
