import { Router } from "express";
import bcrypt from "bcrypt";
import db from "../database/createConnection.js";

const router = Router();
const saltRounds = 12;
let userToSend;

/******************************/
/***********Functions**********/
/******************************/

async function checkLoginInfo(req, res, next) {
  const user = req.body;

  db.query(
    `SELECT * FROM users WHERE username = '${user.username}';`,
    async (err, data) => {
      if (data[0]) {
        let foundUser = data[0];
        const correctPassword = await bcrypt.compare(
          user.password,
          foundUser.password
        );
        if (!correctPassword) {
          res
            .status(404)
            .send({ message: "Username or password is not correct" });
        } else {
          userToSend = {
            fullname: foundUser.fullname,
            email: foundUser.email,
            username: foundUser.username,
          };
          next();
        }
      } else {
        res
          .status(404)
          .send({ message: "Username or password is not correct" });
      }
    }
  );
}

async function createUser(req, res, next) {
  const user = req.body;
  db.query(
    `SELECT * FROM users WHERE username = '${user.username}';`,
    async (err, data) => {
      if (data[0]) {
        //409: Conflict
        res.status(409).send({
          message: `User with ${user.username} already exists. `,
        });
      } else {
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        const newUser = { ...user, password: hashedPassword };

        db.query(
          `INSERT INTO users(fullname,email,username,password) VALUES('${newUser.fullname}','${newUser.email}','${newUser.username}','${newUser.password}');`
        );
        next();
      }
    }
  );
}

async function checkValidPassword(req, res, next) {
  const user = req.body;

  db.query(
    `SELECT * FROM users WHERE username = '${user.username}';`,
    async (err, data) => {
      if (data[0]) {
        const existingUser = data[0];
        const existingPassword = await bcrypt.compare(
          user.password,
          existingUser.password
        );

        if (existingPassword) {
          res
            .status(409)
            .send({ message: "Password cannot be the same as old one" });
        } else {
          const updatedUser = {
            ...existingUser,
            ...user,
            password: user.password,
          };
          db.query(
            `UPDATE users SET(?,?,?,?) WHERE username = ?`,
            updatedUser.fullname,
            updatedUser.email,
            updatedUser.username,
            updatedUser.password,
            updatedUser.username
          );
        }
      } else {
        res
          .status(404)
          .send({ message: "The user doesn't exist with the specified email" });
      }
    }
  );
}

async function changeUser(req, res, next) {
  const user = req.body;

  db.query(
    `UPDATE users SET fullname ='${user.fullname}', email='${user.email}' WHERE(username = '${user.username}');`,
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(404).send({ message: "The user cannot be found" });
      }
      userToSend = user;
      next();
    }
  );
}

/***************************/
/***********Routes**********/
/***************************/

router.post("/auth/login", checkLoginInfo, (req, res) => {
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
    message: `Successfully created user, you may now login`,
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
