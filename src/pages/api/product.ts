import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { name, price } = req.body;
    const product = await prisma.product.create({
      data: {
        name: name,
        price: price,
      },
    });
    return res.status(200).json(product);
  }
}
