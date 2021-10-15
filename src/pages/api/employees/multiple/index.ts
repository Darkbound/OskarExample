import { NextApiRequest, NextApiResponse } from "next";

import { get } from "~/server";
import { dbConnect } from "~/utils";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    await dbConnect();

    switch (req.method) {
      case "GET":
        //FIXME: Use Qs to stringfy and parse
        const filter = {
          departmentId: req.query.departmentId as string,
          employeeSkillsIds: req.query["employeeSkillsIds[]"] as string[],
        };

        const multipleEmployees = await get.employee.byIds(filter);

        res.status(200).json(multipleEmployees);
        break;
      default:
        throw new Error("Method not allowed!");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
