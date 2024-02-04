import Interest from "../models/interest.model.js";
import UserInterest from "../models/userinterest.model.js";

export const createInterest = async (req, res, next) => {
  try {
    const interest = await Interest.create(req.body);
    return res.status(201).json(interest);
  } catch (error) {
    next(error);
  }
};
export const getInterests = async (req, res, next) => {
  try {
    const interests = await Interest.find().sort({ createdAt: 1 });
    res.json(interests);
  } catch (error) {
    next(error);
  }
};
export const createUserInterest = async (req, res, next) => {
  try {
    const interest = await UserInterest.create(req.body);
    return res.status(201).json(interest);
  } catch (error) {
    next(error);
  }
};
export const getUserInterests = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    //console.log(req.user.id)
    //console.log(req.params.id)
    try {
      const interests = await UserInterest.findOne({ userId: req.params.id })
      .populate({
          path: 'interestIds',
          select: 'name', // Select only the 'name' field from the Interest collection
          model: 'Interest'
      })
      res.status(200).json(interests);
    } catch (error) {
      next(error);
    }
  } else {
    return next(errorHandler(401, 'You can only view your own interests!'));
  }
};