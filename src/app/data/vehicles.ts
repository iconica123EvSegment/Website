export interface Vehicle {
  id: string;
  name: string;
  model: string;
  category: 'Low Speed' | 'High Speed';
  tagline: string;
  description: string;
  range?: number;
  topSpeed?: number;
  motor: string;
  chargingTime?: number;
  battery: string;
  batteryType: 'Lithium-ion' | 'Lead Acid';
  voltage: string;
  price: number;
  image: string;
  images: string[]; // Multiple images for gallery
  features: string[];
  detailedSpecs?: {
    dimensions?: string;
    weight?: string;
    brakes?: string;
    suspension?: string;
    tires?: string;
    colors?: string[];
    loadCapacity?: string;
  };
}

const heroScooter1 = 'https://via.placeholder.com/400x300?text=Hero+Scooter+1';
const heroScooter2 = 'https://via.placeholder.com/400x300?text=Hero+Scooter+2';

export const vehicles: Vehicle[] = [
  // LOW SPEED VEHICLES
  {
    id: 'zylo',
    name: 'Iconic Zylo',
    model: 'EV Motors PRINCE',
    category: 'Low Speed',
    tagline: 'Premium Urban Commuting',
    description: 'Premium electric scooter with BLDC hub motor and dual tube suspension. Designed for smooth urban commuting with modern styling.',
    topSpeed: 25,
    motor: 'BLDC Hub Motor',
    battery: 'Swappable Battery System',
    batteryType: 'Lead Acid',
    voltage: '60-72V',
    price: 54999,
    image: heroScooter1,
    images: [
      '/vehicle/a.png',
      '/vehicle/b.png',
      '/vehicle/vexo.png',
      '/vehicle/zylo.png'
    ],
    features: ['LED Headlight', 'Alloy Wheels', 'USB Charging Port', 'Micro Charger with Auto Cut-off'],
    detailedSpecs: {
      brakes: 'Disc (Front & Rear)',
      suspension: 'Dual Tube Technology',
      loadCapacity: '150 KG',
      colors: ['Neon Green', 'Electric Blue', 'Midnight Black']
    }
  },
  {
    id: 'vexo',
    name: 'Iconic Vexo',
    model: 'EV Motors GRACE',
    category: 'Low Speed',
    tagline: 'Graceful City Mobility',
    description: 'Elegant design with reliable performance for daily urban commuting. Features modern styling and premium comfort.',
    topSpeed: 25,
    motor: 'BLDC Hub Motor',
    battery: 'Swappable Battery System',
    batteryType: 'Lead Acid',
    voltage: '60-72V',
    price: 54999,
    image: heroScooter2,
    images: [
      '/vehicle/a.png',
      '/vehicle/b.png',
      '/vehicle/vexo.png',
      '/vehicle/zylo.png'
    ],
    features: ['LED Headlight', 'Alloy Wheels', 'USB Charging Port', 'Micro Charger with Auto Cut-off'],
    detailedSpecs: {
      brakes: 'Disc (Front & Rear)',
      suspension: 'Dual Tube Technology',
      loadCapacity: '150 KG',
      colors: ['Pearl White', 'Teal Blue', 'Graphite Grey']
    }
  },
  {
    id: 'navo',
    name: 'Iconic Navo',
    model: 'EV Motors EVITA PRO',
    category: 'Low Speed',
    tagline: 'Navigate Your Future',
    description: 'Advanced version with improved performance and premium urban ride comfort. Perfect for daily commuters.',
    topSpeed: 25,
    motor: 'BLDC Hub Motor',
    battery: 'Swappable Battery System',
    batteryType: 'Lead Acid',
    voltage: '60-72V',
    price: 56999,
    image: 'https://images.unsplash.com/photo-1609682243212-7b5d77f37ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjBzdHVkaW8lMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzM0ODgyNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      '/vehicle/a.png',
      '/vehicle/b.png',
      '/vehicle/vexo.png',
      '/vehicle/zylo.png'
    ],
    features: ['LED Headlight', 'Alloy Wheels', 'USB Charging Port', 'Micro Charger with Auto Cut-off'],
    detailedSpecs: {
      brakes: 'Disc (Front & Rear)',
      suspension: 'Dual Tube Technology',
      loadCapacity: '150 KG',
      colors: ['White Pearl', 'Eco Green', 'Sky Blue']
    }
  },
  {
    id: 'vira',
    name: 'Iconic Vira',
    model: 'EV Motors ENERGY PRO',
    category: 'Low Speed',
    tagline: 'Reliable Energy',
    description: 'Reliable scooter with strong braking and smooth suspension for daily use. Built for comfort and efficiency.',
    topSpeed: 25,
    motor: 'BLDC Hub Motor',
    battery: 'Swappable Battery System',
    batteryType: 'Lead Acid',
    voltage: '60-72V',
    price: 55999,
    image: heroScooter1,
    images: [heroScooter1, heroScooter2, heroScooter1, heroScooter2],
    features: ['LED Headlight', 'Alloy Wheels', 'USB Charging Port', 'Micro Charger with Auto Cut-off'],
    detailedSpecs: {
      brakes: 'Disc (Front & Rear)',
      suspension: 'Dual Tube Technology',
      loadCapacity: '150 KG',
      colors: ['Energy Red', 'Pro Black', 'Silver']
    }
  },
  {
    id: 'zeno',
    name: 'Iconic Zeno',
    model: 'EV Motors GLIDE',
    category: 'Low Speed',
    tagline: 'Smooth Gliding Experience',
    description: 'Balanced scooter offering performance + comfort for city riders. Perfect blend of style and functionality.',
    topSpeed: 25,
    motor: 'BLDC Hub Motor',
    battery: 'Swappable Battery System',
    batteryType: 'Lead Acid',
    voltage: '60-72V',
    price: 54999,
    image: 'https://images.unsplash.com/photo-1675186403510-555b502fa699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJpYyUyMHNjb290ZXIlMjBibHVlJTIwdGVhbHxlbnwxfHx8fDE3NzM0ODgyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      '/vehicle/a.png',
      '/vehicle/b.png',
      '/vehicle/vexo.png',
      '/vehicle/zylo.png'
    ],
    features: ['LED Headlight', 'Alloy Wheels', 'USB Charging Port', 'Micro Charger with Auto Cut-off'],
    detailedSpecs: {
      brakes: 'Disc (Front & Rear)',
      suspension: 'Dual Tube Technology',
      loadCapacity: '150 KG',
      colors: ['Glide Blue', 'Storm Grey', 'White']
    }
  },
  {
    id: 'ravo',
    name: 'Iconica Ravo',
    model: 'EV Motors WINNER PRO',
    category: 'Low Speed',
    tagline: 'Winner in Every Way',
    description: 'Versatile low-speed scooter with multiple voltage options. Built to win your daily commute.',
    topSpeed: 25,
    motor: 'BLDC Hub Motor',
    battery: 'Swappable Battery System',
    batteryType: 'Lead Acid',
    voltage: '48V / 60V / 72V',
    price: 52999,
    image: 'https://images.unsplash.com/photo-1631009640015-918990ad1914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MzQ4ODI0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      '/vehicle/a.png',
      '/vehicle/b.png',
      '/vehicle/vexo.png',
      '/vehicle/zylo.png'
    ],
    features: ['LED Headlight', 'Alloy Wheels', 'USB Charging Port', 'Micro Charger with Auto Cut-off'],
    detailedSpecs: {
      brakes: 'Disc (Front) / Drum (Rear)',
      suspension: 'Dual Tube Technology',
      loadCapacity: '150 KG',
      colors: ['Winner Red', 'Pro Black', 'Champion Blue']
    }
  },

  // HIGH SPEED VEHICLES
  {
    id: 'zylo-hs',
    name: 'Iconica Zylo HS',
    model: 'EV Motors ZYLO PRO',
    category: 'High Speed',
    tagline: 'High-Speed Performance',
    description: 'Upgraded high-speed variant with powerful motor and advanced features. Experience the thrill of speed with cutting-edge technology.',
    range: 105,
    topSpeed: 70,
    motor: '1500W - 2500W BLDC Hub Motor',
    battery: 'Swappable Battery System',
    batteryType: 'Lithium-ion',
    voltage: '72V',
    chargingTime: 4.5,
    price: 89999,
    image: 'https://images.unsplash.com/photo-1655432244940-c361ff5e441f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbW9iaWxpdHklMjBzY29vdGVyfGVufDF8fHx8MTc3MzQ4ODI0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      '/vehicle/a.png',
      '/vehicle/b.png',
      '/vehicle/vexo.png',
      '/vehicle/zylo.png'
    ],
    features: ['Digital Display', 'Keyless Start', 'Anti-theft Alarm', 'Reverse Mode', 'USB Charging'],
    detailedSpecs: {
      brakes: 'Disc (Front & Rear)',
      suspension: 'Hydraulic Telescopic',
      loadCapacity: '150 KG',
      colors: ['Quantum Silver', 'Cyber Purple', 'Matrix Black']
    }
  },
  {
    id: 'vexo-hs',
    name: 'Iconica Vexo HS',
    model: 'EV Motors VEXO PRO',
    category: 'High Speed',
    tagline: 'Velocity Unleashed',
    description: 'High-speed variant with sporty design and premium features. Built for riders who demand both speed and style.',
    range: 105,
    topSpeed: 70,
    motor: '1500W - 2500W BLDC Hub Motor',
    battery: 'Swappable Battery System',
    batteryType: 'Lithium-ion',
    voltage: '72V',
    chargingTime: 4.5,
    price: 89999,
    image: 'https://images.unsplash.com/photo-1759213215109-081f2c1f67de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjB1cmJhbiUyMG1vYmlsaXR5fGVufDF8fHx8MTc3MzQ4ODI0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1759213215109-081f2c1f67de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjB1cmJhbiUyMG1vYmlsaXR5fGVufDF8fHx8MTc3MzQ4ODI0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1623079400394-f07956928c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjBkZXRhaWwlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3MzQ5MjgzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1696327461171-2b341c349c9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjBzdHVkaW8lMjB3aGl0ZXxlbnwxfHx8fDE3NzM0OTI4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1675186403510-555b502fa699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJpYyUyMHNjb290ZXIlMjBibHVlJTIwdGVhbHxlbnwxfHx8fDE3NzM0ODgyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    features: ['Digital Display', 'Keyless Start', 'Anti-theft Alarm', 'Reverse Mode', 'USB Charging'],
    detailedSpecs: {
      brakes: 'Disc (Front & Rear)',
      suspension: 'Hydraulic Telescopic',
      loadCapacity: '150 KG',
      colors: ['Racing Red', 'Velocity Orange', 'Stealth Black']
    }
  },
  {
    id: 'vira-hs',
    name: 'Iconica Vira HS',
    model: 'EV Motors VIRA PRO',
    category: 'High Speed',
    tagline: 'High-Speed Performance',
    description: 'High-speed variant with advanced features.',
    range: 120,
    topSpeed: 75,
    motor: '2000W - 2500W BLDC',
    battery: 'Swappable Battery System',
    batteryType: 'Lithium-ion',
    voltage: '72V',
    chargingTime: 4.5,
    price: 94999,
    image: heroScooter2,
    images: [
      '/vehicle/a.png',
      '/vehicle/b.png',
      '/vehicle/vexo.png',
      '/vehicle/zylo.png'
    ],
    features: ['Digital Display', 'Keyless Start', 'Anti-theft Alarm', 'Reverse Mode', 'USB Charging'],
    detailedSpecs: {
      brakes: 'Disc (Front & Rear)',
      suspension: 'Hydraulic Telescopic',
      loadCapacity: '150 KG',
      colors: ['Racing Red', 'Velocity Orange', 'Stealth Black']
    }
  },
  {
    id: 'xfactor',
    name: 'Iconica X-Factor',
    model: 'Premium High-Speed Smart Scooter',
    category: 'High Speed',
    tagline: 'The Ultimate Experience',
    description: 'Premium high-speed smart scooter with advanced connectivity and safety features. The pinnacle of electric scooter technology.',
    range: 135,
    topSpeed: 80,
    motor: '2500W - 3000W BLDC',
    battery: 'Removable Lithium-ion',
    batteryType: 'Lithium-ion',
    voltage: '72V',
    chargingTime: 5,
    price: 129999,
    image: 'https://images.unsplash.com/photo-1656639334323-3fbb64a1686a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHNjb290ZXIlMjByaWRlcnxlbnwxfHx8fDE3NzM0ODgyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      '/vehicle/a.png',
      '/vehicle/b.png',
      '/vehicle/vexo.png',
      '/vehicle/zylo.png'
    ],
    features: ['Smart App Connectivity', 'GPS Tracking', 'Geo-fencing', 'Ride Analytics', 'Regenerative Braking', 'Anti-theft System'],
    detailedSpecs: {
      brakes: 'Dual Disc Brakes with Regenerative Braking',
      suspension: 'Telescopic Suspension',
      loadCapacity: '150 KG',
      colors: ['X-Factor Black', 'Premium Silver', 'Elite Gold']
    }
  }
];

export const getVehicleById = (id: string): Vehicle | undefined => {
  return vehicles.find(vehicle => vehicle.id === id);
};
