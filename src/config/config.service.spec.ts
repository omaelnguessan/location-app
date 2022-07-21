import { resolve } from 'path';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(async () => {
    service = new ConfigService();
  });

  it('should indicator views location', () => {
    const templatePath = resolve(__dirname, '../..', '/views');
    expect(service.get<string>('template.path')).toEqual(templatePath);
  });
});
