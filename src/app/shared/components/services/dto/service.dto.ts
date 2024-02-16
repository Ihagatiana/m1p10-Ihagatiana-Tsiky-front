import { Service } from '../../services.service';

export type CreateServiceDto = Omit<Service, 'id'>;

export type UpdateServiceDto = Partial<Service>;
