import { tokenProvider } from '@/actions/stream.actions';
import { useUser } from '@clerk/nextjs';
import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    User,
  } from '@stream-io/video-react-sdk';
  
import { ReactNode, useEffect, useState } from 'react';


  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

  
  export const StreamVideoProvider = ({children} : {
    children:ReactNode })  => {

        const[videoClient, setVideoClient] = useState<StreamVideoClient>()

        const {user, isLoaded} = useUser();

        useEffect(() => {
            if (!isLoaded || !user)    return;

            if (!apiKey) throw new Error('Stream API Key missing');

            const client = new StreamVideoClient({
                apiKey, 
                user: {
                    id:user?. id,
                    name: user?.username || user?.id,
                    image: user?.imageUrl
                },

                tokenProvider
            }) 
            
            setVideoClient(client);
            
        }, [user, isLoaded]);

    return (
      <StreamVideo client={videoClient}>



      </StreamVideo>
    );
  };