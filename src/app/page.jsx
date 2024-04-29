import Image from 'next/image'

export default function Home() {
  return (
    <main className='grid justify-items-stretch h-screen'>
      <div className="grid justify-items-stretch md:flex justify-around mt-11">
        <div className='h-96 text-white grid justify-items-center'>
          <h1 className='text-6xl'>Bereg Tv</h1>
          <h2>Кабельне телебачення</h2>
          
        </div>
        <div className='h-96 flex justify-items-center'>
          <Image
          className='rounded-2xl shadow-2xl shadow-purple-500/50'
          src="/img/hero.jpg"
          width={700}
          height={378}
          alt="Hero"
           />
        </div>
      </div>
    </main>
  );
}
