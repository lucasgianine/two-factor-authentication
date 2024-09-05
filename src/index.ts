import * as speakeasy from 'speakeasy'

const result = speakeasy.generateSecret()

const hex = Buffer.from(result.ascii).toString('hex')

console.log(hex)
