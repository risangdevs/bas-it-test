const { WhyUs } = require("../models");
class WhyUsController {
  static async getWhyUs(req, res, next) {
    try {
      const whyUs = await WhyUs.findByPk(1);
      return res.status(200).json(whyUs.text);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  static async editWhyUs(req, res, next) {
    try {
      const { text } = req.body;
      if (!text) {
        throw { message: "Please fill all the fields" };
      }
      const editNow = await WhyUs.update(
        { text },
        { where: { id: 1 }, returning: true }
      );
      if (editNow[0] === 0) {
        throw { message: "Edit Failed" };
      }
      res.status(201).json({ message: "Edit Success" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
module.exports = WhyUsController;
