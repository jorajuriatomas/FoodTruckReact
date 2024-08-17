import { Layout } from '../../components/Layout/Layout';
import * as s from './ContactStyles';

export const Contact = () => {
  return (
    <>
    <Layout>
    <s.SectionContact>

    <s.FormContact>
      <h2>Contactanos</h2>
      <input type="text" placeholder='Nombre' />
      <input type="text" placeholder='Apellido' />
      <input type="text" placeholder='Correo' />
      <textarea name="" placeholder='Asunto' id=""></textarea>
      <s.ButtonContact whileTap = {{scale : 0.95}}>Enviar</s.ButtonContact>
    </s.FormContact>

    </s.SectionContact>
    </Layout>
    </>
  )
}


