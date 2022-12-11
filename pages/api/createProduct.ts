import prisma from "db";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    success: boolean;
    info?: any;
};


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    let { name, img, price } = req.body;

    if (!name || !img || !price) {
        res.status(200).json({ success: false });
    }

    price = parseInt(price);

    await prisma.product.create({
        data: {
            name,
            img,
            price
        }
    });

    res.status(200).json({ success: true });
}
