
import { motion } from "framer-motion";

interface ShipClassCardProps {
  name: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

const ShipClassCard = ({ name, description, selected, onClick }: ShipClassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`cursor-pointer rounded-lg p-6 backdrop-blur-lg transition-all duration-300 ${
        selected
          ? "bg-space-purple/30 border-2 border-space-accent shadow-lg"
          : "bg-space-black/30 border border-space-purple/30 hover:bg-space-purple/20"
      }`}
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold mb-2 text-space-white">{name}</h3>
      <p className="text-sm text-space-white/70">{description}</p>
    </motion.div>
  );
};

export default ShipClassCard;
