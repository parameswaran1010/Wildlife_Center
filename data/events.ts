export interface Event {
    id: string;
    title: string;
    date: string; // ISO date string or display string
    description: string;
    location: string;
    image?: string; // Optional image URL
    fullDescription: string;
    time: string;
}

export const EVENTS: Event[] = [
    {
        id: "ev_001",
        title: "Dawn Chorus Walk",
        date: "2024-05-12",
        time: "05:30 AM",
        location: "Main Woodlands Entrance",
        description: "Experience the magic of the morning bird song with our expert ornithologists.",
        fullDescription: "Join us for an unforgettable early morning experience. The Dawn Chorus is one of nature's most uplifting events. Our guides will help you identify different bird songs and calls. Includes a hot breakfast at the lodge afterwards.",
        image: "/assets/images/Common_toad.jpg"
    },
    {
        id: "ev_002",
        title: "Wildlife Photography Workshop",
        date: "2024-05-18",
        time: "10:00 AM",
        location: "Education Center",
        description: "Learn to capture the perfect shot without disturbing the animals.",
        fullDescription: "Perfect for beginners and enthusiasts alike. Professional wildlife photographer Sarah Jenkins will teach you techniques for lighting, composition, and ethical wildlife photography. Bring your own camera!",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "ev_003",
        title: "Bat Detection Night",
        date: "2024-05-25",
        time: "08:00 PM",
        location: "Wetlands Boardwalk",
        description: "Use ultrasonic detectors to track our nocturnal flying residents.",
        fullDescription: "As the sun sets, the bats come out to play. We'll be using heterodyne bat detectors to hear their echolocation calls. Wear warm clothes and good walking boots. Torches provided.",
        image: "https://images.unsplash.com/photo-1497206365907-f5e1f19b03f4?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "ev_004",
        title: "Hedgehog First Aid",
        date: "2024-06-02",
        time: "02:00 PM",
        location: "Animal Hospital",
        description: "Learn how to help injured hedgehogs in your garden.",
        fullDescription: "Hedgehogs are in decline, but you can help. This workshop covers basic first aid, how to spot a sick hedgehog, and how to make your garden hedgehog-friendly. Includes a tour of our rehabilitation unit.",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=800"
    }
];
