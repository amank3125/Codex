import { cn } from '../../lib/utils';

export function Card({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('rounded-lg border bg-card text-card-foreground shadow-sm p-6', className)}>
      {children}
    </div>
  );
}
