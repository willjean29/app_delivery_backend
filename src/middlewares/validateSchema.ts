import { Request, Response, NextFunction } from "express";
import { AnySchema, ValidationError } from "yup";

const validationSchema =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (e) {
      const error = e as ValidationError;
      return res.status(400).send(error);
    }
  };

export default validationSchema;
