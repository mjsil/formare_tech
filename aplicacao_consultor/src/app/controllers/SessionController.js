import User from '../models/User';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

class SessionController {
    async store(req, res) {
        const { user_name, password } = req.body;

        const user = await User.findOne({
            where: { user: user_name }
        });

        if (!user) {
            return res.status(401).json({
                error: 'User not found'
            });
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({
                error: 'Password does not match'
            });
        }

        const { id } = user;

        return res.json({
            user: {
                id,
                user_name
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            })
        });
    }
}

export default new SessionController();
