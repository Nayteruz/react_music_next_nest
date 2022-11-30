import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id:'1', name:'Track 1', artist:'Artist 1', text:'text of song 1', listens:5, audio:'http://localhost:7000/audio/71bdcf75-b7a9-41a5-b036-3f44ac072f0e.mp3', comments:[], picture:'http://localhost:7000/image/3a7dd74d-657a-4ba9-ab85-6420e3fec493.jpg'},
        {_id:'2', name:'Track 2', artist:'Artist 2', text:'text of song 2', listens:5, audio:'http://localhost:7000/audio/71bdcf75-b7a9-41a5-b036-3f44ac072f0e.mp3', comments:[], picture:'http://localhost:7000/image/3a7dd74d-657a-4ba9-ab85-6420e3fec493.jpg'},
        {_id:'3', name:'Track 3', artist:'Artist 3', text:'text of song 3', listens:5, audio:'http://localhost:7000/audio/71bdcf75-b7a9-41a5-b036-3f44ac072f0e.mp3', comments:[], picture:'http://localhost:7000/image/3a7dd74d-657a-4ba9-ab85-6420e3fec493.jpg'},
    ];

    return (
        <MainLayout>
            <Grid container justifyContent="center">
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('/tracks/create')}>
                                Загрузить
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Index;