import { Service } from '../../services.service';

export type CreateServiceDto = Omit<Service, '_id'>;

export type UpdateServiceDto = Partial<Service>;
