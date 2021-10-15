import { NextApiRequest, NextApiResponse } from "next";

import { get, post } from "~/server";
import { dbConnect } from "~/utils";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    // TODO: Find a way to do just one dbConnect
    await dbConnect();

    switch (req.method) {
      case "GET":
        const allDepartments = await get.department.all();

        res.status(200).json(allDepartments);
        break;
      case "POST":
        const departmentInfo = req.body;

        const newDepartment = await post.department(departmentInfo);
        //TODO: Handle department already exists

        res.status(200).json(newDepartment);
        break;
      default:
        throw new Error("Method not allowed!");
    }
  } catch (error) {
    res.status(400).json({ code: error.code, error });
  }
};
