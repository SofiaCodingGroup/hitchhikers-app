import * as express from 'express';
import * as redis from 'redis';
import Encryption from '../utilities/encryption'

export function nameList(app: express.Application) {

    /**
     * Get user from database.
     * @static
     */
    app.get('/api/get-user',
        (req: any, res: any, next: any) => {

          let RedisClient = redis.createClient()

          RedisClient.smembers(req.body.id,
            (err:any, replies:any) => {

              let User
              console.log(`
               Reply length: ${replies.length}.
               Reply: ${replies}.`);
              User = replies
              if(User){
                res.json(User);
              }
                else {
                res.send("No such user!")
              }


            });

        });

    /**
     * Set user and user info into database.
     * @database
     */
    app.post('/api/add-user',
        (req: any, res: any, next: any) => {

          let encryption = new Encryption();
          let salt = encryption.generateSalt();
          let encryptedPass = encryption.generateHashedPassword(salt,)

          let newUser;
          let userId = req.body.id
          let userName = req.body.name
          let userPicURL = req.body.picture.data.url;
          let authToke = req.body.

           let RedisClient = redis.createClient()

          RedisClient([userId, userName, userPicURL],
            function(err, reply){
              console.log(reply)
            }
          )


           RedisClient.smembers(userId,
             (err:any, replies:any) => {
               console.log(`
               Reply length: ${replies.length}.
               Reply: ${replies}.`);
               newUser = replies;

               res.json(newUser);
           });

           RedisClient.quit();

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
