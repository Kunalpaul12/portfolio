import styled from 'styled-components';
import { Fonts } from 'constants/Fonts';
import TextField from '@mui/material/TextField';
import Config from 'config';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  padding: 0px 50px 0px;
`;

export const IconContainer = styled.div`
  flex-direction: row;
  margin-top: 40px;
  width: 100%;
`;

export const IconAndDetailContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 100px;
`;

export const IconDetailText = styled.p`
  font-family: ${Fonts.regular};
  font-size: 18px;
  color: ${props => props.theme.fontColor};
  padding-left: 10px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  justify-content: space-between;
  @media (max-width: ${Config.contact_max_width}) {
    flex-direction: column;
  }
`;

export const FormInnerContainer = styled.div`
  margin-top: 40px;
`;

export const ContactInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${Config.contact_max_width}) {
    flex-direction: column;
  }
`;

export const MITextField = styled(TextField)`
  background: ${props => props.theme.reversFont};
  width: 500px;
  & label {
    color: ${props => props.theme.fontColor};
    font-size: 15px;
    font-family: ${Fonts.regular};
  }
  & label.Mui-focused {
    color: ${props => props.theme.blue};
    font-size: 18px;
    font-family: ${Fonts.regular};
    font-weight: bold;
  }
  & .MuiInput-underline:after {
    border-bottom-color: .;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${props => props.theme.fontColor};
    }
    &:hover fieldset {
      border-color: ${props => props.theme.blue};
    }
    &.Mui-focused fieldset {
      border-color: ${props => props.theme.blue};
    }
  }
  @media (max-width: ${Config.contact_max_width}) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 158px;
  height: 39px;
  font-family: ${Fonts.regular};
  font-size: 18px;
  border-radius: 50px;
  background-color: ${props => props.theme.blue};
  border-color: ${props => props.theme.blue};
  color: ${props => props.theme.white};
  margin: 40px 0px 40px;
`;

export const MessageMeContainer = styled.div`
  width: 40%;
  @media (max-width: ${Config.contact_max_width}) {
    width: 95%;
  }
`;

export const MessageMe = styled.p`
  font-family: ${Fonts.regular};
  font-size: 28px;
  font-weight: bold;
  color: ${props => props.theme.fontColor};
`;

export const MessageMeDescription = styled.p`
  font-family: ${Fonts.regular};
  font-size: 18px;
  color: ${props => props.theme.fontColor};
`;

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
