const express = require("express");
const {
  Addperson,
  Getperson,
  Deleteperson,
  Editperson,
} = require("../controlles/person");

const personRoutes = express.Router();

personRoutes.post("/add", Addperson);
personRoutes.get("/get", Getperson);
personRoutes.delete("/:id", Deleteperson);
personRoutes.put("/edit/:id", Editperson);
module.exports = personRoutes;
