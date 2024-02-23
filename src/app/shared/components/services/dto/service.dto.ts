import { Service } from '../../services.service';

export type CreateServiceDto = Omit<
  Service,
  '_id' | 'images' | 'displayedPrice'
> & {
  photos: any;
};

export type UpdateServiceDto = Partial<Service>;
