import express, { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const { ACCESS_TOKEN, STORE, API_VERSION } = process.env;

export const fulfillment_order = async (req: Request, res: Response) => {
  try {
        console.log(`Yes, you have done it.`)



  } catch (error) {
    console.error("Error fulfilling orders:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
































