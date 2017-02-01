import crypto = require('crypto');

export class Encryption {
  generateSalt() {
    return crypto.randomBytes(128).toString('base64')
  }
  generateHashedPassword(salt: string, pass: string) {
    let hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pass).digest('hex')
  }

}


