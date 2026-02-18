import dynamic from 'next/dynamic';

const DataCommandScreen = dynamic(
  () => import('@/components/private-circle/screens/DataCommandScreen').then((mod) => mod.DataCommandScreen),
  { ssr: true }
);

export default function DataCommandPage() {
  return <DataCommandScreen />;
}
