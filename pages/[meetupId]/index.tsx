import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { MeetupType } from '..'
import Details from '../../components/Details'
import { MongoClient , ObjectId } from 'mongodb'

const MEETUP = {
  image: '/berlin.jpeg',
  id: '1',
  title: 'First meetup',
  address: 'Vygovskogo s.79/67',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsa modi harum, amet debitis consequatur iure quaerat nesciunt unde impedit dolore mollitia consectetur vel exercitationem sunt provident explicabo velit nihil.',
}

const MeetupPage: React.FC<{ meetup: MeetupType }> = ({ meetup }) => {
  return (
    <>
      <Head>
        <title>Details</title>
      </Head>
      <Details {...meetup} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://attachedsoul148:akB8qzwEcqzbXug0@cluster0.9d3i7hl.mongodb.net/meetups?retryWrites=true&w=majority',
  )
  const db = client.db()

  const meetupsCollection = db.collection('meetups') //елементи колекції це js об'єкти

  const meetups = await meetupsCollection.find().toArray()

  const paths = meetups.map((meetup) => ({ params: { meetupId: meetup._id.toString() } }))

  client.close()
  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.meetupId
  const client = await MongoClient.connect(
    'mongodb+srv://attachedsoul148:akB8qzwEcqzbXug0@cluster0.9d3i7hl.mongodb.net/meetups?retryWrites=true&w=majority',
  )
  const db = client.db()

  const meetupsCollection = db.collection('meetups') //елементи колекції це js об'єкти

  const meetup = await meetupsCollection.findOne({ _id : ObjectId(id) })
  client.close()
  return {
    props: {
      meetup: {
        title: meetup?.title,
        address: meetup?.address,
        id: meetup?._id.toString(),
        image: meetup?.image,
        description: meetup?.description,
      },
    },
  }
}

export default MeetupPage
