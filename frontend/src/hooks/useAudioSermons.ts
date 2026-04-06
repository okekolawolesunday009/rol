import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import type { AudioSermon } from '../types';

export function useAudioSermons() {
  const [sermons, setSermons] = useState<AudioSermon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSermons();
  }, []);

  const fetchSermons = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('audio_sermons')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setSermons(data || []);
    }
    setLoading(false);
  };

  const addSermon = async (sermon: Omit<AudioSermon, 'id'>) => {
    const { data, error } = await supabase
      .from('audio_sermons')
      .insert([sermon])
      .select()
      .single();

    if (error) throw error;
    setSermons(prev => [data, ...prev]);
    return data;
  };

  const updateSermon = async (id: string, updates: Partial<AudioSermon>) => {
    const { data, error } = await supabase
      .from('audio_sermons')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    setSermons(prev => prev.map(s => s.id === id ? data : s));
    return data;
  };

  const deleteSermon = async (id: string) => {
    const { error } = await supabase
      .from('audio_sermons')
      .delete()
      .eq('id', id);

    if (error) throw error;
    setSermons(prev => prev.filter(s => s.id !== id));
  };

  return {
    sermons,
    loading,
    error,
    addSermon,
    updateSermon,
    deleteSermon,
    refetch: fetchSermons
  };
}