import { Card } from '@heroui/react';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

const PhotoCard = ({ photo }) => {
  return (
    <Card className="border">
      <Image src={photo.imageUrl} alt={photo.title} width={200} height={200} />
      <div>
        <h2 className="font-medium">{photo.title}</h2>
      </div>
      <div className='flex items-center gap-2'>
        <p>
          <FaHeart className='text-red-400' />
        </p>
        <p>{photo.likes}</p>
      </div>
    </Card>
  );
};

export default PhotoCard;
