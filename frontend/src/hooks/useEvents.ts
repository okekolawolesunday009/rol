import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import type { ChurchEvent } from '../types';

export function useEvents() {
  const [events, setEvents] = useState<ChurchEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setEvents(data || []);
    }
    setLoading(false);
  };

  const addEvent = async (event: Omit<ChurchEvent, 'id'>) => {
    const { data, error } = await supabase
      .from('events')
      .insert([event])
      .select()
      .single();

    if (error) throw error;
    setEvents(prev => [data, ...prev]);
    return data;
  };

  const updateEvent = async (id: string, updates: Partial<ChurchEvent>) => {
    const { data, error } = await supabase
      .from('events')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    setEvents(prev => prev.map(e => e.id === id ? data : e));
    return data;
  };

  const deleteEvent = async (id: string) => {
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id);

    if (error) throw error;
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  return {
    events,
    loading,
    error,
    addEvent,
    updateEvent,
    deleteEvent,
    refetch: fetchEvents
  };
}