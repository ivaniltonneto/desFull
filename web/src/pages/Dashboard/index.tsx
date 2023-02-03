import { MdAdd, MdOutlineMenu } from 'react-icons/md';

import { Header } from '../../components/header/header';
import { Container, DivAdd, DivContent, Main } from './styles';
import { useUserContext } from '../../contexts/userContext';
import { ModalContact } from '../../components/ModalContact';
import { useContactContext } from '../../contexts/contactContext';
import { InfoUser } from '../../components/InfoUser';
import { useEditContactContext } from '../../contexts/editContactContext';
import { ModalEditContact } from '../../components/ModalEditContact';

export const Dashboard = () => {
  const { user, modalUser, setModalUser } = useUserContext();
  const { modalAdd, setModalAdd, contacts } = useContactContext();
  const { setIdContact, modalEdit, setModalEdit } = useEditContactContext();

  return (
    <Container>
      {modalAdd && <ModalContact />}
      {modalUser && <InfoUser />}
      {modalEdit && <ModalEditContact />}
      <Header />
      <Main>
        <section>
          <h2>Seja bem vindo, {user.full_name}!!!</h2>
          <div onClick={() => setModalUser(true)}>
            <MdOutlineMenu size={50} />
          </div>
        </section>
        <DivAdd>
          <div>
            <span>Cadastre mais contatos</span>
            <button onClick={() => setModalAdd(true)}>
              <MdAdd />
            </button>
          </div>
        </DivAdd>
        <DivContent>
          {contacts?.length > 0 ? (
            <table className="fix_table">
              <thead>
                <tr>
                  <th>Nome completo</th>
                  <th>E-mail</th>
                  <th>Telefone</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr
                    key={contact.id}
                    onClick={() => {
                      setIdContact(contact.id);
                      setModalEdit(true);
                    }}
                  >
                    <td>{contact.full_name}</td>
                    <td> {contact.email}</td>
                    <td>{contact.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <></>
          )}
        </DivContent>
      </Main>
    </Container>
  );
};
