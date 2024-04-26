import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { CustomerModel, BusinessOwnerModel } from '../../models'; // Import Mongoose models

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { username, password, userType } = req.body;

    try {
      let userModel;
      if (userType === 'customer') {
        userModel = CustomerModel;
      } else if (userType === 'businessOwner') {
        userModel = BusinessOwnerModel;
      } else {
        return res.status(400).json({ message: 'Invalid user type' });
      }

      const user = await userModel.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id, userType }, 'secret_key', { expiresIn: '1h' });

      res.status(200).json({ token, userId: user._id, userType });
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
