import prisma from "db";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    success: boolean;
    data?: any;
};


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const products = await prisma.product.findMany();
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(200).json({ success: false });
    }
}
