import { useEffect, useState } from 'react';

export interface Track {
  external_urls: {
    spotify: string;
  };
  name: string;
}

const useSpotifyTracks = (artistId: string, token: string | null) => {
  const [tracks, setTracks] = useState<Track[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTracks = async (): Promise<void> => {
      try {
        if (!token) {
          // Wait for the token to be available
          return;
        }

        const res = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=BR`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await res.json();
        // Check if data is an array before setting it
        if (Array.isArray(data.tracks)) {
          setTracks(data.tracks);
        } else {
          console.error('Error loading tracks: Invalid data format');
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTracks();
  }, [artistId, token]);

  return { tracks, loading, error };
};

export default useSpotifyTracks;
