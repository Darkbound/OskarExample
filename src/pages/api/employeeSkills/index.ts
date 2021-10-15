import { NextApiRequest, NextApiResponse } from "next";

import { get, post } from "~/server";
import { dbConnect } from "~/utils";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    await dbConnect();

    switch (req.method) {
      case "GET":
        const allEmployeeSkills = await get.employeeSkill.all();

        res.status(200).json(allEmployeeSkills);
        break;
      case "POST":
        const employeeSkillInfo = { ...req.body };
        const newEmployeeSkill = await post.employeeSkill(employeeSkillInfo);

        res.status(200).json(newEmployeeSkill);
        break;
      default:
        throw new Error("Method not allowed!");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
