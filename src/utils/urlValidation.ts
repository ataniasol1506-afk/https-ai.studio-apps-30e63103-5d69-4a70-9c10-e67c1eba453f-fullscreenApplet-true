/**
 * Validates that a user-provided URL uses http:// or https:// only.
 * Rejects javascript:, data:, or malformed strings.
 */
export function sanitizeExternalUrl(rawUrl: string): string | null {
  const trimmed = rawUrl.trim();
  if (!trimmed) return null;

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
      return parsed.toString();
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Extracts a safe YouTube video ID from standard youtube.com or youtu.be URLs
 * so an embedded preview can be rendered via youtube-nocookie.com.
 */
export function extractYouTubeId(rawUrl: string): string | null {
  const safe = sanitizeExternalUrl(rawUrl);
  if (!safe) return null;

  try {
    const parsed = new URL(safe);
    const host = parsed.hostname.replace(/^www\./, '').toLowerCase();

    if (host === 'youtu.be') {
      const candidate = parsed.pathname.split('/').filter(Boolean)[0];
      return candidate && /^[a-zA-Z0-9_-]{11}$/.test(candidate) ? candidate : null;
    }

    if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
      if (parsed.pathname === '/watch') {
        const v = parsed.searchParams.get('v');
        return v && /^[a-zA-Z0-9_-]{11}$/.test(v) ? v : null;
      }
      const parts = parsed.pathname.split('/').filter(Boolean);
      if ((parts[0] === 'embed' || parts[0] === 'shorts' || parts[0] === 'live') && parts[1]) {
        return /^[a-zA-Z0-9_-]{11}$/.test(parts[1]) ? parts[1] : null;
      }
    }

    return null;
  } catch {
    return null;
  }
}
