import bcryptjs from "bcryptjs";
import createError from "http-errors";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";

export const getUserById = async function (id: number) {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(id);

  // omits password from user
  const { password, ...rest } = user;
  return rest;
};

export const login = async function (user: any) {
  const userRepository = getRepository(User);
  const dbUser = await userRepository.findOne({
    login: user.login,
  });

  if (!dbUser) {
    throw createError(401, "user doesn't exist");
  }

  const isValidPassword: boolean = await bcryptjs.compareSync(
    user.password,
    dbUser.password
  );

  if (!isValidPassword) {
    throw createError(401, "incorrect password");
  }

  // omits password from newly created user
  const { password, ...rest } = dbUser;
  return rest;
};

export const register = async function (user: any) {
  const userRepository = getRepository(User);

  const isLoginOrEmailTaken = (
    await userRepository.find({
      where: [{ login: user.login }, { email: user.email }],
    })
  ).length;

  if (isLoginOrEmailTaken) {
    throw createError(401, "login or email taken");
  }

  const hashedPassword = await bcryptjs.hashSync(user.password, 10);
  const savedUser = await userRepository.save({
    ...user,
    password: hashedPassword,
  });

  // omits password and passwordConfirmation from newly created user
  const { password, passwordConfirmation, ...rest } = savedUser;
  return rest;
};
