
import { frigates } from './ships/frigates';
import { destroyers } from './ships/destroyers';
import { cruisers } from './ships/cruisers';
import { battlecruisers } from './ships/battlecruisers';
import { battleships } from './ships/battleships';
import { dreadnoughts } from './ships/dreadnoughts';
import { carriers } from './ships/carriers';
import { superCapitals } from './ships/superCapitals';

export interface ShipData {
  name: string;
  dps: number;
}

export const shipClasses = [
  {
    name: "Frigate",
    description: "Light and agile combat vessels",
    ships: frigates
  },
  {
    name: "Destroyer",
    description: "Versatile combat ships with balanced capabilities",
    ships: destroyers
  },
  {
    name: "Cruiser",
    description: "Medium-sized vessels with impressive firepower",
    ships: cruisers
  },
  {
    name: "Battlecruiser",
    description: "Heavy combat ships with superior firepower",
    ships: battlecruisers
  },
  {
    name: "Battleship",
    description: "Massive warships with devastating weapons",
    ships: battleships
  },
  {
    name: "Dreadnought",
    description: "Capital ships with extreme combat capabilities",
    ships: dreadnoughts
  },
  {
    name: "Carrier",
    description: "Support vessels capable of deploying fighters",
    ships: carriers
  },
  {
    name: "Super Capital",
    description: "The largest and most powerful vessels",
    ships: superCapitals
  }
];
