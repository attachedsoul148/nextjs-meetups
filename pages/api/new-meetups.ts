import { MongoClient } from 'mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body

    try {
      const client = await MongoClient.connect(
        'mongodb+srv://attachedsoul148:akB8qzwEcqzbXug0@cluster0.9d3i7hl.mongodb.net/meetups?retryWrites=true&w=majority',
      )
      const db = client.db()

      const meetupsCollection = db.collection('meetups') //елементи колекції це js об'єкти

      const result = await meetupsCollection.insertOne(data)
      console.log(result)

      client.close()

      res.status(201).json({ message: 'Meetup inserted' })
    } catch {
      res.status(404).json({ message: "Meetup didn't insert" })
    }
  }
}
export default handler
