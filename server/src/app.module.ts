import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path'


@Module({
    imports: [
        ConfigModule.forRoot(),
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
        MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`),
        TrackModule,
        FileModule

    ]
})
export class AppModule {
}