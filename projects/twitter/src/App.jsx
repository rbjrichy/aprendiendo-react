import { Fragment } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollwCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing={true} userName="midudev"> 
                Miguel Angel Durán
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="pherald" > 
                Pablo Hernandez
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName="elonmusk" > 
                Elon Musk
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName="vxnder" > 
                Vanderhart
            </TwitterFollowCard>
        </section>
    )
}