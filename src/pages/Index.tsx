
import { useState } from "react";
import { motion } from "framer-motion";
import ShipClassCard from "@/components/ShipClassCard";
import Fleet from "@/components/Fleet";
import TargetSelector from "@/components/TargetSelector";
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
  const [timeToKill, setTimeToKill] = useState<number | null>(null);

  const handleAddToFleet = () => {
    if (selectedShip && selectedClass) {
      const shipData = shipClasses
        .find(sc => sc.name === selectedClass)
        ?.ships.find(s => s.name === selectedShip);
      
      if (shipData) {
        setFleet([
          ...fleet,
          {
            name: shipData.name,
            class: selectedClass,
            dps: shipData.dps,
          },
        ]);
      }
      
      setSelectedShip(null);
    }
  };

  const handleRemoveShip = (index: number) => {
    setFleet(fleet.filter((_, i) => i !== index));
    setTimeToKill(null);
  };

  const calculateTimeToKill = (targetHealth: number) => {
    const totalDps = fleet.reduce((sum, ship) => sum + ship.dps, 0);
    if (totalDps === 0) {
      setTimeToKill(0);
      return;
    }
    const ttk = targetHealth / totalDps;
    setTimeToKill(ttk);
  };

  return (
    <div className="min-h-screen bg-space-black text-space-white p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto relative"
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
                    key={ship.name}
                    onClick={() => setSelectedShip(ship.name)}
                    className={`p-3 rounded text-sm transition-all ${
                      selectedShip === ship.name
                        ? "bg-space-accent text-white"
                        : "bg-space-purple/20 hover:bg-space-purple/30 text-space-white/90"
                    }`}
                  >
                    {ship.name}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Fleet ships={fleet} onRemoveShip={handleRemoveShip} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <TargetSelector onCalculate={calculateTimeToKill} />
              {timeToKill !== null && (
                <div className="mt-4 p-4 bg-space-purple/20 rounded-lg">
                  <p className="text-space-white">
                    Time to Kill: <span className="font-bold">{timeToKill.toFixed(2)} seconds</span>
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}

        <div className="fixed bottom-4 right-4 flex items-center space-x-2">
          <p className="text-space-white text-sm">unban Alaskan :)</p>
          <img 
            src="/lovable-uploads/8f7980f8-322e-4b7a-892b-89f388140ecc.png" 
            alt="Alaskan" 
            className="w-12 h-12 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
