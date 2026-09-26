import { useCallback, useEffect, useRef, useState } from "react";

export const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Copy text, return true on success. Falls back for non-secure contexts. */
export function useCopy(timeout = 1800) {
  const [copied, setCopied] = useState(false);
  const t = useRef<number | null>(null);
  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      setCopied(true);
      if (t.current) window.clearTimeout(t.current);
      t.current = window.setTimeout(() => setCopied(false), timeout);
    },
    [timeout]
  );
  useEffect(() => () => { if (t.current) window.clearTimeout(t.current); }, []);
  return { copied, copy };
}
