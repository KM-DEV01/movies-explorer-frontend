import css from './Login.module.css';
import { LoginForm } from '@features/authentication/login';
import { AuthHeader } from '@widgets/AuthHeader';

export function Login() {
  return (
    <div className={css.loginPage}>
      <AuthHeader greet='Рады видеть!' />
      <main className='auth'>
        <section className='login'>
          <LoginForm />
        </section>
      </main>
    </div>
  );
}
