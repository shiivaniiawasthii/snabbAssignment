import { NextApiRequest, NextApiResponse } from "next";

let users = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(users);
  } else if (req.method === "POST") {
    console.log("body", req.body);
    const newUser = req.body;
    console.log(newUser, "user");
    users.push(newUser);
    res.status(201).json(newUser);
  }
}
