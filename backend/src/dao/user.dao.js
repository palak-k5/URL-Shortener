import User from '../models/user.model.js';
import UrlModel from "../models/shorturl.model.js";

export const findUserByEmail=async (email)=>{
    return await User.findOne({email});
}


export const findUserById=async (id)=>{
    return await User.findById(id);
}

export const findUserByEmailByPassword = async (email) => {
    return await User.findOne({email}).select('+password')
}

export const createUser=async (name,email,password)=>{
    const newUser=new User({name,email,password});
    await newUser.save();
    return newUser;
}

export const updateUser =async (id,name,password,email)=>{
    const user=await User.findUserById(id);
    if(!user) throw new Error("User not Found");
    user.name=name;
    user.email=email;
    user.password=password;
    await User.save();
    return user;
}

export const deleteUser =async (id)=>{
    const user=await User.findUserById(id);
  if (!user) {
    throw new Error('User not found');
  }

  await user.deleteOne();
  return { message: 'User deleted successfully' };


}


export const getAllUserUrlsDao = async (id) => {
    return await UrlModel.find({user:id})
}