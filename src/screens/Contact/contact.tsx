import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from 'styled-components';
import { emailRegex } from '../../utils/regex';
import Alert from '@mui/material/Alert';
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
  const emailTextFieldRef = useRef<HTMLInputElement | null>(null);
  const [emailError, setEmailError] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const helperText = emailError ? t('invalid_email') : null;

  const TextField = (
    label: string,
    height?: string | undefined,
    multiline?: boolean,
    ref?: any,
    error?: boolean,
    helperText?: string | null,
  ) => {
    return (
      <MITextField
        error={error || false}
        inputRef={ref}
        variant='outlined'
        label={label}
        multiline={multiline || false}
        inputProps={{
          style: height
            ? {
                color: theme.fontColor,
                height,
              }
            : {
                color: theme.fontColor,
              },
        }}
        helperText={helperText || null}
      />
    );
  };

  useEffect(() => {
    let timer: any;
    if (successAlert) {
      timer = setTimeout(() => {
        setSuccessAlert(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [successAlert]);

  const onSubmit = () => {
    if (
      emailTextFieldRef?.current?.value &&
      emailRegex.test(emailTextFieldRef?.current?.value)
    ) {
      setEmailError(false);
      setSuccessAlert(true);
    } else {
      setEmailError(true);
    }
  };

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
            {successAlert && (
              <Alert severity='success'>{t('success_submit')}</Alert>
            )}
            <FormInnerContainer>
              {TextField(t('name_contact'))}
            </FormInnerContainer>
            <FormInnerContainer>
              {TextField(
                t('email'),
                '',
                false,
                emailTextFieldRef,
                emailError,
                helperText,
              )}
            </FormInnerContainer>
            <FormInnerContainer>
              {TextField(t('message'), '200px', true)}
            </FormInnerContainer>
            <Button onClick={onSubmit}>Submit</Button>
          </ContactFormContainer>
        </FormContainer>
      </IconContainer>
    </Container>
  );
};

export default Contact;
