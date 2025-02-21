
import { useState, useEffect } from "react";
import { shipClasses } from "@/data/shipClasses";
import { shipHealth } from "@/data/shipHealth";

interface TargetSelectorProps {
  onCalculate: (health: number) => void;
}

const TargetSelector = ({ onCalculate }: TargetSelectorProps) => {
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [selectedShip, setSelectedShip] = useState<string>("");
  const [availableShips, setAvailableShips] = useState<string[]>([]);

  useEffect(() => {
    if (selectedClass) {
      const ships = shipClasses.find(sc => sc.name === selectedClass)?.ships.map(s => s.name) || [];
      setAvailableShips(ships);
      setSelectedShip("");
    }
  }, [selectedClass]);

  const handleCalculate = () => {
    if (selectedShip) {
      const health = shipHealth[selectedShip] || 0;
      onCalculate(health);
    }
  };

  return (
    <div className="p-6 bg-space-black/30 backdrop-blur-lg rounded-lg border border-space-purple/30">
      <h2 className="text-2xl font-semibold mb-4 text-space-white">Calculate Time to Kill</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-space-white/70 mb-2">
            Target Ship Class
          </label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full bg-space-purple/20 text-space-white border border-space-purple/30 rounded-lg p-2 [&>option]:bg-space-purple/20"
          >
            <option value="" className="bg-space-purple/20 text-space-white">Select a class</option>
            {shipClasses.map((sc) => (
              <option key={sc.name} value={sc.name} className="bg-space-purple/20 text-space-white">
                {sc.name}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-space-white/70 mb-2">
            Target Ship
          </label>
          <select
            value={selectedShip}
            onChange={(e) => setSelectedShip(e.target.value)}
            className="w-full bg-space-purple/20 text-space-white border border-space-purple/30 rounded-lg p-2 [&>option]:bg-space-purple/20"
            disabled={!selectedClass}
          >
            <option value="" className="bg-space-purple/20 text-space-white">Select a ship</option>
            {availableShips.map((ship) => (
              <option key={ship} value={ship} className="bg-space-purple/20 text-space-white">
                {ship}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleCalculate}
          disabled={!selectedShip}
          className="w-full px-6 py-3 bg-space-accent hover:bg-space-accent/90 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Calculate Time to Kill
        </button>
      </div>
    </div>
  );
};

export default TargetSelector;
