import { LocationService } from './location.service';

describe('LocationService', () => {
  let service: LocationService;

  beforeEach(async () => {
    service = new LocationService();
  });

  it('should be defined', () => {
    expect(service.list()).toMatchObject([
      'Location 1',
      'Location 2',
      'Location 3',
    ]);
  });
});
