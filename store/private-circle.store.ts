'use client';

import { create } from 'zustand';
import { permissionsService } from '@/services/permissions.service';
import { TravelDNA } from '@/types/private-circle';

type Mood = 'Focus' | 'Relaxed' | 'Exploration';

type PrivateCircleState = {
  userState: {
    personalizationEnabled: boolean;
  };
  journeyState: {
    travelDNA: TravelDNA;
  };
  preferenceState: {
    connectedServices: Record<string, boolean>;
  };
  permissionState: {
    canUsePredictive: boolean;
  };
  selectedMood: Mood;
  setPersonalization: (enabled: boolean) => void;
  setServiceToggle: (id: string, enabled: boolean) => void;
  setSelectedMood: (mood: Mood) => void;
  updateTravelDNA: (dna: TravelDNA) => void;
};

export const usePrivateCircleStore = create<PrivateCircleState>((set) => ({
  userState: {
    personalizationEnabled: true
  },
  journeyState: {
    travelDNA: {
      pace: 'Structured Flex',
      dining: 'Executive Quiet Dining',
      suitePreference: 'High floor, skyline facing'
    }
  },
  preferenceState: {
    connectedServices: {
      chauffeur: true,
      'private-dining': true,
      'in-suite-spa': false
    }
  },
  permissionState: {
    canUsePredictive: true
  },
  selectedMood: 'Focus',
  setPersonalization: (enabled) =>
    set(() => ({
      userState: { personalizationEnabled: enabled },
      permissionState: {
        canUsePredictive: permissionsService.canUsePredictiveFeatures(enabled)
      }
    })),
  setServiceToggle: (id, enabled) =>
    set((state) => ({
      preferenceState: {
        connectedServices: {
          ...state.preferenceState.connectedServices,
          [id]: enabled
        }
      }
    })),
  setSelectedMood: (mood) => set(() => ({ selectedMood: mood })),
  updateTravelDNA: (dna) =>
    set(() => ({
      journeyState: { travelDNA: dna }
    }))
}));
