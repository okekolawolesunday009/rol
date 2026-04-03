import { useState, useCallback } from 'react';
import type { AdminUser } from '../types';

const STORAGE_KEY = 'rccg_admin_token';
// Mock credentials — replace with Supabase env vars when ready
const ADMIN_EMAIL = 'admin@rccglp17.org';
const ADMIN_PASSWORD = 'sanctuary2024';

export function useAuth() {
  const [user, setUser] = useState<AdminUser | null>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored) as AdminUser;
      } catch {
        return null;
      }
    }
    return null;
  });

  const login = useCallback(
    (email: string, password: string): boolean => {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        const newUser: AdminUser = {
          email,
          token: btoa(`${email}:${Date.now()}`),
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
        setUser(newUser);
        return true;
      }
      return false;
    },
    []
  );

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  const isAuthenticated = user !== null;

  return { user, login, logout, isAuthenticated };
}
