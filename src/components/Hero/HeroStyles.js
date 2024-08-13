import styled from "styled-components";

export const HeroContainerStyled = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 30px;
  h1 {
    margin-bottom: 2rem;
  }

  @media (max-width: 960px) {
    flex-direction: column;
     width: 100%;
  }
`;

export const HeroTextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: auto;

  h1 {
		font-size: 4rem;
		margin: 10px 0;
	}
	h2 {
		font-size: 2.5rem;
		margin: 10px 0;
	}
	p {
		font-size: 1.2rem;
	}

  @media (max-width: 960px) {
		width: 80%;
		align-items: center;
		text-align: center;
	}
`;

export const HeroImageContainerStyled = styled.div`
width: 40%;
overflow:hidden;
border-radius:48px;

	img {
		width: 100%;
   
	}
	@media (max-width: 960px) {
		display: none;
	} ;
`