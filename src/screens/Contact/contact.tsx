import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from 'styled-components';
import {
  Container,
  IconContainer,
  IconAndDetailContainer,
  IconDetailText,
  FormContainer,
  FormInnerContainer,
  ContactInnerContainer,
  MITextField,
  Button,
  MessageMe,
  MessageMeDescription,
  MessageMeContainer,
  ContactFormContainer,
} from './styles';

type Props = {};

const Contact: React.FC<Props> = () => {
  const theme: any = useTheme();
  const { t } = useTranslation();

  return (
    <Container>
      <IconContainer>
        <ContactInnerContainer>
          <IconAndDetailContainer>
            <SmartphoneIcon style={{ color: theme.iconColor }} />
            <IconDetailText>{t('mobile_number')}</IconDetailText>
          </IconAndDetailContainer>
          <IconAndDetailContainer>
            <EmailIcon style={{ color: theme.iconColor }} />
            <IconDetailText>{t('email_id')}</IconDetailText>
          </IconAndDetailContainer>
          <IconAndDetailContainer>
            <LocationOnIcon style={{ color: theme.iconColor }} />
            <IconDetailText>{t('location')}</IconDetailText>
          </IconAndDetailContainer>
        </ContactInnerContainer>
        <FormContainer>
          <MessageMeContainer>
            <MessageMe>{t('message_me')}</MessageMe>
            <MessageMeDescription>
              {t('message_me_description')}
            </MessageMeDescription>
          </MessageMeContainer>
          <ContactFormContainer>
            <FormInnerContainer>
              <MITextField variant='outlined' label={t('name_contact')} />
            </FormInnerContainer>
            <FormInnerContainer>
              <MITextField variant='outlined' label={t('email')} />
            </FormInnerContainer>
            <FormInnerContainer>
              <MITextField
                variant='outlined'
                label={t('message')}
                inputProps={{
                  style: {
                    height: '200px',
                  },
                }}
              />
            </FormInnerContainer>
            <Button>Submit</Button>
          </ContactFormContainer>
        </FormContainer>
      </IconContainer>
    </Container>
  );
};

export default Contact;
