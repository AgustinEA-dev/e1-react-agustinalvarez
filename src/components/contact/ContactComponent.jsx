import { InputStyled, FormStyled, ContactSectionStyled } from "./contactStyles";

function Contact() {
  return (
    <>
      <ContactSectionStyled>
        <FormStyled>
          <InputStyled type="text" placeholder="Name" />
          <InputStyled type="text" placeholder="LastName" />
          <InputStyled type="text" placeholder="E-mail" />
          <InputStyled type="text" placeholder="Asunto" />
        </FormStyled>
      </ContactSectionStyled>
    </>
  );
}

export default Contact;
