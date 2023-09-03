import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';
interface Props {
  secondaryProtection?: boolean;
}
export function ProtectedRouteElement({ secondaryProtection }: Props) {
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  return secondaryProtection ? (
    !isLoggedIn ? (
      <Outlet />
    ) : (
      <Navigate to='/saved-movies' replace />
    )
  ) : isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to='/' replace />
  );
}
