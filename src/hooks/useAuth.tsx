
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from "sonner";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for user in localStorage
    const storedUser = localStorage.getItem('ecorecycle_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user', error);
        localStorage.removeItem('ecorecycle_user');
      }
    }
    setIsLoading(false);
  }, []);

  // In a real app, this would be API calls
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      // Mock API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login with a generated ID
      const mockUser = {
        id: `user_${Math.random().toString(36).substr(2, 9)}`,
        name: email.split('@')[0],
        email
      };
      
      setUser(mockUser);
      localStorage.setItem('ecorecycle_user', JSON.stringify(mockUser));
      toast.success("Login successful!");
      return true;
    } catch (error) {
      console.error('Login failed', error);
      toast.error("Login failed. Please check your credentials.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      // Mock API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful registration with a generated ID
      const mockUser = {
        id: `user_${Math.random().toString(36).substr(2, 9)}`,
        name,
        email
      };
      
      setUser(mockUser);
      localStorage.setItem('ecorecycle_user', JSON.stringify(mockUser));
      toast.success("Registration successful!");
      return true;
    } catch (error) {
      console.error('Registration failed', error);
      toast.error("Registration failed. Please try again.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ecorecycle_user');
    toast.info("You have been logged out");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
