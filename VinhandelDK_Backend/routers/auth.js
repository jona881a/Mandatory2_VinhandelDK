import { Router } from "express";
import bcrypt from "bcrypt";
import { accountTabel } from "../db.js";
import session from "express-session";

const router = Router();
const saltRounds = 12;
let userToSend;

async function checkLoginInfo(req, res, next) {
  const user = req.body;

  const foundUser = accountTabel.find(
    (correctUser) => correctUser.username === user.username
  );

  if (foundUser) {
    const correctPassword = await bcrypt.compare(
      user.password,
      foundUser.password
    );
    if (!correctPassword) {
      res.status(404).send({ message: "Username or password is not correct" });
    } else {
      userToSend = foundUser;
      next();
    }
  } else {
    res.status(404).send({ message: "Username or password is not correct" });
  }
}

async function createUser(req, res, next) {
  const userAlreadyExists = accountTabel.find(
    (existingUser) => existingUser.username === req.body.username
  );

  if (userAlreadyExists) {
    //409: Conflict
    res.status(409).send({
      message: `User with ${req.body.username} already exists. Forgot password?`,
    });
  } else {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = { ...req.body, password: hashedPassword };

    accountTabel.push(newUser);
    next();
  }
}

async function checkValidPassword(req, res, next) {
  const user = req.body;

  const foundUserIndex = accountTabel.findIndex(
    (requestedUser) => requestedUser.username === user.username
  );

  if (foundUserIndex !== -1) {
    const existingUser = accountTabel[foundUserIndex];

    const correctPassword = await bcrypt.compare(
      user.password,
      existingUser.password
    );

    if (correctPassword) {
      res
        .status(409)
        .send({ message: "Password cannot be the same as old one" });
    } else {
      const updatedUser = { ...existingUser, ...user, password: user.password };
      accountTabel[foundUserIndex] = updatedUser;
      next();
    }
  } else {
    res
      .status(404)
      .send({ message: "The user doesn't exist with the specified email" });
  }
}

async function changeUser(req, res, next) {
  const user = req.body;

  console.log(user);

  const userIndex = accountTabel.findIndex(
    (requestedUser) => requestedUser.username === user.username
  );

  if (userIndex !== -1) {
    const userToEdit = accountTabel[userIndex];

    const updatedUser = { ...userToEdit, ...user };
    accountTabel[userIndex] = updatedUser;
    userToSend = updatedUser;
    next();
  } else {
    res.status(404).send({ message: "The user cannot be found" });
  }
}

/***************************/
/***********Routes**********/
/***************************/

router.post("/auth/login", checkLoginInfo, (req, res) => {
  req.session.loggedIn = true;
  req.session.user = userToSend;
  res.status(200).send({ session: req.session });
});

router.get("/auth/signout", (req, res) => {
  req.session.destroy;
  userToSend = null;
  res.status(200).send({ user: userToSend });
});

router.post("/auth/signup", createUser, (req, res) => {
  res.status(201).send({
    data: accountTabel,
  });
});

router.patch("/auth/changepassword", checkValidPassword, (req, res) => {
  res.status(200).send({ message: "Password changed successfully" });
  //Send a mail to the users email with a recent change
});

router.put("/auth/changeuser", changeUser, (req, res) => {
  res.status(200).send({ changedUser: userToSend });
});

export default router;
