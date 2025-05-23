import { cn } from '../../lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn('flex w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none', className)}
      {...props}
    />
  );
}
