import { AgePipePipe } from './age-pipe.pipe';

describe('AgePipePipe', () => {
  let pipe = new AgePipePipe();

  it('create an instance', () => {  
    expect(pipe).toBeTruthy();
  });

  it('transforms "15/3/2000" into "21"',()=>{
    let value: Date=new Date(2000,3,15);
    expect(pipe.transform(value)).toBe(21);
  });

  it('transforms "14/3/2005" into "16"',()=>{
    let value: Date=new Date(2005,3,14);
    expect(pipe.transform(value)).toBe(16);
  });
});
