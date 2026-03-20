'use client';

import UserApp from "../../src/components/user/UserApp";
import ProtectedRoute from "../../src/components/auth/ProtectedRoute";

export default function UserPage() {
  return (
    <ProtectedRoute>
      <UserApp />
    </ProtectedRoute>
  );
}
