import { Request, Response, NextFunction } from 'express';

function handleResponse(action: Function) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await action(req, res, next);
      res.json(data);
    } catch (err) {
      next(err);
    }
  };
}

export default handleResponse;
