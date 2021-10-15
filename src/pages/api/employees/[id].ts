import { NextApiRequest, NextApiResponse } from "next";

import { drop, get, patch, put } from "~/server";
import { dbConnect } from "~/utils";

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    await dbConnect();

    const id = req.query.id as string;

    switch (req.method) {
      case "GET":
        const employee = await get.employee.byId(id);

        res.status(200).json(employee);
        break;
      case "PUT":
        const employeeUpdateInfo = { ...req.body };

        const updatedEmployee = await put.employee(id, employeeUpdateInfo);

        res.status(200).json({ updatedEmployee });
        break;
      case "PATCH":
        const employeePatchInfo = { ...req.body };

        const patchedEmployee = await patch.department(id, employeePatchInfo);

        res.status(200).json({ patchedEmployee });
        break;
      case "DELETE":
        const deletedEmployee = await drop.employee(id);

        res.status(200).json({ deletedEmployee });
        break;
      default:
        throw new Error("Method not allowed.");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
