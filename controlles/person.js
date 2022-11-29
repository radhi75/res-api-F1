const person = require("../models/person");

exports.Addperson = async (req, res) => {
  try {
    const persons = new person(req.body);
    await persons.save();
    res.status(200).send({ msg: "person added", persons });
  } catch (error) {
    res.status(500).send("couldn't add person");
  }
};

exports.Getperson = async (req, res) => {
  try {
    const persons = await person.find();
    res.status(200).send({ msg: "list of person", persons });
  } catch (error) {
    res.status(500).send("couldn't found persons");
  }
};

exports.Deleteperson = async (req, res) => {
  try {
    await person.findByIdAndDelete(req.params.id);
    res.status(200).send("person deleted");
  } catch (error) {
    res.status(500).send("couldn't delete person");
  }
};

exports.Editperson = async (req, res) => {
  try {
    const persons = await person.findByIdAndUpdate(
      req.params.id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    res.status(200).send({ msg: "person updated", persons });
  } catch (error) {
    res.status(500).send("person was not updated");
  }
};
