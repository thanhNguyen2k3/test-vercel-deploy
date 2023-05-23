import { prop } from '@typegoose/typegoose';

export class IServerResponse {
    @prop({ required: true })
    code!: number;

    @prop({ required: true })
    success!: boolean;

    message?: string;
}
