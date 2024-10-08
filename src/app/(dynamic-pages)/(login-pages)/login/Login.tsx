'use client';
import { RenderProviders } from '@/components/Auth/RenderProviders';
import { EmailAndPassword } from '@/components/Auth/EmailAndPassword';
import {
  useSignInWithPassword,
  useSignInWithProvider,
} from '@/utils/react-query-hooks';
import { useRouter } from 'next/navigation';
import { T } from '@/components/ui/Typography';

export function Login() {
  const router = useRouter();

  function redirectToDashboard() {
    router.refresh();
    router.push('/auth/callback');
  }

  const passwordMutation = useSignInWithPassword({
    onSuccess: redirectToDashboard,
  });
  const providerMutation = useSignInWithProvider();
  return (
    <div className="container h-full grid items-center text-left max-w-lg mx-auto overflow-auto">
      <div className="space-y-8 ">
        {/* <Auth providers={['twitter']} supabaseClient={supabase} /> */}
        <div className="flex flex-col items-start gap-0 w-[320px]">
          <T.H4 className="leading-7">Login to Mystoria Studios</T.H4>
          <T.P className="text-base text-left text-muted-foreground">
            Login with the account you used to signup.
          </T.P>
        </div>
        <RenderProviders
          providers={['google', 'github', 'discord']}
          isLoading={providerMutation.isLoading}
          onProviderLoginRequested={(provider) => {
            providerMutation.mutate({
              provider,
            });
          }}
        />
        <hr />
        <EmailAndPassword
          isLoading={passwordMutation.isLoading}
          onSubmit={(data) => {
            passwordMutation.mutate(data);
          }}
          view="sign-in"
        />
      </div>
    </div>
  );
}
