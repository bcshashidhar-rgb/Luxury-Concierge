import dynamic from 'next/dynamic';

const PreferencesScreen = dynamic(
  () => import('@/components/private-circle/screens/PreferencesScreen').then((mod) => mod.PreferencesScreen),
  { ssr: false }
);

export default function PreferencesPage() {
  return <PreferencesScreen />;
}
