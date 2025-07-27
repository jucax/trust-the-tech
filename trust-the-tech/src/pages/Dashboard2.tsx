import { useEffect, useState } from 'react';

export default function Dashboard2() {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  return (
    <h1>Welcome{user ? `, ${user.name}` : ''}!</h1>
  );
} 