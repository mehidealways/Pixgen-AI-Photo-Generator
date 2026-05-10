import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { BiDownArrow } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const PhotoCard = ({ photo }) => {
  return (
    <Card className="border rounded-md">
      <div className='relative w-full aspect-square'> 

        <Image src={photo.imageUrl} alt={photo.title} fill className='rounded-md object-cover' />
        <Chip  className="absolute top-2 right-2">
          {photo.category}
        </Chip>
      </div>
      <div>
        <h2 className="font-medium  text-xl">{photo.title}</h2>
      </div>

      <div className='flex items-center  gap-5'>
        <div className="flex items-center gap-2">
          <p>{photo.likes}</p>
          <p>
            <FaHeart className="text-red-400" />
          </p>
        </div>
        <Separator orientation="vertical" />
        <div className="flex items-center gap-2">
          <p>
            <FiDownload />
          </p>
          <p>{photo.downloads}</p>
        </div>
      </div>
    <Link href={`/all-photos/${photo.id}`}>
      <Button variant="outline" className="w-full mt-2">
        View
      </Button>
    </Link>
    </Card>
  );
};

export default PhotoCard;
