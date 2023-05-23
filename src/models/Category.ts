import { prop, getModelForClass, plugin } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import MongooseDelete = require('mongoose-delete');

interface Props extends MongooseDelete.SoftDeleteDocument {
    title: string;
    colors: string[];
    sizes: string[];
}

@plugin(MongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
})
export class Category extends TimeStamps {
    @prop({ required: true })
    title!: string;

    @prop({ required: true, type: () => [String] })
    colors!: string[];

    @prop({ required: true, type: () => [String] })
    sizes!: string[];
}

export const CategoryModel = getModelForClass(Category as MongooseDelete.SoftDeleteModel<Props>);
