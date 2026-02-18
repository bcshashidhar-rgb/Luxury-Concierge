import dynamic from 'next/dynamic';

const IntelligenceScreen = dynamic(
  () => import('@/components/private-circle/screens/IntelligenceScreen').then((mod) => mod.IntelligenceScreen),
  { ssr: false }
);

export default function IntelligencePage() {
  return <IntelligenceScreen />;
}
