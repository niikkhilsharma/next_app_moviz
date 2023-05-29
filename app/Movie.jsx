import Link from 'next/link';
import Image from 'next/image';

export default function Movie({ id, title, poster_path, release_date }) {
  const imagePath = 'https://image.tmdb.org/t/p/original';
  console.log(poster_path);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={200}
          height={200}
          style={{ width: '200px', height: 'auto' }}
          alt="title"
        />
      </Link>
    </div>
  );
}
