// const Transaction = require("../modal/Transaction.js");
import Transaction from "../modal/Transaction.js";

export const addTransactions = async (req, res) => {
    try {
      const { title, amount,date } = req.body;
  
      const transaction = await Transaction.create(req.body);
      console.log(transaction);
      return res.status(201).json({
        success: true,
        data: transaction
      });
    } catch (error) {
      if (error.name === "ValidationError") {
        const messages = Object.values(error.errors).map(val => val.message);
  
        return res.status(400).json({
          success: false,
          error: messages
        });
      } else {
        return res.status(500).json({
          success: false,
          error: "Server error"
        });
      }
      // console.log(error.message);
    }
  };
  