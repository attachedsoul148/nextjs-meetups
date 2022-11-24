import Head from 'next/head'
import Image from 'next/image'
import { MeetupItem } from '../components/MeetupItem'
import axios from 'axios'
import { MongoClient } from 'mongodb'

export interface MeetupType {
  id: string
  image: string
  title: string
  address: string
  description: string
}

const MEETUP = {
  image: '/berlin.jpeg',
  id: '1',
  title: 'First meetup',
  address: 'Vygovskogo s.79/67',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsa modi harum, amet debitis consequatur iure quaerat nesciunt unde impedit dolore mollitia consectetur vel exercitationem sunt provident explicabo velit nihil.',
}

const Home: React.FC<{ meetups: MeetupType[] }> = ({ meetups }) => {
  return (
    <div className='meetup-list'>
      <Head>
        <title>Meetups</title>
      </Head>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} {...meetup} />
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://attachedsoul148:akB8qzwEcqzbXug0@cluster0.9d3i7hl.mongodb.net/meetups?retryWrites=true&w=majority',
  )
  const db = client.db()

  const meetupsCollection = db.collection('meetups') //елементи колекції це js об'єкти

  const meetups = await meetupsCollection.find().toArray()

  client.close()
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        id: meetup._id.toString(),
        image: meetup.image,
        description: meetup.description,
      })),
    },
  }
}
export default Home
