import jwt from 'jsonwebtoken';
import User from '../models/User';
import authCondig from '../../config/auth';
import auth from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      // no primeiro parametro coloca as informações q serão enviadas no payload
      // no segundo é uma string criptografada, é uma string unica para todas as aplicações do mundo
      token: jwt.sign({ id }, authCondig.secret, {
        expiresIn: authCondig.expiresIn,
      }),
    });
  }
}

export default new SessionController();