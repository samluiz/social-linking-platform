import { Suspense } from 'react';
import { useSpotifyToken } from './hooks/useSpotifyToken';
import useSpotifyTracks, { type Track } from './hooks/useSpotifyTracks';

const TrackList = ({ tracks }: { tracks: Track[] }) => (

  <ul className='grid place-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 w-full'>
    {tracks.map((track) => (
      <li key={track.name} className='m-6 w-full p-2'>
        <iframe className='shadow-xl'
          width="100%"
          height="152"
          title={track.name}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; transparency"
          src={track.external_urls.spotify.replace('/open.spotify.com/', '/open.spotify.com/embed/').concat("?utm_source=oembed")}
        />
      </li>
    ))}
  </ul>
);

function Songs() {
  const { token, loading: tokenLoading } = useSpotifyToken();
  const artistId = '7irs4cot51br1gLxkmyFVN';
  const { tracks, loading: tracksLoading, error } = useSpotifyTracks(artistId, token);

  return (
    <>
    <div className='max-w-[1668px] grid place-items-center p-6'>
      <h1 className='sm:text-4xl text-2xl text-white py-2'>TOP TRACKS</h1>
      <Suspense fallback={<p>Loading...</p>}>
        {!tokenLoading && !tracksLoading && tracks && Array.isArray(tracks) ? (
          <TrackList tracks={tracks} />
        ) : error ? (
          <p>Error loading tracks: {error}</p>
        ) : null}
      </Suspense>
    </div>
    </>
  );
}

export default Songs;
