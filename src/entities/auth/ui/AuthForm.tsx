import { createSignal } from 'solid-js';

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  getUiColor,
  Input,
} from '~/shared/ui';
import MF, { Field, Form } from '~/shared/modular-forms';
import { supabase } from '~/shared/supabase';
import { useI18n } from '~/globals/i18n';

type AuthForm = {
  email: string;
};

export function AuthForm(): JSXElement {
  const { t } = useI18n();
  const authForm = MF.createForm<AuthForm>();

  const [isLoading, setIsLoading] = createSignal(false);

  const handleLogin = async ({ email }: AuthForm): Promise<void> => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      <Form of={authForm} onSubmit={handleLogin}>
        <Field
          name="email"
          of={authForm}
          validate={[
            MF.required(t('email_required')),
            MF.email(t('email_invalid')),
          ]}
        >
          {(field): JSXElement => (
            <FormControl>
              <FormControlLabel for="email">{t('email')}</FormControlLabel>
              <Input
                id="email"
                type="email"
                {...field.props}
                isInvalid={Boolean(field.error)}
              />
              {field.error && (
                <Box color={getUiColor('danger')}>{field.error}</Box>
              )}
            </FormControl>
          )}
        </Field>
        <Button isLoading={isLoading()} type="submit" variant="solid">
          {t('submit')}
        </Button>
      </Form>
    </Box>
  );
}
