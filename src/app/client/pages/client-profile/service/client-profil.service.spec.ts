import { TestBed } from '@angular/core/testing';

import { ClientProfilService } from './client-profil.service';

describe('ClientProfilService', () => {
  let service: ClientProfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientProfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
