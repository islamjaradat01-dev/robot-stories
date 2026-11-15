import { useEffect, useState } from 'react';
import { loadMission } from '../data';
import type { Mission } from '../data/schema';

export function useMission(id?: string) {
  const [mission, setMission] = useState<Mission | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (!id) { setLoading(false); return; }
    loadMission(id).then((m) => { setMission(m); setLoading(false); });
  }, [id]);
  return { mission, loading };
}
