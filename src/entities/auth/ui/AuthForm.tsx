import { createSignal } from 'solid-js';

import { Box, Button, FormControl, FormControlLabel, Input } from '~/shared/ui';
import { supabase } from '~/shared/supabase';

export function AuthForm(): JSXElement {
  const [isLoading, setIsLoading] = createSignal(false);
  const [email, setEmail] = createSignal('');

  function handleEmailInput(e): void {
    setEmail(e.target.value);
  }

  const handleLogin = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email: email() });
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
      <FormControl>
        <FormControlLabel for="email">Email address</FormControlLabel>
        <Input
          id="email"
          type="email"
          value={email()}
          isRequired
          onInput={handleEmailInput}
        />
      </FormControl>
      <Button isLoading={isLoading()} variant="solid" onClick={handleLogin}>
        Submit
      </Button>
    </Box>
  );
}
