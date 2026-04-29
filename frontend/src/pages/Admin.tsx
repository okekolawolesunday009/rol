import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { useAudioSermons } from '../hooks/useAudioSermons';
import { useVideoSermons } from '../hooks/useVideoSermons';
import { useEvents } from '../hooks/useEvents';
import type { AudioSermon, VideoSermon, ChurchEvent, AdminTab } from '../types';

const tabs: { id: AdminTab; label: string; icon: string }[] = [
  { id: 'audio', label: 'Audio', icon: 'headphones' },
  { id: 'video', label: 'Video', icon: 'play_circle' },
  { id: 'events', label: 'Events', icon: 'event' },
];

// ─── Login Screen ─────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: (email: string, pass: string) => Promise<{ success: boolean; error?: string }> }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const result = await onLogin(email, password);
    if (!result.success) {
      setError(result.error || 'Login failed');
    }
    setLoading(false);
  };

  return (
    <motion.div
      className="min-h-screen bg-background flex items-center justify-center px-4"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="w-14 h-14 border-2 border-tertiary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-tertiary font-headline text-2xl italic">Ω</span>
          </div>
          <h1 className="font-headline text-3xl text-white">RCCG LP17 HQ</h1>
          <p className="text-on-surface-variant font-body text-sm mt-2 tracking-widest uppercase">
            Admin Portal
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-surface-container border border-white/5 rounded-lg p-8 space-y-6 shadow-2xl shadow-black/40"
        >
          <div>
            <label className="block text-xs font-body text-on-surface-variant uppercase tracking-widest mb-2">
              Email
            </label>
            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full bg-surface-container-high border border-white/10 rounded text-white font-body px-4 py-3 focus:outline-none focus:border-tertiary/50 transition-colors placeholder-on-surface-variant/40"
              placeholder="admin@rccglp17.org"
            />
          </div>
          <div>
            <label className="block text-xs font-body text-on-surface-variant uppercase tracking-widest mb-2">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full bg-surface-container-high border border-white/10 rounded text-white font-body px-4 py-3 focus:outline-none focus:border-tertiary/50 transition-colors placeholder-on-surface-variant/40"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-error font-body text-sm text-center">{error}</p>
          )}

          <button
            id="admin-login-submit"
            type="submit"
            disabled={loading}
            className="w-full bg-tertiary text-on-tertiary font-bold tracking-widest uppercase text-sm py-3 rounded hover:bg-tertiary/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Admin Dashboard ──────────────────────────────────────────────────────────
