import crypto = require('crypto');

export function generateSalt(){
  return crypto.randomBytes(128).toString('base64')
}

export function generateHashedPassword(salt: string, pass: string){
  let hmac = crypto.createHmac('sha1', salt);
  return hmac.update(pass).digest('hex')
}



