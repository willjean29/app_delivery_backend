import { Request, Response } from "express";

const createBusiness = (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    success: true,
    mag: "lol",
  });
};

export default {
  createBusiness,
};
