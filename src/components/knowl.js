import React, { Fragment } from 'react'
import GameStack from './GameStack'
import MobileStack from './MobileStack'
import Stack from './Stack'

const Know = () => {
    return (
        <Fragment>
            <Stack />
            <MobileStack />
            <GameStack />
        </Fragment>
    )
}

export default Know
