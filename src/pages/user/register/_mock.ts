import { Request, Response } from 'express';

export default {
  'POST  /api/register': (_: Request, res: Response) => {
    // currentAuthority user普通用户 admin管理员 guest游客
    res.send({ status: 'ok', currentAuthority: 'user' });
  },
};
