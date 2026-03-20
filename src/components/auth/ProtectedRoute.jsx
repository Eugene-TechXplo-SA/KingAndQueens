'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';

export default function ProtectedRoute({ children, requireAdmin = false }) {
  const { user, profile, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/login');
        return;
      }

      if (requireAdmin && profile?.role !== 'admin') {
        router.push('/user');
        return;
      }

      if (profile?.status === 'banned') {
        router.push('/login');
        return;
      }
    }
  }, [user, profile, loading, requireAdmin, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#C62828] border-r-transparent"></div>
          <p className="text-slate-600">読み込み中...</p>
        </div>
      </div>
    );
  }

  if (!user || (requireAdmin && profile?.role !== 'admin') || profile?.status === 'banned') {
    return null;
  }

  return <>{children}</>;
}
