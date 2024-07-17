import {
  NoPageStyled,
  NoPageContainerStyled,
  NoPageTextDivStyled,
} from "./noPageStyles";

function NoPage() {
  return (
    <>
      <NoPageStyled>
        <NoPageContainerStyled>
          <NoPageTextDivStyled>
            PAGE NOT FOUND :(
          </NoPageTextDivStyled>
        </NoPageContainerStyled>
      </NoPageStyled>
    </>
  );
}

export default NoPage;
