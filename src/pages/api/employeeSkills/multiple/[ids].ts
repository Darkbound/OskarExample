import { NextApiRequest, NextApiResponse } from "next";

import { get } from "~/server";
import { dbConnect } from "~/utils";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    await dbConnect();

    switch (req.method) {
      case "GET":
        const ids = req.query.ids as string;
        const parsedIds = JSON.parse(ids);

        const multipleEmployeeSkills = await get.employeeSkill.byIds(parsedIds);

        res.status(200).json(multipleEmployeeSkills);
        break;
      default:
        throw new Error("Method not allowed!");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
