import Image from 'next/image';

import { Card } from '@/components/ui/Card';
import { CircleContact } from '@/types/private-circle';

type CircleContactCardProps = {
  contact: CircleContact;
};

export function CircleContactCard({ contact }: CircleContactCardProps) {
  return (
    <Card className="space-y-3 overflow-hidden">
      <div className="relative -mx-5 -mt-5 h-40">
        <Image src={contact.imageUrl} alt={contact.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <h3 className="text-base font-medium">{contact.name}</h3>
      <p className="text-sm text-muted">{contact.role}</p>
      <p className="text-xs uppercase tracking-[0.1em] text-accent">{contact.availability}</p>
    </Card>
  );
}
