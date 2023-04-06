import User from '../../models/user';

async function createUser(parent, { input }) {
  console.log(input);
  try {
    const user = await User.create(input);
    console.log(user);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create user');
  }
}

async function updateUser(parent, { id, input }) {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    await user.updateOne(
      { _id: id },
      {
        $set: input,
      }
    );
    return user;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to update user with id: ${id}`);
  }
}

async function deleteUser(parent, { id }) {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    await user.deleteOne({ _id: id });
    return true;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to delete user with id: ${id}`);
  }
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
};
