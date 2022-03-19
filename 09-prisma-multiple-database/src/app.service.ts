import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaService as PrismaService2 } from './prisma2.service';
// import { PrismaService as KeyDatabaseService } from './keydatabase.service';
import { Account } from '@prisma/client';
// import { Challenge } from '@internal/prisma/client';
import * as crypto from 'crypto'
import { PrismaClient } from '@prisma/client'
import { ObjectId } from 'bson'

const mongoPrisma = new PrismaClient()

@Injectable()
export class AppService {
  constructor(
    // private readonly prisma: PrismaService,
    // private readonly prisma2: PrismaService2,
    // private readonly keyDatabase: KeyDatabaseService,
  ) { }

  // async getAccounts(): Promise<Account[]> {
  //   return this.prisma.account.findMany();
  // }

  // async getChallenges(): Promise<Challenge[]> {
  //   return this.prisma2.challenge.findMany()
  // }

  // async getAll(): Promise<any> {
  //   const account: Account[] = await this.prisma.account.findMany()
  //   return {
  //     "account": account,
  //     "challenge": await this.prisma2.challenge.findMany()
  //   }
  // }

  async setInitServerKey(): Promise<any> {
    const { publicKey, privateKey } = await crypto.generateKeyPairSync("rsa", {
      modulusLength: 2048,
      // mgf1HashAlgorithm:''
      publicKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
        // cipher: 'tee',
      },
      privateKeyEncoding: {
        type: 'pkcs1',
        format: 'pem',
        cipher: 'tee-client',
        passphrase: 'tee2-server'
        // cipher: 'aes-256-cbc',
        // passphrase: 'top secret'
      }
    })
    // console.log('publicKey', publicKey)
    // console.log('privateKey', privateKey)
    // const mongo = await mongoPrisma.key.create({
    //   data: {
    //     id: '1',
    //     public_key: publicKey,
    //     private_key: privateKey
    //   }
    // })
    // console.log('mongo', mongo)
    // await this.keyDatabase.key.create({
    //   data: {
    //     private_key: '',
    //     public_key: '',
    //     id: ''
    //   }
    // })
    // const database = await this.keyDatabase.key.create({
    //   data: {
    //     public_key: `${publicKey}`,
    //     private_key: `${privateKey}`,
    //     user_name: 'http://localhost:8000'
    //   }
    // })
    // console.log('database', database)
    // console.log('publicKey', publicKey.export({ format: 'jwk' }))
    // console.log('privateKey', privateKey.export({ format: 'jwk' }))
    const data = "my secret data";
    const encryptedData = crypto.publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
      },
      // We convert the data string to a buffer using `Buffer.from`
      Buffer.from(data)
    );

    // The encrypted data is in the form of bytes, so we print it in base64 format
    // so that it's displayed in a more readable form
    console.log("encypted data: ", encryptedData.toString("base64"));

    const decryptedData = crypto.privateDecrypt(
      {
        key: privateKey,
        // In order to decrypt the data, we need to specify the
        // same hashing function and padding scheme that we used to
        // encrypt the data in the previous step
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
      },
      encryptedData
    );

    // The decrypted data is of the Buffer type, which we can convert to a
    // string to reveal the original data
    console.log("decrypted data: ", decryptedData.toString());

    return {
      "publicKey": publicKey,
      "privateKey": privateKey
    }
  }
}
