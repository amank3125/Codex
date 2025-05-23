import { cn } from '../../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn('flex h-10 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none', className)}
      {...props}
    />
  );
}
