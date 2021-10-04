import Business, { IBusiness } from "../models/business.model";
import { BusinessDto } from "../dtos/business.dtos";
import { DbValidators } from "../helpers";

const createBusiness = async (businessDto: BusinessDto) => {
  const existsBusiness = await DbValidators.existBusiness(businessDto);
  if (existsBusiness !== "not exists") return existsBusiness;
  try {
    const newBusiness = new Business(businessDto) as IBusiness;
    newBusiness.save();
    return newBusiness;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export default { createBusiness };