function AdminDashboard() {
  const { user, logout } = useAuth();
  const { sermons: audios, addSermon: addAudio, deleteSermon: deleteAudio } = useAudioSermons();
  const { sermons: videos, addSermon: addVideo, deleteSermon: deleteVideo } = useVideoSermons();
  const { events: eventsData, addEvent, deleteEvent } = useEvents();
  const [activeTab, setActiveTab] = useState<AdminTab>('audio');

  // Generic modal state
  const [showAddAudio, setShowAddAudio] = useState(false);
  const [showAddVideo, setShowAddVideo] = useState(false);
  const [showAddEvent, setShowAddEvent] = useState(false);

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {/* Admin Navbar */}
      <nav className="bg-slate-950 border-b border-white/5 px-6 md:px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <span className="text-tertiary font-headline text-xl italic">Ω</span>
          <span className="text-white font-headline tracking-tight">RCCG LP17 HQ</span>
          <span className="text-on-surface-variant font-body text-xs ml-2 uppercase tracking-widest">
            / Admin
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-on-surface-variant font-body text-sm hidden md:block">
            {user?.email}
          </span>
          <button
            id="admin-logout"
            onClick={logout}
            className="flex items-center gap-2 text-on-surface-variant hover:text-white transition-colors font-body text-sm"
          >
            <span className="material-symbols-outlined text-base">logout</span>
            Sign Out
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <h1 className="font-headline text-4xl text-white mb-2">Content Manager</h1>
        <p className="text-on-surface-variant font-body mb-10">
          Add, edit, and remove sermons and events.
        </p>

        {/* Tabs */}
        <div className="flex gap-1 bg-surface-container rounded-lg p-1 mb-10 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`admin-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded font-body text-sm transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-tertiary text-on-tertiary font-bold'
                  : 'text-on-surface-variant hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-base">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Audio Tab ── */}
        {activeTab === 'audio' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline text-2xl text-white">Audio Sermons ({audios.length})</h2>
              <button
                id="admin-add-audio"
                onClick={() => setShowAddAudio(true)}
                className="flex items-center gap-2 bg-tertiary text-on-tertiary font-bold text-sm px-4 py-2.5 rounded hover:bg-tertiary/90 transition-all"
              >
                <span className="material-symbols-outlined text-base">add</span>
                Add Sermon
              </button>
            </div>
            <div className="space-y-3">
              {audios.map((s) => (
                <AdminRow
                  key={s.id}
                  title={s.title}
                  subtitle={`${s.speaker} • ${s.duration ?? ''}`}
                  icon="headphones"
                  onDelete={() => deleteAudio(s.id)}
                />
              ))}
              {audios.length === 0 && (
                <EmptyState message="No audio sermons yet. Add your first one!" />
              )}
            </div>
          </div>
        )}

        {/* ── Video Tab ── */}
        {activeTab === 'video' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline text-2xl text-white">Video Messages ({videos.length})</h2>
              <button
                id="admin-add-video"
                onClick={() => setShowAddVideo(true)}
                className="flex items-center gap-2 bg-tertiary text-on-tertiary font-bold text-sm px-4 py-2.5 rounded hover:bg-tertiary/90 transition-all"
              >
                <span className="material-symbols-outlined text-base">add</span>
                Add Video
              </button>
            </div>
            <div className="space-y-3">
              {videos.map((v) => (
                <AdminRow
                  key={v.id}
                  title={v.title}
                  subtitle={v.speaker ?? ''}
                  icon="play_circle"
                  onDelete={() => deleteVideo(v.id)}
                />
              ))}
              {videos.length === 0 && (
                <EmptyState message="No video messages yet. Add your first one!" />
              )}
            </div>
          </div>
        )}

        {/* ── Events Tab ── */}
        {activeTab === 'events' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline text-2xl text-white">Events ({eventsData.length})</h2>
              <button
                id="admin-add-event"
                onClick={() => setShowAddEvent(true)}
                className="flex items-center gap-2 bg-tertiary text-on-tertiary font-bold text-sm px-4 py-2.5 rounded hover:bg-tertiary/90 transition-all"
              >
                <span className="material-symbols-outlined text-base">add</span>
                Add Event
              </button>
            </div>
            <div className="space-y-3">
              {eventsData.map((ev) => (
                <AdminRow
                  key={ev.id}
                  title={ev.title}
                  subtitle={`${ev.date} ${ev.month} • ${ev.location}`}
                  icon="event"
                  onDelete={() => deleteEvent(ev.id)}
                />
              ))}
              {eventsData.length === 0 && (
                <EmptyState message="No events yet. Add your first one!" />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Add Audio Modal */}
      {showAddAudio && (
        <AddAudioModal
          onClose={() => setShowAddAudio(false)}
          onAdd={async (sermon) => {
            try {
              await addAudio(sermon);
              setShowAddAudio(false);
            } catch (error) {
              console.error('Failed to add audio sermon:', error);
            }
          }}
        />
      )}

      {/* Add Video Modal */}
      {showAddVideo && (
        <AddVideoModal
          onClose={() => setShowAddVideo(false)}
          onAdd={async (video) => {
            try {
              await addVideo(video);
              setShowAddVideo(false);
            } catch (error) {
              console.error('Failed to add video sermon:', error);
            }
          }}
        />
      )}

      {/* Add Event Modal */}
      {showAddEvent && (
        <AddEventModal
          onClose={() => setShowAddEvent(false)}
          onAdd={async (event) => {
            try {
              await addEvent(event);
              setShowAddEvent(false);
            } catch (error) {
              console.error('Failed to add event:', error);
            }
          }}
        />
      )}
    </div>
  );
}

