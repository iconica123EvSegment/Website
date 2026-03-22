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
    model: 'ZYLO',
    category: 'Low Speed',
    tagline: 'Premium Urban Commuting',
    description: 'Premium electric scooter with BLDC hub motor and dual tube suspension. Designed for smooth urban commuting with modern styling.',
    topSpeed: 25,
    motor: 'BLDC Hub Motor',
    battery: 'Swappable Battery System',
    batteryType: 'Lead Acid',
    voltage: '60-72V',
    price: 54999,
    image: '/vehicle/zylo.png',
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
    model: 'VEXO',
    category: 'Low Speed',
    tagline: 'Graceful City Mobility',
    description: 'Elegant design with reliable performance for daily urban commuting. Features modern styling and premium comfort.',
    topSpeed: 25,
    motor: 'BLDC Hub Motor',
    battery: 'Swappable Battery System',
    batteryType: 'Lead Acid',
    voltage: '60-72V',
    price: 54999,
    image: '/vehicle/a.png',
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
    model: 'NAVO',
    category: 'Low Speed',
    tagline: 'Navigate Your Future',
    description: 'Advanced version with improved performance and premium urban ride comfort. Perfect for daily commuters.',
    topSpeed: 25,
    motor: 'BLDC Hub Motor',
    battery: 'Swappable Battery System',
    batteryType: 'Lead Acid',
    voltage: '60-72V',
    price: 56999,
    image: '/vehicle/b.png',
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
    model: 'VIRA',
    category: 'Low Speed',
    tagline: 'Reliable Energy',
    description: 'Reliable scooter with strong braking and smooth suspension for daily use. Built for comfort and efficiency.',
    topSpeed: 25,
    motor: 'BLDC Hub Motor',
    battery: 'Swappable Battery System',
    batteryType: 'Lead Acid',
    voltage: '60-72V',
    price: 55999,
    image: '/vehicle/vexo.png',
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
      colors: ['Energy Red', 'Pro Black', 'Silver']
    }
  },
  {
    id: 'zeno',
    name: 'Iconic Zeno',
    model: 'ZENO',
    category: 'Low Speed',
    tagline: 'Smooth Gliding Experience',
    description: 'Balanced scooter offering performance + comfort for city riders. Perfect blend of style and functionality.',
    topSpeed: 25,
    motor: 'BLDC Hub Motor',
    battery: 'Swappable Battery System',
    batteryType: 'Lead Acid',
    voltage: '60-72V',
    price: 54999,
    image: '/vehicle/zylo.png',
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
    model: 'RAVO',
    category: 'Low Speed',
    tagline: 'Winner in Every Way',
    description: 'Versatile low-speed scooter with multiple voltage options. Built to win your daily commute.',
    topSpeed: 25,
    motor: 'BLDC Hub Motor',
    battery: 'Swappable Battery System',
    batteryType: 'Lead Acid',
    voltage: '48V / 60V / 72V',
    price: 52999,
    image: '/vehicle/a.png',
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
    model: 'ZYLO HS',
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
    image: '/vehicle/b.png',
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
    model: 'VEXO HS',
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
    image: '/vehicle/vexo.png',
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
    id: 'vira-hs',
    name: 'Iconica Vira HS',
    model: 'VIRA HS',
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
    image: '/vehicle/zylo.png',
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
    model: 'X-Factor',
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
    image: '/vehicle/a.png',
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
