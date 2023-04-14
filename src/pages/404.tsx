import { NextPage } from 'next'
import { Error } from '@/components'
import { Fragment } from 'react'

const Custom404: NextPage = () => {
    return (
        <Fragment>
            <Error />
        </Fragment>
    )
}

export default Custom404