// ─── Shared UI Primitives ────────────────────────────────────────────────────
function AdminRow({
  title,
  subtitle,
  icon,
  onDelete,
}: {
  title: string;
  subtitle: string;
  icon: string;
  onDelete: () => Promise<void>;
}) {
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await onDelete();
      setConfirm(false);
    } catch (error) {
      console.error('Failed to delete:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-between bg-surface-container border border-white/5 rounded-lg px-5 py-4 group hover:border-white/10 transition-all">
      <div className="flex items-center gap-4 min-w-0">
        <span className="material-symbols-outlined text-tertiary/60 text-lg flex-shrink-0">{icon}</span>
        <div className="min-w-0">
          <p className="text-white font-body text-sm font-medium truncate">{title}</p>
          <p className="text-on-surface-variant font-body text-xs mt-0.5 truncate">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0 ml-4">
        {confirm ? (
          <>
            <button
              onClick={handleDelete}
              disabled={loading}
              className="text-error font-body text-xs font-bold uppercase tracking-widest hover:underline disabled:opacity-50"
            >
              {loading ? 'Deleting...' : 'Confirm Delete'}
            </button>
            <button
              onClick={() => setConfirm(false)}
              disabled={loading}
              className="text-on-surface-variant font-body text-xs uppercase tracking-widest hover:text-white disabled:opacity-50"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setConfirm(true)}
            className="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors text-xl"
            aria-label="Delete"
          >
            delete
          </button>
        )}
      </div>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="text-center py-16 text-on-surface-variant border border-dashed border-white/10 rounded-lg">
      <span className="material-symbols-outlined text-4xl mb-3 block opacity-40">inbox</span>
      <p className="font-body text-sm">{message}</p>
    </div>
  );
}

function ModalShell({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-surface-container border border-white/10 rounded-lg w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/5">
          <h3 className="font-headline text-xl text-white">{title}</h3>
          <button onClick={onClose} className="text-on-surface-variant hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="px-6 py-6">{children}</div>
      </div>
    </div>
  );
}

function FormField({
  label,
  id,
  ...props
}: { label: string; id: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-body text-on-surface-variant uppercase tracking-widest mb-2">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full bg-surface-container-high border border-white/10 rounded text-white font-body px-4 py-3 focus:outline-none focus:border-tertiary/50 transition-colors placeholder-on-surface-variant/40"
      />
    </div>
  );
}

// ─── Add Modals ──────────────────────────────────────────────────────────────
function AddAudioModal({
  onClose,
  onAdd,
}: {
  onClose: () => void;
  onAdd: (s: Omit<AudioSermon, 'id'>) => Promise<void>;
}) {
  const [form, setForm] = useState({ title: '', speaker: '', audioUrl: '', duration: '', date: '', description: '', series: '' });
  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onAdd(form);
  };

  return (
    <ModalShell title="Add Audio Sermon" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField id="new-audio-title" label="Title *" value={form.title} onChange={update('title')} required placeholder="Sermon title" />
        <FormField id="new-audio-speaker" label="Speaker *" value={form.speaker} onChange={update('speaker')} required placeholder="Pastor Name" />
        <FormField id="new-audio-url" label="Audio URL *" type="url" value={form.audioUrl} onChange={update('audioUrl')} required placeholder="https://..." />
        <FormField id="new-audio-duration" label="Duration" value={form.duration} onChange={update('duration')} placeholder="48:22" />
        <FormField id="new-audio-date" label="Date" type="date" value={form.date} onChange={update('date')} placeholder="2024-03-10" />
        <FormField id="new-audio-description" label="Description" value={form.description} onChange={update('description')} placeholder="Sermon description" />
        <FormField id="new-audio-series" label="Series" value={form.series} onChange={update('series')} placeholder="Series name" />
        <div className="flex gap-3 pt-2">
          <button type="submit" className="flex-1 bg-tertiary text-on-tertiary font-bold text-sm py-3 rounded hover:bg-tertiary/90 transition-all">
            Add Sermon
          </button>
          <button type="button" onClick={onClose} className="flex-1 border border-white/10 text-on-surface-variant font-body text-sm py-3 rounded hover:border-white/30 transition-all">
            Cancel
          </button>
        </div>
      </form>
    </ModalShell>
  );
}

