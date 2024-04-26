// pages/LoginPage.tsx

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'customer' | 'businessOwner'>('customer'); // Default userType

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, userType }),
      });

      if (response.ok) {
        const data = await response.json();
        // Redirect to dashboard or home page based on userType
        router.push(`/${userType}/chat`);
      } else {
        console.error('Login failed');
        // Handle login failure (show error message, etc.)
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          User Type:
          <select value={userType} onChange={(e) => setUserType(e.target.value as 'customer' | 'businessOwner')}>
            <option value="customer">Customer</option>
            <option value="businessOwner">Business Owner</option>
          </select>
        </label>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
