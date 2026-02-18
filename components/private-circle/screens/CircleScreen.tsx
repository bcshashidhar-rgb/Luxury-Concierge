import { CircleContactCard } from '@/components/private-circle/CircleContactCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { userService } from '@/services/user.service';

export async function CircleScreen() {
  const contacts = await userService.getCircleContacts();

  return (
    <section className="space-y-4">
      <SectionHeader title="Circle" subtitle="Your dedicated hospitality team" />
      <div className="grid gap-4 md:grid-cols-2">
        {contacts.map((contact) => (
          <CircleContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </section>
  );
}
