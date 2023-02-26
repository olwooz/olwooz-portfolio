import { create } from 'zustand';

interface DarkModeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface SlideMenuState {
  isOpen: boolean;
  toggleOpen: () => void;
}

const useStoreDarkMode = create<DarkModeState>((set) => ({
  darkMode: true,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

const useStoreSlideMenu = create<SlideMenuState>((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export { useStoreDarkMode, useStoreSlideMenu };
