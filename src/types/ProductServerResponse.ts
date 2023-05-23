import { prop } from '@typegoose/typegoose';
import { IServerResponse } from './ServerResponse';
import { Product } from '../models/Product';
import { Response } from 'express';

export class ProductServerResponse extends IServerResponse {
    code: number;
    res: Response;
    success: boolean;
    message?: string;

    @prop({ required: true })
    product?: Product[] | null | undefined;
}
