import { Request, Response } from "express";

const getAllUsers = (req: Request, res: Response) => {
  res.json({
    success: true,
    msg: "Return all users",
  });
};

export default {
  getAllUsers,
};
