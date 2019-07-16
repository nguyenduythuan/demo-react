/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormHelperText from '@material-ui/core/FormHelperText';
import { withFormik, Field } from 'formik';
import * as Yup from 'yup';

import Section from 'components/Section';
import messages from './messages';

export function Contact(props) {
  return (
    <Section>
      <Container maxWidth="md">
        <Grid container justify="center" alignContent="center">
          <Grid item xs={8} md={8}>
            <Paper
              elevation={4}
              style={{ padding: '20px 15px', marginTop: '30px' }}
            >
              <Typography variant="h5" gutterBottom>
                <FormattedMessage {...messages.header} />
              </Typography>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={12} md={5}>
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={props.touched.username && !!props.errors.username}
                  >
                    <InputLabel>Username</InputLabel>
                    <Field
                      name="username"
                      render={({ field }) => <Input fullWidth {...field} />}
                    />
                    {props.touched.username && (
                      <FormHelperText>{props.errors.username}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={5}>
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={props.touched.email && !!props.errors.email}
                  >
                    <InputLabel>Email</InputLabel>
                    <Field
                      name="email"
                      render={({ field }) => <Input fullWidth {...field} />}
                    />
                    {props.touched.email && (
                      <FormHelperText>{props.errors.email}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
              </Grid>
              <FormControl
                fullWidth
                margin="normal"
                error={props.touched.mess && !!props.errors.mess}
              >
                <InputLabel>Message</InputLabel>
                <Field
                  name="mess"
                  render={({ field }) => <Input fullWidth {...field} />}
                />
                {props.touched.mess && (
                  <FormHelperText>{props.errors.mess}</FormHelperText>
                )}
              </FormControl>
              <Grid container justify="center" alignContent="center">
                <Grid item xs={6} md={6}>
                  <FormControl fullWidth margin="normal">
                    <Button variant="outlined" color="primary" type="submit">
                      Send
                    </Button>
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

const FormikForm = withFormik({
  mapPropsToValues() {
    // Init form field
    return {
      username: '',
      email: '',
      mess: '',
    };
  },
  validationSchema: Yup.object().shape({
    // Validate form field
    username: Yup.string()
      .required('Username is required')
      .min(5, 'Username must have min 5 characters')
      .max(10, 'Username have max 10 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    mess: Yup.string()
      .required('Message is required')
      .min(5, 'Message must have min 5 characters'),
  }),
})(Contact);

export default FormikForm;
