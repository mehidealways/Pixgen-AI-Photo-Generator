import { Chip } from '@heroui/react';
import Image from 'next/image';

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    'https://pixgen-ai-photo-generator.vercel.app/data.json',
  );
  const photos = await res.json();
  const photo = photos.find(photo => photo.id == id);
  console.log(photo);

  return (
    <>
      <div className="flex justify-center items-center py-10">
        <div className="max-w-md rounded-xl overflow-hidden shadow-lg border bg-white">
          {/* Image Section */}
          <div className="relative">
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              width={500}
              height={500}
              className="w-full h-[300px] object-cover"
            />

            {/* Category Chip */}
            <Chip className="absolute top-4 right-4">{photo.category}</Chip>
          </div>

          {/* Content Section */}
          <div className="p-5">
            <h2 className="text-2xl font-bold mb-2">{photo.title}</h2>

            <p className="text-gray-600 mb-3">{photo.prompt}</p>

            <p className="text-sm text-gray-500">
              <span className="font-semibold">Model:</span> {photo.model}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoDetailsPage;
