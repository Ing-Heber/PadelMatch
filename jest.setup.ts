import { jest } from '@jest/globals';

// Keep router primitives renderable in unit tests without mounting a full navigation container.
jest.mock('expo-router', () => ({
  Stack: ({ children }: { children?: unknown }) => children ?? null,
  Slot: ({ children }: { children?: unknown }) => children ?? null,
  Link: ({ children }: { children?: unknown }) => children ?? null,
  Redirect: () => null,
  usePathname: () => '/',
  useSegments: () => [],
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    canGoBack: jest.fn(() => false),
  }),
}));

