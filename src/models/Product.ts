import { getModelForClass, prop, mongoose, plugin, Ref } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import MongooseDelete = require('mongoose-delete');

import { Category } from './Category';
const slug = require('mongoose-slug-generator');

interface Props extends MongooseDelete.SoftDeleteDocument {
    title: string;
    description: string;
    slug: string;
}

@plugin(MongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
})
export class Product extends TimeStamps {
    @prop({ required: true })
    title!: string;

    @prop({ required: true })
    description!: string;

    @prop({ slug: 'title' })
    slug?: string;

    @prop({ required: true, ref: () => Category })
    category?: Ref<Category>;
}

mongoose.plugin(slug);

export const ProductModel = getModelForClass(Product as MongooseDelete.SoftDeleteModel<Props>);
