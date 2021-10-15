import { NextApiRequest, NextApiResponse } from "next";

import { drop, get, patch, put } from "~/server";
import { dbConnect } from "~/utils";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    await dbConnect();

    const id = req.query.id as string;

    switch (req.method) {
      case "GET":
        const employeeSkill = await get.employeeSkill.byId(id);

        res.status(200).json(employeeSkill);
        break;
      case "PUT":
        const employeeSkillUpdateInfo = { ...req.body };

        const updatedEmployeeSkill = await put.employeeSkill(id, employeeSkillUpdateInfo);

        res.status(200).json({ updatedEmployeeSkill });
        break;
      case "PATCH":
        const employeeSkillPatchInfo = { ...req.body };

        await patch.employeeSkill(id, employeeSkillPatchInfo);

        res.status(200);
        break;
      case "DELETE":
        const deletedEmployeeSkill = await drop.employeeSkill(id);

        res.status(200).json(deletedEmployeeSkill);
        break;
      default:
        throw new Error("Method not allowed.");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
