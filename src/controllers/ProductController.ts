import { ProductModel } from '../models/Product';
import { Request, Response } from 'express';

export const getAll = async (req: Request, res: Response) => {
    try {
        let filter = {};

        if (req.query.categories) {
            filter = { category: (req.query.categories as string).split(',') };
        }

        const products = await ProductModel.find(filter).populate('category');

        if (!products) {
            return res.status(400).json({ message: 'Không tìm thấy sản phẩm nào' });
        }

        if (products.length === 0) {
            return res.status(201).json({ message: 'Bạn chưa có sản phẩm nào' });
        }

        return res.status(200).json({
            data: products,
            messagge: 'Đã tìm thấy sản phẩm',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Lỗi server');
    }
};

export const getOne = async (req: Request, res: Response) => {
    try {
        const product = await ProductModel.findById(req.params.id).populate('category');

        if (!product) {
            return res.status(400).json({
                message: 'Không tìm thấy sản phẩm',
            });
        }

        return res.status(200).json({
            data: product,
            message: 'Đã tìm thấy sản phẩm',
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json('Lỗi server');
    }
};

export const post = async (req: Request, res: Response) => {
    try {
        // const { title, description } = req.body;

        const product = await ProductModel.create(req.body);

        if (!product) {
            return res.status(400).json({
                message: 'Không thể tạo sản phẩm',
            });
        }

        return res.status(200).json({
            data: product,
            message: 'Tạo sản phẩm thành công',
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json('Lỗi server');
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        // const { title, description } = req.body;

        const product = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!product) {
            return res.status(400).json({
                data: product,
                message: 'Cập nhật sản phẩm thất bại',
            });
        }

        return res.status(200).json({
            data: product,
            message: 'Đã cập nhật sản phẩm thành công',
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json('Lỗi server');
    }
};

export const softDelete = async (req: Request, res: Response) => {
    try {
        const productDeleted = await ProductModel.delete({ _id: req.params.id });

        if (!productDeleted) {
            return res.status(400).json({
                message: 'Xóa sản phẩm không thành công',
            });
        }

        return res.status(200).json({
            message: 'Sản phẩm đã được thêm vào thùng rác của bạn',
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json('Lỗi server');
    }
};

export const deleteForce = async (req: Request, res: Response) => {
    try {
        const productDeletedForce = await ProductModel.deleteOne({ _id: req.params.id });

        if (!productDeletedForce) {
            return res.status(400).json({
                message: 'Xóa sản phẩm khỏi thùng rác thất bại',
            });
        }

        return res.status(200).json({
            message: 'Xóa sản phẩm khỏi thùng rác thành công',
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json('Lỗi server');
    }
};

export const restore = async (req: Request, res: Response) => {
    try {
        const productRestore = await ProductModel.restore({ _id: req.params.id });

        if (!productRestore) {
            return res.status(400).json({
                message: 'Khôi phục sản phẩm thất bại',
            });
        }

        return res.status(200).json({
            message: 'Khôi phục sản phẩm thành công',
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json('Lỗi server');
    }
};
