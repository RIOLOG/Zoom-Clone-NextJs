import React, {  ReactNode } from 'react'
import StreamVideoClient from '../../providers/StreamClientProvider'


const RootLayout = ({children} : {children: ReactNode}) => {
  return (
    <main>
      <StreamVideoClient>
        {children}
      </StreamVideoClient>
    </main>
  )
}

export default RootLayout