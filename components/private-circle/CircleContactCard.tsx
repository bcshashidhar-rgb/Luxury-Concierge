import { Card } from '@/components/ui/Card';
import { CircleContact } from '@/types/private-circle';

type CircleContactCardProps = {
  contact: CircleContact;
};

export function CircleContactCard({ contact }: CircleContactCardProps) {
  return (
    <Card className="space-y-2">
      <h3 className="text-base font-medium">{contact.name}</h3>
      <p className="text-sm text-muted">{contact.role}</p>
      <p className="text-xs uppercase tracking-[0.1em] text-accent">{contact.availability}</p>
    </Card>
  );
}
