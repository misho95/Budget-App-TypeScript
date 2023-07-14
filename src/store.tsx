import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const store = ((set) => ({
    darkMode: false,
    switchDarkMode: () => set((state) => ({darkMode: !state.darkMode})),
}));

const local = persist(store, { name: 'user_settings'});
const baseStore = create(local);

export default baseStore;