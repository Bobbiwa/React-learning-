// eslint-disable-next-line no-unused-vars
import React, { useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth } from '../../utils/token';

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ subComponent }) {
  const auth = useSelector((state) => state.user.isAdmin);
  const authByToken = getAuth() === 'true' ? true : false;
  return auth || authByToken ? subComponent : <Navigate to="/login" />;
}
