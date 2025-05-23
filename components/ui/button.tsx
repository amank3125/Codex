import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90',
        className
      )}
      {...props}
    />
  );
}
