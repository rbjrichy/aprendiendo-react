import { Fragment } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollwCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Durán',
        isFollowing: true,
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false,
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hez',
        isFollowing: true,
    },
    {
        userName: 'TMChein',
        name: 'Paco Tomas',
        isFollowing: false,
    },
]

export function App () {



    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFolowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}