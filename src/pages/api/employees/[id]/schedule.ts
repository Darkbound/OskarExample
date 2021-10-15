import { NextApiRequest, NextApiResponse } from "next";

import { drop, patch, put } from "~/server";
import { dbConnect } from "~/utils";

// GET employee(array) schedule with start/end day filter

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  res.status(400).send("Schedule routes not implemented yet");
  return;

  try {
    await dbConnect();

    const id = req.query.id as string;

    switch (req.method) {
      case "GET":
        const resJson = { error: "GET Employee schedule by ID not implemented!" };

        res.status(400).json(resJson);
        break;
      case "PUT":
        const employeeUpdateInfo = { ...req.body };

        const updatedEmployee = await put.employee(id, employeeUpdateInfo);

        res.status(200).json({ updatedEmployee });
        break;
      case "PATCH":
        const departmentPatchInfo = { ...req.body };

        await patch.employee(id, departmentPatchInfo);

        res.status(200);
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
