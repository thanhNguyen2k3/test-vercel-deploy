import { Request, Response } from 'express';
import { CategoryModel } from '../models/Category';
import { Context } from 'src/types/Context';

export const getAll = async ({ res }: Context) => {
    try {
        const categories = await CategoryModel.find();

        if (categories.length === 0) {
            return res.status(200).json({
                message: 'Bạn chưa có loại sản phẩm nào',
            });
        }

        return res.status(200).json({
            categories: categories,
            message: 'Đã tìm thấy loại sản phẩm',
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json('Lỗi server');
    }
};

export const getOne = async (req: Request, res: Response) => {
    try {
        const category = await CategoryModel.findById(req.params.id);

        if (!category) {
            return res.status(400).json({
                message: 'Không tìm thấy loại này',
            });
        }

        return res.status(200).json({
            categories: category,
            message: 'Đã tìm thấy loại sản phẩm',
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json('Lỗi server');
    }
};

export const post = async (req: Request, res: Response) => {
    try {
        const category = await CategoryModel.create(req.body);

        if (!category) {
            return res.status(400).json({
                message: 'Thêm loại sản phẩm không thành công',
            });
        }

        return res.status(200).json({
            category: category,
            message: 'Đã thêm loại thành công',
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json('Lỗi server');
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        const category = await CategoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!category) {
            return res.status(400).json({
                message: 'Không thể cập nhật loại sản phẩm',
            });
        }

        return res.status(200).json({
            category: category,
            message: 'Cập nhật loại thành công',
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json('Lỗi server');
    }
};

export const softDelete = async (req: Request, res: Response) => {
    try {
        const categoryDelete = await CategoryModel.delete({ _id: req.params.id });

        if (!categoryDelete) {
            return res.status(400).json({
                message: 'Xóa loại sản phẩm không thành công',
            });
        }

        return res.status(200).json({
            message: 'Loại này đã được thêm vào thùng rác của bạn',
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json('Lỗi server');
    }
};

export const deleteForce = async (req: Request, res: Response) => {
    try {
        const categoryDeletedForce = await CategoryModel.deleteOne({ _id: req.params.id });

        if (!categoryDeletedForce) {
            return res.status(400).json({
                message: 'Xóa loại sản phẩm khỏi thùng rác thất bại',
            });
        }

        return res.status(200).json({
            message: 'Xóa loại sản phẩm khỏi thùng rác thành công',
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json('Lỗi server');
    }
};

export const restore = async (req: Request, res: Response) => {
    try {
        const categoryRestore = await CategoryModel.restore({ _id: req.params.id });

        if (!categoryRestore) {
            return res.status(400).json({
                message: 'Khôi phục loại sản phẩm thất bại',
            });
        }

        return res.status(200).json({
            message: 'Khôi phục loại sản phẩm thành công',
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json('Lỗi server');
    }
};
