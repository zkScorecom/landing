import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Types
interface User {
  address: string;
  identityId?: string;
  score?: number;
  achievements: string[];
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
    privacy: {
      defaultScoreDisclosure: 'exact' | 'bucket' | 'boolean' | 'none';
      allowAnalytics: boolean;
    };
  };
}

interface NotificationState {
  notifications: Array<{
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message: string;
    timestamp: number;
    read: boolean;
  }>;
  unreadCount: number;
}

interface UIState {
  sidebarOpen: boolean;
  activeTab: string;
  modals: {
    createIdentity: boolean;
    privacySettings: boolean;
    achievementDetails: boolean;
  };
  loading: {
    [key: string]: boolean;
  };
}

// Store interface
interface AppState {
  // User state
  user: User | null;
  setUser: (user: User | null) => void;
  updateUserPreferences: (preferences: Partial<User['preferences']>) => void;
  
  // Notifications
  notifications: NotificationState;
  addNotification: (notification: Omit<NotificationState['notifications'][0], 'id' | 'timestamp' | 'read'>) => void;
  markNotificationRead: (id: string) => void;
  clearNotifications: () => void;
  
  // UI state
  ui: UIState;
  setSidebarOpen: (open: boolean) => void;
  setActiveTab: (tab: string) => void;
  openModal: (modal: keyof UIState['modals']) => void;
  closeModal: (modal: keyof UIState['modals']) => void;
  setLoading: (key: string, loading: boolean) => void;
  
  // Actions
  reset: () => void;
}

// Create store
export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial user state
      user: null,
      
      setUser: (user) => set({ user }),
      
      updateUserPreferences: (preferences) => set((state) => ({
        user: state.user ? {
          ...state.user,
          preferences: { ...state.user.preferences, ...preferences }
        } : null
      })),
      
      // Initial notifications state
      notifications: {
        notifications: [],
        unreadCount: 0,
      },
      
      addNotification: (notification) => set((state) => {
        const newNotification = {
          ...notification,
          id: Date.now().toString(),
          timestamp: Date.now(),
          read: false,
        };
        
        return {
          notifications: {
            notifications: [newNotification, ...state.notifications.notifications].slice(0, 50), // Keep last 50
            unreadCount: state.notifications.unreadCount + 1,
          }
        };
      }),
      
      markNotificationRead: (id) => set((state) => ({
        notifications: {
          notifications: state.notifications.notifications.map(n => 
            n.id === id ? { ...n, read: true } : n
          ),
          unreadCount: Math.max(0, state.notifications.unreadCount - 1),
        }
      })),
      
      clearNotifications: () => set({
        notifications: {
          notifications: [],
          unreadCount: 0,
        }
      }),
      
      // Initial UI state
      ui: {
        sidebarOpen: false,
        activeTab: 'overview',
        modals: {
          createIdentity: false,
          privacySettings: false,
          achievementDetails: false,
        },
        loading: {},
      },
      
      setSidebarOpen: (open) => set((state) => ({
        ui: { ...state.ui, sidebarOpen: open }
      })),
      
      setActiveTab: (tab) => set((state) => ({
        ui: { ...state.ui, activeTab: tab }
      })),
      
      openModal: (modal) => set((state) => ({
        ui: {
          ...state.ui,
          modals: { ...state.ui.modals, [modal]: true }
        }
      })),
      
      closeModal: (modal) => set((state) => ({
        ui: {
          ...state.ui,
          modals: { ...state.ui.modals, [modal]: false }
        }
      })),
      
      setLoading: (key, loading) => set((state) => ({
        ui: {
          ...state.ui,
          loading: { ...state.ui.loading, [key]: loading }
        }
      })),
      
      reset: () => set({
        user: null,
        notifications: {
          notifications: [],
          unreadCount: 0,
        },
        ui: {
          sidebarOpen: false,
          activeTab: 'overview',
          modals: {
            createIdentity: false,
            privacySettings: false,
            achievementDetails: false,
          },
          loading: {},
        },
      }),
    }),
    {
      name: 'anylayer-app-store',
      partialize: (state) => ({
        user: state.user,
        notifications: state.notifications,
        ui: {
          ...state.ui,
          modals: {
            createIdentity: false,
            privacySettings: false,
            achievementDetails: false,
          },
          loading: {},
        },
      }),
    }
  )
);

// Utility hooks
export const useNotifications = () => {
  const { notifications, addNotification, markNotificationRead, clearNotifications } = useStore();
  return { notifications, addNotification, markNotificationRead, clearNotifications };
};

export const useUI = () => {
  const { ui, setSidebarOpen, setActiveTab, openModal, closeModal, setLoading } = useStore();
  return { ui, setSidebarOpen, setActiveTab, openModal, closeModal, setLoading };
};

export const useUserPreferences = () => {
  const { user, updateUserPreferences } = useStore();
  return { 
    preferences: user?.preferences, 
    updatePreferences: updateUserPreferences 
  };
};

// Selector hooks
export const useIsLoading = (key: string) => {
  return useStore((state) => state.ui.loading[key] || false);
};

export const useUnreadNotifications = () => {
  return useStore((state) => state.notifications.unreadCount);
};

export const useActiveModal = () => {
  return useStore((state) => {
    const modals = state.ui.modals;
    return Object.entries(modals).find(([, open]) => open)?.[0] || null;
  });
};
