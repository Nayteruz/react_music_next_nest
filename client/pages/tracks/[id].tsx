import React from 'react';
import {ITrack} from "../../types/track";
import MainLayout from "../../layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";

const TrackPage = () => {

    const router = useRouter();

    const track: ITrack = {
        _id: '1',
        name: 'Track 1',
        artist: 'Artist 1',
        text: 'text of song 1',
        listens: 5,
        audio: 'http://localhost:7000/audio/71bdcf75-b7a9-41a5-b036-3f44ac072f0e.mp3',
        comments: [],
        picture: 'http://localhost:7000/image/3a7dd74d-657a-4ba9-ab85-6420e3fec493.jpg'
    };

    return (
        <MainLayout>
            <Button
                variant="outlined"
                style={{fontSize: 24}}
                onClick={() => router.push('/tracks')}
            >
                К списку
            </Button>
            <Grid
                container
                style={{margin:'20px 0'}}
            >
                <img src={track.picture} width={200} height={200} alt=""/>
                <div style={{marginLeft:30}}>
                    <h1>Название трека - {track.name}</h1>
                    <h2>Исполнитель - {track.artist}</h2>
                    <h2>Прослушиваний - {track.listens}</h2>
                </div>
            </Grid>
            <h2>Слова к песне</h2>
            <p>{track.text}</p>
            <h3>Комментарии</h3>
            <Grid
                container
            >
                <TextField
                    placeholder={"Ваше имя"}
                    fullWidth
                />
                <TextField
                    placeholder={"Комментарий"}
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment=>
                    <div>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
};

export default TrackPage;