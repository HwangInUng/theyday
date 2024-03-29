import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const product = await prisma.product.findMany();
    return res.status(200).json(product);
  }
  if (req.method === 'POST') {
    const data = req.body();
    const product = await prisma.product.create(data);
    return res.status(200).json(product);
  }
}
