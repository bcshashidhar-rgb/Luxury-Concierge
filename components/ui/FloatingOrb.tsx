'use client';

import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/cn';
import { FormEvent, useState } from 'react';

type Message = {
  role: 'assistant' | 'user';
  content: string;
};

type FloatingOrbProps = {
  className?: string;
};

const defaultWelcomeMessage = 'Welcome to your AI concierge. Share your travel or lifestyle request and I can help.';

export function FloatingOrb({ className }: FloatingOrbProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', content: defaultWelcomeMessage }]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedPrompt = prompt.trim();
    if (!trimmedPrompt || isLoading) {
      return;
    }

    setPrompt('');
    setMessages((current) => [...current, { role: 'user', content: trimmedPrompt }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: trimmedPrompt })
      });

      const payload = (await response.json()) as { reply?: string; error?: string };
      const reply = payload.reply?.trim();
      if (!response.ok || !reply) {
        throw new Error(payload.error ?? 'Unable to get a response right now.');
      }

      setMessages((current) => [...current, { role: 'assistant', content: reply }]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content:
            'I am temporarily unavailable from the free AI provider. Please try again in a moment or contact your human concierge.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isOpen ? (
        <section
          aria-label="AI concierge chat"
          className="fixed bottom-24 right-6 z-40 flex h-[30rem] w-[min(92vw,23rem)] flex-col overflow-hidden rounded-2xl border border-border bg-background/95 shadow-glow backdrop-blur-xl"
        >
          <header className="flex items-center justify-between border-b border-border px-4 py-3">
            <p className="text-sm font-semibold text-accent">AI Concierge</p>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close AI concierge chat"
              className="rounded-full border border-border px-2 py-1 text-xs text-muted transition hover:text-text"
            >
              Close
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((message, index) => (
              <article
                key={`${message.role}-${index}`}
                className={cn(
                  'max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed',
                  message.role === 'assistant'
                    ? 'border border-border bg-surface text-text'
                    : 'ml-auto bg-accent/15 text-accent'
                )}
              >
                {message.content}
              </article>
            ))}
            {isLoading ? <p className="text-xs text-muted">AI concierge is typing...</p> : null}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border p-3">
            <label htmlFor="ai-assistant-prompt" className="sr-only">
              Ask AI concierge
            </label>
            <div className="flex items-center gap-2">
              <input
                id="ai-assistant-prompt"
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                placeholder="Ask for travel ideas, dining, wellness..."
                className="w-full rounded-full border border-border bg-surface px-3 py-2 text-sm text-text outline-none ring-accent/30 placeholder:text-muted focus:ring"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="rounded-full border border-border bg-surface px-3 py-2 text-xs font-medium text-accent transition hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      ) : null}

      <button
        type="button"
        aria-label="Open AI concierge chat"
        onClick={() => setIsOpen((current) => !current)}
        className={cn(
          'fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface shadow-glow backdrop-blur-lg transition-transform duration-200 hover:scale-105',
          className
        )}
      >
        <Icon name="spark" aria-label="AI concierge icon" className="h-6 w-6" />
      </button>
    </>
  );
}
