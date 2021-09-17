import jwt, { Secret } from "jsonwebtoken";

const generateJwt = (data: string) => {
  const payload = data;
  try {
    jwt.sign(payload, process.env.SECRET_JWT_KEY as Secret, {
      expiresIn: "12h",
    });
  } catch (error) {}
};

export default {
  generateJwt,
};