function AddVideoModal({
  onClose,
  onAdd,
}: {
  onClose: () => void;
  onAdd: (v: Omit<VideoSermon, 'id'>) => Promise<void>;
}) {
  const [form, setForm] = useState({ title: '', videoUrl: '', thumbnail: '', speaker: '', duration: '', date: '', description: '' });
  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onAdd(form);
  };

  return (
    <ModalShell title="Add Video Message" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField id="new-video-title" label="Title *" value={form.title} onChange={update('title')} required placeholder="Message title" />
        <FormField id="new-video-url" label="YouTube Embed URL *" type="url" value={form.videoUrl} onChange={update('videoUrl')} required placeholder="https://www.youtube.com/embed/..." />
        <FormField id="new-video-thumbnail" label="Thumbnail URL" type="url" value={form.thumbnail} onChange={update('thumbnail')} placeholder="https://img.youtube.com/vi/.../maxresdefault.jpg" />
        <FormField id="new-video-speaker" label="Speaker" value={form.speaker} onChange={update('speaker')} placeholder="Pastor Name" />
        <FormField id="new-video-duration" label="Duration" value={form.duration} onChange={update('duration')} placeholder="52:10" />
        <FormField id="new-video-date" label="Date" type="date" value={form.date} onChange={update('date')} placeholder="2024-03-10" />
        <FormField id="new-video-description" label="Description" value={form.description} onChange={update('description')} placeholder="Video description" />
        <div className="flex gap-3 pt-2">
          <button type="submit" className="flex-1 bg-tertiary text-on-tertiary font-bold text-sm py-3 rounded hover:bg-tertiary/90 transition-all">
            Add Video
          </button>
          <button type="button" onClick={onClose} className="flex-1 border border-white/10 text-on-surface-variant font-body text-sm py-3 rounded hover:border-white/30 transition-all">
            Cancel
          </button>
        </div>
      </form>
    </ModalShell>
  );
}

function AddEventModal({
  onClose,
  onAdd,
}: {
  onClose: () => void;
  onAdd: (e: Omit<ChurchEvent, 'id'>) => Promise<void>;
}) {
  const [form, setForm] = useState({ title: '', date: '', month: '', time: '', location: '', description: '', ctaLabel: 'Register' });
  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onAdd(form);
  };

  return (
    <ModalShell title="Add Event" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField id="new-event-title" label="Title *" value={form.title} onChange={update('title')} required placeholder="Event name" />
        <div className="grid grid-cols-2 gap-4">
          <FormField id="new-event-date" label="Day *" value={form.date} onChange={update('date')} required placeholder="14" />
          <FormField id="new-event-month" label="Month *" value={form.month} onChange={update('month')} required placeholder="MARCH" />
        </div>
        <FormField id="new-event-time" label="Time *" value={form.time} onChange={update('time')} required placeholder="9:00 AM" />
        <FormField id="new-event-location" label="Location *" value={form.location} onChange={update('location')} required placeholder="Main Auditorium" />
        <FormField id="new-event-desc" label="Description" value={form.description} onChange={update('description')} placeholder="Short event description" />
        <FormField id="new-event-cta" label="CTA Label" value={form.ctaLabel} onChange={update('ctaLabel')} placeholder="Register" />
        <div className="flex gap-3 pt-2">
          <button type="submit" className="flex-1 bg-tertiary text-on-tertiary font-bold text-sm py-3 rounded hover:bg-tertiary/90 transition-all">
            Add Event
          </button>
          <button type="button" onClick={onClose} className="flex-1 border border-white/10 text-on-surface-variant font-body text-sm py-3 rounded hover:border-white/30 transition-all">
            Cancel
          </button>
        </div>
      </form>
    </ModalShell>
  );
}

// ─── Page Export with Auth Guard ─────────────────────────────────────────────
export default function Admin() {
  const { isAuthenticated, login } = useAuth();

  if (!isAuthenticated) {
    return <LoginScreen onLogin={login} />;
  }

  return <AdminDashboard />;
}
