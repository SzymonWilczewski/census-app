import bcryptjs from "bcryptjs";
import createError from "http-errors";
import { getConnection } from "typeorm";
import { User } from "../../entity/User";

export const getUserById = async function (id: number) {
  const userRepository = getConnection().getRepository(User);
  const user = await userRepository.findOne({
    id,
  });
  // omits password from newly created user
  const { password: omitted, ...rest } = user;
  return rest;
};

export const login = async function (login: string, password: string) {
  const userRepository = getConnection().getRepository(User);
  const user = await userRepository.findOne({
    login,
  });

  if (!user) {
    throw createError(401, "user doesn't exist");
  }

  const isValidPassword: boolean = await bcryptjs.compareSync(
    password,
    user.password
  );

  if (!isValidPassword) {
    throw createError(401, "incorrect password");
  }

  // omits password from newly created user
  const { password: omitted, ...rest } = user;
  return rest;
};

export const register = async function (
  email: string,
  login: string,
  password: string
) {
  const userRepository = getConnection().getRepository(User);

  const isLoginOrEmailTaken = (
    await userRepository.find({
      where: [{ login }, { email }],
    })
  ).length;

  if (isLoginOrEmailTaken) {
    throw createError(401, "login or email is taken");
  }

  const hashedPassword = await bcryptjs.hashSync(password, 10);

  const newUser = new User();
  newUser.login = login;
  newUser.email = email;
  newUser.password = hashedPassword;
  await userRepository.save(newUser);

  // omits password from newly created user
  const { password: omitted, ...rest } = newUser;
  return rest;
};
