import { useState } from 'react';
import { Button } from '../ui/button';
import { Label } from '@/components/ui/label';
import { classNames } from '@/utils/classNames';
import { T } from '@/components/ui/Typography';

export const Password = ({
  onSubmit,
  isLoading,
  successMessage,
  label = 'Password',
  buttonLabel = 'Update',
}: {
  onSubmit: (password: string) => void;
  isLoading: boolean;
  successMessage?: string;
  label?: string;
  buttonLabel?: string;
}) => {
  const [password, setPassword] = useState<string>('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(password);
      }}
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-muted-foreground">
            {label}
          </Label>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              disabled={isLoading}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="email"
              required
              className="block w-full appearance-none rounded-md border bg-neutral-50/10 dark:bg-neutral-800/20 h-10 px-3 py-3 placeholder-muted-foreground shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          {isLoading ? (
            <Button
              disabled
              type="submit"
              className={classNames(
                'flex w-full justify-center rounded-lg border border-transparent py-3 text-white dark:text-black px-4 text-sm font-medium  shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
                isLoading
                  ? 'bg-yellow-300 dark:bg-yellow-700 '
                  : 'bg-black dark:bg-white hover:bg-neutral-900 dark:hover:bg-neutral-100  '
              )}
            >
              Loading...
            </Button>
          ) : (
            <Button
              type="submit"
              className={classNames(
                'flex w-full justify-center rounded-lg border border-transparent py-2 text-white dark:text-black px-4 text-sm font-medium  shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
                isLoading
                  ? 'bg-yellow-300 dark:bg-yellow-700 '
                  : 'bg-black dark:bg-white hover:bg-neutral-900 dark:hover:bg-neutral-100  '
              )}
            >
              {buttonLabel}
            </Button>
          )}
        </div>
        <div>
          {successMessage ? (
            <T.P className="text-sm text-green-500 dark:text-green-400 text-center">
              {successMessage}
            </T.P>
          ) : null}
        </div>
      </div>
    </form>
  );
};
