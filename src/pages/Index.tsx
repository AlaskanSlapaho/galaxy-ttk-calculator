
import { useState } from "react";
import { motion } from "framer-motion";
import ShipClassCard from "@/components/ShipClassCard";
import Fleet from "@/components/Fleet";
import { shipClasses } from "@/data/shipClasses";

interface Ship {
  name: string;
  class: string;
  dps: number;
}

const Index = () => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedShip, setSelectedShip] = useState<string | null>(null);
  const [fleet, setFleet] = useState<Ship[]>([]);

  const handleAddToFleet = () => {
    if (selectedShip && selectedClass) {
      // In a real app, we would fetch the actual DPS from an API
      const mockDps = Math.floor(Math.random() * 1000) + 500; // Mock DPS for demonstration
      
      setFleet([
        ...fleet,
        {
          name: selectedShip,
          class: selectedClass,
          dps: mockDps,
        },
      ]);
      
      setSelectedShip(null);
    }
  };

  const handleRemoveShip = (index: number) => {
    setFleet(fleet.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-space-black text-space-white p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <header className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-space-accent to-space-purple bg-clip-text text-transparent"
          >
            Galaxy Battle Simulator
          </motion.h1>
          <p className="text-space-white/70 text-lg">
            Build your fleet and calculate its power
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {shipClasses.map((shipClass) => (
            <ShipClassCard
              key={shipClass.name}
              name={shipClass.name}
              description={shipClass.description}
              selected={selectedClass === shipClass.name}
              onClick={() => {
                setSelectedClass(shipClass.name);
                setSelectedShip(null);
              }}
            />
          ))}
        </div>

        {selectedClass && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 p-6 bg-space-black/30 backdrop-blur-lg rounded-lg border border-space-purple/30"
          >
            <h2 className="text-2xl font-semibold mb-4">Select a Ship</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {shipClasses
                .find((sc) => sc.name === selectedClass)
                ?.ships.map((ship) => (
                  <button
                    key={ship}
                    onClick={() => setSelectedShip(ship)}
                    className={`p-3 rounded text-sm transition-all ${
                      selectedShip === ship
                        ? "bg-space-accent text-white"
                        : "bg-space-purple/20 hover:bg-space-purple/30 text-space-white/90"
                    }`}
                  >
                    {ship}
                  </button>
                ))}
            </div>
            {selectedShip && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleAddToFleet}
                className="mt-6 px-6 py-3 bg-space-accent hover:bg-space-accent/90 text-white rounded-lg transition-colors"
              >
                Add to Fleet
              </motion.button>
            )}
          </motion.div>
        )}

        {fleet.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8"
          >
            <Fleet ships={fleet} onRemoveShip={handleRemoveShip} />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Index;
