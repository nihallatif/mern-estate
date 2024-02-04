import mongoose from 'mongoose';

const userInterestSchema = new mongoose.Schema({
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
  },
  interestIds: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Interest',
      required: true
  }]
});

const UserInterest = mongoose.model('UserInterest', userInterestSchema);

export default UserInterest;