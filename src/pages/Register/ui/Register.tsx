import css from './Register.module.css';
import { AuthHeader } from '@widgets/AuthHeader';
import { RegisterForm } from '@features/authentication/register';

export function Register() {
  return (
    <div className={css.registerPage}>
      <AuthHeader greet='Добро пожаловать!' />
      <main className='auth'>
        <section className='register'>
          <RegisterForm />
        </section>
      </main>
    </div>
  );
}
