import { Service } from '../../services.service';

export type CreateServiceDto = Omit<Service, '_id' | 'images'> & {
  photos: any;
};

export type UpdateServiceDto = Partial<Service>;
