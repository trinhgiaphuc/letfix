import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <iframe
          className="aspect-video w-1/2"
          src="https://www.2embed.ru/embed/tmdb/movie?id=299534"
          frameBorder={0}
          scrolling="no"
          allowFullScreen={true}
        />
      </main>
    </div>
  )
}

export default Home
