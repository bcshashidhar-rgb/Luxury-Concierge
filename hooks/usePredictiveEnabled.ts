'use client';

import { usePrivateCircleStore } from '@/store/private-circle.store';

export const usePredictiveEnabled = (): boolean =>
  usePrivateCircleStore((state) => state.permissionState.canUsePredictive);
