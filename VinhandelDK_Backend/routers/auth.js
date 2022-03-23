import { Router } from "express";
import bcrypt from "bcrypt";
import { accountTabel } from "../db.js";
import session from "express-session";

const router = Router();
const saltRounds = 12;

console.log(bcrypt);

function checkLoginInfo(req, res, next) {
  user = {
    reqquestedUsername: req.params.username,
    requestedPassword: req.params.password,
  };
  foundUser = accountTabel.find((correctUser) => correctUser === user);
  if (!foundUser) {
    res.status(404).send("Username or password is not correct");
  } else {
    next();
  }
}

function createUser(req, res, next) {
  user = {
    reqquestedUsername: req.params.username,
    requestedPassword: req.params.password,
  };
  userAlreadyExists = accountTabel.find(
    (existingUser) => existingUser.username === user.username
  );

  if (userAlreadyExists) {
    //409: Conflict
    res
      .status(409)
      .send(
        `User with ${user.reqquestedUsername} already exists. Forgot password?`
      );
  } else {
    next();
  }
}

function checkValidPassword(req, res, next) {
  user = {
    reqquestedUsername: req.params.username,
    requestedPassword: req.params.password,
  };

  const foundUserIndex = accountTabel.findIndex(
    (requestedUser) => requestedUser.username === user.username
  );

  if (foundUserIndex !== -1) {
    const existingUser = accountTabel[foundUserIndex];

    if (existingUser.password === user.password) {
      res.status(49).send("Password cannot be the same as old one");
    } else {
      const updatedUser = { ...existingUser, ...user, password: user.password };
      accountTabel[foundUserIndex] = updatedUser;
      next();
    }
  } else {
    res.status(404).send("The user doesn't exist with the specified email");
  }
}

/***************************/
/***********Routes**********/
/***************************/

router.post("/auth/login", checkLoginInfo, (req, res) => {
  req.session.loggedIn = true;
  res.status(200).send({ data: foundUser });
});

router.post("/auth/signup", createUser, (req, res) => {
  res.status(201).send("User has successfully been created, you may now login");
});

router.patch("/auth/changepassword", checkValidPassword, (req, res) => {
  res.status(200).send("Password changed successfully");
  //Send a mail to the users email with a recent change
});

export default router;
