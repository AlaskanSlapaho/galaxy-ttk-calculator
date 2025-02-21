
import { motion } from "framer-motion";

interface ShipInFleet {
  name: string;
  class: string;
  dps: number;
}

interface FleetProps {
  ships: ShipInFleet[];
  onRemoveShip: (index: number) => void;
}

const Fleet = ({ ships, onRemoveShip }: FleetProps) => {
  const totalDps = ships.reduce((sum, ship) => sum + ship.dps, 0);

  return (
    <div className="w-full max-w-md bg-space-black/30 backdrop-blur-lg rounded-lg p-6 border border-space-purple/30">
      <h2 className="text-2xl font-semibold mb-4 text-space-white">Your Fleet</h2>
      <div className="space-y-3">
        {ships.map((ship, index) => (
          <motion.div
            key={`${ship.name}-${index}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="flex items-center justify-between bg-space-purple/20 rounded p-3"
          >
            <div>
              <p className="text-space-white font-medium">{ship.name}</p>
              <p className="text-sm text-space-white/70">{ship.class} - {ship.dps} DPS</p>
            </div>
            <button
              onClick={() => onRemoveShip(index)}
              className="text-space-white/70 hover:text-space-white transition-colors"
            >
              Remove
            </button>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-space-purple/30">
        <p className="text-lg text-space-white">
          Total Fleet DPS: <span className="font-semibold">{totalDps}</span>
        </p>
      </div>
    </div>
  );
};

export default Fleet;
