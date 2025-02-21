
interface ShipData {
  name: string;
  dps: number;
}

export const shipClasses = [
  {
    name: "Frigate",
    description: "Light and agile combat vessels",
    ships: [
      { name: "Blue Torp Wasp", dps: 178 },
      { name: "Double Fractal", dps: 169 },
      { name: "Spiderblade", dps: 153 },
      { name: "Macross", dps: 138 },
      { name: "Dragon", dps: 137 },
      { name: "Zhanado", dps: 123 },
      { name: "Oppressor", dps: 117 },
      { name: "Abyss", dps: 107 },
      { name: "Starblade", dps: 107 },
      { name: "Ishkur", dps: 104 },
      { name: "Raven", dps: 102 },
      { name: "Avenger", dps: 90 },
      { name: "Osprey", dps: 86 },
      { name: "Draco", dps: 85 },
      { name: "Viper", dps: 85 },
      { name: "Python", dps: 82 },
      { name: "Archangel", dps: 80 },
      { name: "Spider", dps: 74 },
      { name: "Worm", dps: 61 },
      { name: "Arrow", dps: 50 }
    ]
  },
  {
    name: "Destroyer",
    description: "Versatile combat ships with balanced capabilities",
    ships: [
      { name: "Viking", dps: 200 },
      { name: "Permafrost", dps: 195 },
      { name: "Prikkit", dps: 184 },
      { name: "Retro Centurion", dps: 180 },
      { name: "Centurion", dps: 151 },
      { name: "Leecher", dps: 131 },
      { name: "Lich", dps: 127 },
      { name: "Scimitar", dps: 127 },
      { name: "Starfall", dps: 127 },
      { name: "Cobra", dps: 126 },
      { name: "Meteor", dps: 126 },
      { name: "Apostle", dps: 125 },
      { name: "Crucible", dps: 121 },
      { name: "Ibis", dps: 117 },
      { name: "Sabre Tooth", dps: 117 },
      { name: "Corvid", dps: 115 },
      { name: "Scythe", dps: 114 },
      { name: "Phantom", dps: 107 },
      { name: "Zero", dps: 106 },
      { name: "Argosy", dps: 106 },
      { name: "Defiance", dps: 98 },
      { name: "Chimera", dps: 92 },
      { name: "Dropship", dps: 71 }
    ]
  },
  {
    name: "Cruiser",
    description: "Medium-sized vessels with impressive firepower",
    ships: [
      { name: "2020 Ship", dps: 270 },
      { name: "Retro Sixfold", dps: 229 },
      { name: "Revenge", dps: 189 },
      { name: "Constantine", dps: 181 },
      { name: "Retro Gideon", dps: 174 },
      { name: "Sixfold", dps: 173 },
      { name: "Lusso", dps: 171 },
      { name: "Banshee", dps: 169 },
      { name: "Coldfront", dps: 162 },
      { name: "Aura", dps: 160 },
      { name: "Ghost", dps: 157 },
      { name: "Dramiel", dps: 155 },
      { name: "Inquisitor", dps: 153 },
      { name: "Nidhogg", dps: 152 },
      { name: "Gryphon", dps: 151 },
      { name: "Sentinel", dps: 150 },
      { name: "Nova", dps: 148 },
      { name: "Invictus", dps: 143 },
      { name: "Gunslinger", dps: 143 },
      { name: "Reaver", dps: 142 },
      { name: "Spectre", dps: 142 },
      { name: "Gideon", dps: 135 },
      { name: "Vampire X-R4", dps: 132 },
      { name: "Orion", dps: 130 },
      { name: "Xenon", dps: 121 },
      { name: "Templar", dps: 92 }
    ]
  },
  {
    name: "Battlecruiser",
    description: "Heavy combat ships with superior firepower",
    ships: [
      { name: "Vigilance", dps: 266 },
      { name: "Tengu", dps: 221 },
      { name: "Belvat", dps: 215 },
      { name: "Razor Wing", dps: 204 },
      { name: "Hecate", dps: 194 },
      { name: "Vansnova", dps: 190 },
      { name: "Grievion", dps: 185 },
      { name: "Marauder", dps: 183 },
      { name: "Radiance", dps: 182 },
      { name: "Dire Wolf", dps: 179 },
      { name: "Aeaphiel", dps: 176 },
      { name: "Absolution", dps: 172 },
      { name: "Valiant", dps: 170 },
      { name: "Mjolnheimr", dps: 155 },
      { name: "Black Flare", dps: 150 },
      { name: "Bastion", dps: 126 }
    ]
  },
  {
    name: "Battleship",
    description: "Massive warships with devastating weapons",
    ships: [
      { name: "Genesis", dps: 291 },
      { name: "Hasatan", dps: 281 },
      { name: "Panther", dps: 259 },
      { name: "Sentaliz", dps: 245 },
      { name: "Katana", dps: 239 },
      { name: "Witch", dps: 231 },
      { name: "Sovereign", dps: 227 },
      { name: "Legionnaire", dps: 227 },
      { name: "Jackal", dps: 226 },
      { name: "Warden", dps: 215 },
      { name: "Hawklight", dps: 215 },
      { name: "Aegis", dps: 213 },
      { name: "Loyalist", dps: 194 },
      { name: "Nisos", dps: 181 },
      { name: "Ampharos", dps: 180 },
      { name: "Archeon", dps: 174 },
      { name: "Warlock", dps: 174 },
      { name: "Cutlass", dps: 146 }
    ]
  },
  {
    name: "Dreadnought",
    description: "Capital ships with extreme combat capabilities",
    ships: [
      { name: "Kraken", dps: 432 },
      { name: "Avalon", dps: 384 },
      { name: "Obliterator", dps: 374 },
      { name: "Behemoth", dps: 339 },
      { name: "Andromeda", dps: 315 },
      { name: "Lazarus", dps: 286 },
      { name: "Nemesis", dps: 285 },
      { name: "Retribution", dps: 277 },
      { name: "Armageddon", dps: 275 },
      { name: "Cyclops", dps: 267 },
      { name: "Ridgebreaker", dps: 260 },
      { name: "Naglfar", dps: 254 },
      { name: "Zeus", dps: 247 },
      { name: "Tennhausen", dps: 243 },
      { name: "Leviathan", dps: 239 },
      { name: "Tempest", dps: 224 },
      { name: "Sagittarius", dps: 222 },
      { name: "Apocalypse", dps: 216 },
      { name: "Catalyst", dps: 193 },
      { name: "Judgement", dps: 193 }
    ]
  },
  {
    name: "Carrier",
    description: "Support vessels capable of deploying fighters",
    ships: [
      { name: "Vanguard", dps: 295 },
      { name: "Executioner", dps: 288 },
      { name: "Warlord", dps: 194 },
      { name: "Icarus", dps: 189 },
      { name: "Stormbringer", dps: 180 },
      { name: "Hevnetier", dps: 179 },
      { name: "Revelation", dps: 174 },
      { name: "Rhino", dps: 165 },
      { name: "Nyx", dps: 163 },
      { name: "Conqueror", dps: 162 },
      { name: "Rapture", dps: 160 },
      { name: "Prometheus", dps: 123 },
      { name: "Nimitz", dps: 116 }
    ]
  },
  {
    name: "Super Capital",
    description: "The largest and most powerful vessels",
    ships: [
      { name: "Theia", dps: 701 },
      { name: "Prototype X-2", dps: 570 },
      { name: "Hyperion", dps: 445 },
      { name: "Lucifer", dps: 418 },
      { name: "Prototype X-1", dps: 418 },
      { name: "Oblivion", dps: 330 },
      { name: "Deity", dps: 328 },
      { name: "Astraeus", dps: 278 },
      { name: "Subjugator", dps: 265 }
    ]
  }
];
