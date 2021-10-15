import { NextApiRequest, NextApiResponse } from "next";

import { get, post } from "~/server";
import { dbConnect } from "~/utils";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    await dbConnect();

    switch (req.method) {
      case "GET":
        const allEmployees = await get.employee.all();

        res.status(200).json(allEmployees);
        break;
      case "POST":
        const employeeInfo = { ...req.body };
        const newEmployee = await post.employee(employeeInfo);

        res.status(200).json(newEmployee);
        break;
      default:
        throw new Error("Method not allowed!");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
