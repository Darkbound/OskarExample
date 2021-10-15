import { NextApiRequest, NextApiResponse } from "next";

import { drop, get, patch, put } from "~/server";
import { dbConnect } from "~/utils";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    await dbConnect();

    const id = req.query.id as string;

    switch (req.method) {
      case "GET":
        const department = await get.department.byId(id);

        res.status(200).json(department);
        break;
      case "PUT":
        const departmentUpdateInfo = { ...req.body };

        const updatedDepartment = await put.department(id, departmentUpdateInfo);

        res.status(200).json(updatedDepartment);
        break;
      case "PATCH":
        const departmentPatchInfo = { ...req.body };

        const result = await patch.department(id, departmentPatchInfo);

        res.status(200).json(result);
        break;
      case "DELETE":
        const deletedDepartment = await drop.department(id);

        res.status(200).json(deletedDepartment);
        break;
      default:
        throw new Error("Method not allowed.");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
