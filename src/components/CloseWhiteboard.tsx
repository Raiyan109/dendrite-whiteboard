import React from 'react'
import { Button } from './ui/button'

type Props = {}

const CloseWhiteboard = (props: Props) => {
    return (
        <div>
            <Button variant={'destructive'}>
                Close Whiteboard
            </Button>
        </div>
    )
}

export default CloseWhiteboard