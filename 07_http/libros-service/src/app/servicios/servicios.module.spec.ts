import { ServiciosModule } from './servicios.module';

describe('ServiciosModule', () => {
  let serviciosModule: ServiciosModule;

  beforeEach(() => {
    serviciosModule = new ServiciosModule();
  });

  it('should create an instance', () => {
    expect(serviciosModule).toBeTruthy();
  });
});
