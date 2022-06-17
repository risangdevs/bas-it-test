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
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
module.exports = WhyUsController;
