
import {
  frigateHealth,
  destroyerHealth,
  cruiserHealth,
  battlecruiserHealth,
  battleshipHealth,
  dreadnoughtHealth,
  carrierHealth,
  superCapitalHealth
} from './ships/shipHealth';

export const shipHealth: Record<string, number> = {
  ...frigateHealth,
  ...destroyerHealth,
  ...cruiserHealth,
  ...battlecruiserHealth,
  ...battleshipHealth,
  ...dreadnoughtHealth,
  ...carrierHealth,
  ...superCapitalHealth
};
