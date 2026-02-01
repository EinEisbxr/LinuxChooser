// Desktop Environment data with scoring attributes

export interface DesktopEnvironment {
    id: string;
    name: string;
    logo: string;
    description: string; // German
    website: string;

    // Scoring attributes (0-10 scale)
    beginnerFriendly: number;
    customizability: number;
    resourceUsage: number; // Lower is better (1 = lightweight, 10 = heavy)
    modernLook: number;
    windowsLike: number; // Similarity to Windows
    macLike: number; // Similarity to macOS
    productivity: number;
    touchSupport: number;
    gamingFriendly: number;

    // RAM usage in MB (idle)
    idleRAM: number;

    // Display server
    waylandSupport: 'full' | 'partial' | 'none';
    x11Support: boolean;

    // Features
    tilingSupport: boolean;
    builtInApps: string[];

    // Target users
    targetUsers: ('beginner' | 'intermediate' | 'advanced' | 'poweruser')[];
}

export const desktopEnvironments: DesktopEnvironment[] = [
    {
        id: 'gnome',
        name: 'GNOME',
        logo: '/de/gnome.svg',
        description: 'Modernes, aufgeräumtes Design. Fokus auf Einfachheit.',
        website: 'https://gnome.org',

        beginnerFriendly: 8,
        customizability: 6,
        resourceUsage: 7,
        modernLook: 9,
        windowsLike: 3,
        macLike: 7,
        productivity: 7,
        touchSupport: 9,
        gamingFriendly: 7,

        idleRAM: 800,

        waylandSupport: 'full',
        x11Support: true,

        tilingSupport: false,
        builtInApps: ['Files', 'Web', 'Software', 'Settings', 'Terminal'],

        targetUsers: ['beginner', 'intermediate'],
    },
    {
        id: 'kde',
        name: 'KDE Plasma',
        logo: '/de/kde.svg',
        description: 'Hochgradig anpassbar mit Windows-ähnlichem Layout.',
        website: 'https://kde.org',

        beginnerFriendly: 8,
        customizability: 10,
        resourceUsage: 6,
        modernLook: 9,
        windowsLike: 8,
        macLike: 4,
        productivity: 9,
        touchSupport: 7,
        gamingFriendly: 9,

        idleRAM: 600,

        waylandSupport: 'full',
        x11Support: true,

        tilingSupport: true,
        builtInApps: [
            'Dolphin',
            'Konsole',
            'Kate',
            'Discover',
            'System Settings',
        ],

        targetUsers: ['beginner', 'intermediate', 'advanced', 'poweruser'],
    },
    {
        id: 'xfce',
        name: 'XFCE',
        logo: '/de/xfce.svg',
        description:
            'Leichtgewichtig und schnell. Klassisches Desktop-Erlebnis.',
        website: 'https://xfce.org',

        beginnerFriendly: 7,
        customizability: 8,
        resourceUsage: 3,
        modernLook: 5,
        windowsLike: 6,
        macLike: 2,
        productivity: 7,
        touchSupport: 3,
        gamingFriendly: 7,

        idleRAM: 300,

        waylandSupport: 'none',
        x11Support: true,

        tilingSupport: false,
        builtInApps: ['Thunar', 'Terminal', 'Mousepad', 'Settings Manager'],

        targetUsers: ['beginner', 'intermediate', 'advanced'],
    },
    {
        id: 'cinnamon',
        name: 'Cinnamon',
        logo: '/de/cinnamon.svg',
        description:
            'Traditionelles Desktop-Layout von Linux Mint. Sehr Windows-ähnlich.',
        website: 'https://github.com/linuxmint/cinnamon',

        beginnerFriendly: 10,
        customizability: 8,
        resourceUsage: 5,
        modernLook: 7,
        windowsLike: 9,
        macLike: 2,
        productivity: 8,
        touchSupport: 4,
        gamingFriendly: 7,

        idleRAM: 500,

        waylandSupport: 'partial',
        x11Support: true,

        tilingSupport: false,
        builtInApps: ['Nemo', 'Terminal', 'Text Editor', 'System Settings'],

        targetUsers: ['beginner', 'intermediate'],
    },
    {
        id: 'mate',
        name: 'MATE',
        logo: '/de/mate.svg',
        description: 'Klassisches GNOME 2 Erlebnis. Ressourcenschonend.',
        website: 'https://mate-desktop.org',

        beginnerFriendly: 8,
        customizability: 7,
        resourceUsage: 4,
        modernLook: 4,
        windowsLike: 7,
        macLike: 2,
        productivity: 7,
        touchSupport: 3,
        gamingFriendly: 6,

        idleRAM: 350,

        waylandSupport: 'none',
        x11Support: true,

        tilingSupport: false,
        builtInApps: ['Caja', 'Pluma', 'Terminal', 'Control Center'],

        targetUsers: ['beginner', 'intermediate'],
    },
    {
        id: 'lxqt',
        name: 'LXQt',
        logo: '/de/lxqt.svg',
        description: 'Extrem leichtgewichtig. Perfekt für ältere Hardware.',
        website: 'https://lxqt-project.org',

        beginnerFriendly: 6,
        customizability: 7,
        resourceUsage: 2,
        modernLook: 5,
        windowsLike: 6,
        macLike: 2,
        productivity: 6,
        touchSupport: 2,
        gamingFriendly: 5,

        idleRAM: 200,

        waylandSupport: 'partial',
        x11Support: true,

        tilingSupport: false,
        builtInApps: [
            'PCManFM-Qt',
            'QTerminal',
            'FeatherPad',
            'LXQt Configuration',
        ],

        targetUsers: ['intermediate', 'advanced'],
    },
    {
        id: 'budgie',
        name: 'Budgie',
        logo: '/de/budgie.svg',
        description: 'Elegant und modern. Ursprünglich von Solus entwickelt.',
        website: 'https://blog.buddiesofbudgie.org',

        beginnerFriendly: 9,
        customizability: 6,
        resourceUsage: 5,
        modernLook: 8,
        windowsLike: 5,
        macLike: 5,
        productivity: 7,
        touchSupport: 5,
        gamingFriendly: 6,

        idleRAM: 500,

        waylandSupport: 'none',
        x11Support: true,

        tilingSupport: false,
        builtInApps: ['Nemo', 'Tilix', 'Raven Panel'],

        targetUsers: ['beginner', 'intermediate'],
    },
    {
        id: 'pantheon',
        name: 'Pantheon',
        logo: '/de/pantheon.svg',
        description: 'macOS-ähnliches Design von elementary OS.',
        website: 'https://elementary.io',

        beginnerFriendly: 9,
        customizability: 3,
        resourceUsage: 5,
        modernLook: 9,
        windowsLike: 2,
        macLike: 9,
        productivity: 7,
        touchSupport: 6,
        gamingFriendly: 5,

        idleRAM: 500,

        waylandSupport: 'none',
        x11Support: true,

        tilingSupport: false,
        builtInApps: ['Files', 'Terminal', 'Code', 'AppCenter'],

        targetUsers: ['beginner'],
    },
    {
        id: 'deepin',
        name: 'Deepin DE',
        logo: '/de/deepin.svg',
        description: 'Wunderschönes, modernes Design aus China.',
        website: 'https://www.deepin.org',

        beginnerFriendly: 9,
        customizability: 5,
        resourceUsage: 6,
        modernLook: 10,
        windowsLike: 5,
        macLike: 6,
        productivity: 7,
        touchSupport: 7,
        gamingFriendly: 6,

        idleRAM: 600,

        waylandSupport: 'partial',
        x11Support: true,

        tilingSupport: false,
        builtInApps: [
            'File Manager',
            'Terminal',
            'Text Editor',
            'Control Center',
        ],

        targetUsers: ['beginner', 'intermediate'],
    },
    {
        id: 'i3',
        name: 'i3',
        logo: '/de/i3.svg',
        description:
            'Tastatur-zentriert, Fenster werden automatisch angeordnet.',
        website: 'https://i3wm.org',

        beginnerFriendly: 2,
        customizability: 10,
        resourceUsage: 1,
        modernLook: 4,
        windowsLike: 1,
        macLike: 1,
        productivity: 10,
        touchSupport: 1,
        gamingFriendly: 6,

        idleRAM: 50,

        waylandSupport: 'none',
        x11Support: true,

        tilingSupport: true,
        builtInApps: [],

        targetUsers: ['advanced', 'poweruser'],
    },
    {
        id: 'sway',
        name: 'Sway',
        logo: '/de/sway.svg',
        description:
            'Wie i3, mit moderner Anzeigetechnik. Fenster werden automatisch angeordnet.',
        website: 'https://swaywm.org',

        beginnerFriendly: 2,
        customizability: 10,
        resourceUsage: 1,
        modernLook: 5,
        windowsLike: 1,
        macLike: 1,
        productivity: 10,
        touchSupport: 3,
        gamingFriendly: 7,

        idleRAM: 50,

        waylandSupport: 'full',
        x11Support: false,

        tilingSupport: true,
        builtInApps: [],

        targetUsers: ['advanced', 'poweruser'],
    },
    {
        id: 'hyprland',
        name: 'Hyprland',
        logo: '/de/hyprland.svg',
        description:
            'Modern mit Animationen. Fenster werden automatisch angeordnet.',
        website: 'https://hyprland.org',

        beginnerFriendly: 2,
        customizability: 10,
        resourceUsage: 2,
        modernLook: 9,
        windowsLike: 1,
        macLike: 2,
        productivity: 9,
        touchSupport: 4,
        gamingFriendly: 8,

        idleRAM: 100,

        waylandSupport: 'full',
        x11Support: false,

        tilingSupport: true,
        builtInApps: [],

        targetUsers: ['advanced', 'poweruser'],
    },
    {
        id: 'cosmic',
        name: 'COSMIC',
        logo: '/de/cosmic.svg',
        description: 'Neuer Desktop von System76, noch in Entwicklung.',
        website: 'https://system76.com/cosmic',

        beginnerFriendly: 7,
        customizability: 9,
        resourceUsage: 5,
        modernLook: 9,
        windowsLike: 5,
        macLike: 4,
        productivity: 8,
        touchSupport: 6,
        gamingFriendly: 8,

        idleRAM: 500,

        waylandSupport: 'full',
        x11Support: false,

        tilingSupport: true,
        builtInApps: ['COSMIC Files', 'COSMIC Terminal', 'COSMIC Settings'],

        targetUsers: ['beginner', 'intermediate', 'advanced'],
    },
    {
        id: 'icewm',
        name: 'IceWM',
        logo: '/de/icewm.svg',
        description:
            'Leichtgewichtiger Fenstermanager mit klassischem Look. Extrem ressourcenschonend.',
        website: 'https://ice-wm.org',

        beginnerFriendly: 4,
        customizability: 7,
        resourceUsage: 1,
        modernLook: 3,
        windowsLike: 6,
        macLike: 1,
        productivity: 6,
        touchSupport: 1,
        gamingFriendly: 5,

        idleRAM: 80,

        waylandSupport: 'none',
        x11Support: true,

        tilingSupport: false,
        builtInApps: [],

        targetUsers: ['advanced', 'poweruser'],
    },
    {
        id: 'fluxbox',
        name: 'Fluxbox',
        logo: '/de/fluxbox.svg',
        description:
            'Schneller, konfigurierbarer Fenstermanager mit Tabs. Ideal für ältere Computer.',
        website: 'http://fluxbox.org',

        beginnerFriendly: 3,
        customizability: 8,
        resourceUsage: 1,
        modernLook: 3,
        windowsLike: 4,
        macLike: 1,
        productivity: 6,
        touchSupport: 1,
        gamingFriendly: 5,

        idleRAM: 70,

        waylandSupport: 'none',
        x11Support: true,

        tilingSupport: false,
        builtInApps: [],

        targetUsers: ['advanced', 'poweruser'],
    },
    {
        id: 'jwm',
        name: 'JWM',
        logo: '/de/jwm.svg',
        description:
            "Joe's Window Manager - extrem leicht und schnell. Perfekt für sehr alte Hardware.",
        website: 'https://joewing.net/projects/jwm/',

        beginnerFriendly: 4,
        customizability: 6,
        resourceUsage: 1,
        modernLook: 2,
        windowsLike: 5,
        macLike: 1,
        productivity: 5,
        touchSupport: 1,
        gamingFriendly: 5,

        idleRAM: 50,

        waylandSupport: 'none',
        x11Support: true,

        tilingSupport: false,
        builtInApps: [],

        targetUsers: ['advanced', 'poweruser'],
    },
    {
        id: 'herbstluftwm',
        name: 'herbstluftwm',
        logo: '/de/herbstluftwm.svg',
        description:
            'Manueller Kachel-Fenstermanager. Konfiguration über Shell-Befehle.',
        website: 'https://herbstluftwm.org',

        beginnerFriendly: 2,
        customizability: 10,
        resourceUsage: 1,
        modernLook: 4,
        windowsLike: 1,
        macLike: 1,
        productivity: 8,
        touchSupport: 1,
        gamingFriendly: 5,

        idleRAM: 50,

        waylandSupport: 'none',
        x11Support: true,

        tilingSupport: true,
        builtInApps: [],

        targetUsers: ['advanced', 'poweruser'],
    },
    {
        id: 'openbox',
        name: 'Openbox',
        logo: '/de/openbox.svg',
        description:
            'Minimalistischer Fenstermanager. Basis für viele leichtgewichtige Distributionen.',
        website: 'http://openbox.org',

        beginnerFriendly: 3,
        customizability: 8,
        resourceUsage: 1,
        modernLook: 3,
        windowsLike: 4,
        macLike: 1,
        productivity: 6,
        touchSupport: 1,
        gamingFriendly: 5,

        idleRAM: 60,

        waylandSupport: 'none',
        x11Support: true,

        tilingSupport: false,
        builtInApps: [],

        targetUsers: ['advanced', 'poweruser'],
    },
];

// Helper function to get DE by ID
export function getDEById(id: string): DesktopEnvironment | undefined {
    return desktopEnvironments.find((de) => de.id === id);
}

// Helper function to get lightweight DEs
export function getLightweightDEs(maxRAM: number = 400): DesktopEnvironment[] {
    return desktopEnvironments.filter((de) => de.idleRAM <= maxRAM);
}

// Helper function to get DEs with Wayland support
export function getWaylandDEs(): DesktopEnvironment[] {
    return desktopEnvironments.filter((de) => de.waylandSupport !== 'none');
}
