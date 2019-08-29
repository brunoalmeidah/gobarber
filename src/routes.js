import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Bruno',
    email: 'bruno.almeidah@gmail.com',
    password_hash: '32141321',
  });
  return res.json(user);
});

export default routes;
