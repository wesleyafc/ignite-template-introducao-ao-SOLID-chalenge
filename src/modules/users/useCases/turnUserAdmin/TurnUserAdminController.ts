import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;
    try {
      const newUserAdmin = this.turnUserAdminUseCase.execute({
        user_id: String(user_id),
      });

      return response.json(newUserAdmin);
    } catch (err) {
      return response.status(404).json({ error: err });
    }

  }
}

export { TurnUserAdminController };
