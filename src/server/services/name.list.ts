import * as express from 'express';
import * as redis from 'redis';

export function nameList(app: express.Application) {

    /**
     * Get user from database.
     * @static
     */
    app.post('/api/get-user',
        (req: any, res: any, next: any) => {
            //TODO implement logic
        });

    /**
     * Set user and user info into database.
     * @database
     */
    app.post('/api/add-user',
        (req: any, res: any, next: any) => {
            //TODO implement logic
            // let RedisClient = redis.createClient(),
            //     nameList: string[] = [];
            //
            // RedisClient.smembers('name-list',
            //   (err:any, replies:any) => {
            //     console.log(`
            //     Reply length: ${replies.length}.
            //     Reply: ${replies}.`);
            //     nameList = replies;
            //     res.json(nameList);
            // });
            //
            // RedisClient.quit();
        });

}
