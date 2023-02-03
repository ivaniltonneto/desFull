import { useState } from 'react';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { IoIosPaper } from 'react-icons/io';

import { DivInput } from '../../components/input';
import { useLoginContext } from '../../contexts/loginContext';
import { Container, DivEye, LinkStyled } from './styles';

export const Login = () => {
  const { register, handleSubmit, errors, loginUser } = useLoginContext();

  const [visible, setVisible] = useState('password');

  const showPassword = () => {
    visible === 'password' ? setVisible('text') : setVisible('password');
  };

  return (
    <Container>
      <IoIosPaper size={80} />
      <form onSubmit={handleSubmit(loginUser)}>
        <DivInput
          label="Email"
          placeholder="email@email.com"
          {...register('email')}
          errors={errors.email?.message}
        />
        <DivInput
          label="Senha"
          placeholder="Senha"
          type={visible}
          children={
            <DivEye>
              <div onClick={showPassword}>
                {visible === 'password' ? <BsEyeFill /> : <BsEyeSlashFill />}
              </div>
            </DivEye>
          }
          {...register('password')}
          errors={errors.password?.message}
        />

        <button type="submit">Entrar</button>
      </form>

      <p>Não possui uma conta?</p>

      <LinkStyled type="submit" to="/register">
        Cadastre-se
      </LinkStyled>
    </Container>
  );
};
