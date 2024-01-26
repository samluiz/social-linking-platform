import { useState, useEffect } from 'react';

interface SpotifyTokenHookResult {
  token: string | null;
  loading: boolean | null;
  error: string | null;
}

export const useSpotifyToken = (): SpotifyTokenHookResult => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const client_id = import.meta.env.PUBLIC_SPOTIFY_CLIENT_ID
  const client_secret = import.meta.env.PUBLIC_SPOTIFY_CLIENT_SECRET

  useEffect(() => {
    const getToken = async () => {
      try {
        const credentials = `${client_id}:${client_secret}`;
        const encodedCredentials = btoa(credentials);

        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          body: new URLSearchParams({
            'grant_type': 'client_credentials',
          }),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + encodedCredentials,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to get token');
        }

        const data = await response.json();
        setToken(data.access_token);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getToken();
  }, [client_id, client_secret]);

  return { token, loading, error };
};