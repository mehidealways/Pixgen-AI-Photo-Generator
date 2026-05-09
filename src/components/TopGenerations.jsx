import PhotoCard from "./PhotoCard";

const TopGenerations = async () => {
  const res = await fetch(
    'https://pixgen-ai-photo-generator.vercel.app/data.json',
  );
  const data = await res.json();
  const topPhotos = data.slice(0, 8);
  console.log(topPhotos);
  return (
    <div>
      <h1 className="text-2xl font-bold my-10">Top Generations Photos</h1>
      <div className="grid grid-cols-4 gap-5">
        {topPhotos.map(photo => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default TopGenerations;
