import followModel from "./follow-model.js";

export const userFollowsUser = (follow) =>
    followModel.create(follow)

export const userUnfollowsUser = (fid) =>
    followModel.deleteOne({_id: fid})

export const findUsersFollowingUser = (uid) =>
    followModel.find({followee: uid})
        .populate('follower')
        .exec()

export const findUsersFollowedByUser = (uid) =>
    followModel.find({follower: uid})
        .populate('followee')
        .exec()