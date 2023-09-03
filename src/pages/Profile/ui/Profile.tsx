import { Header } from '@widgets/Header';
import { ProfileForm } from '@features/profile/updateUserInfo';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';
import { LogoutButton } from '@features/authentication/logout/ui/LogoutButton/LogoutButton.tsx';
import css from './Profile.module.css';
export function Profile() {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div>
      <Header />
      <main className='user'>
        <section className={css.profile}>
          <h2 className={css.profile__greet}>{`Привет, ${user.name.split(' ')[0]}!`}</h2>
          <ProfileForm />
          <LogoutButton />
        </section>
      </main>
    </div>
  );
}
