import Validator from '../app';

test('Expecting result true', () => {
    const wrongName = [
      "1aaaa",
      "aaaa1",
      "1aaaa",    
      "-aaaaaa",
      "aaaaa-",
      "_aaaaaa",
      "aaaaa_", 
      "Pr01p1234yer",
      "Андрей",
      "Яrosla",
      "ЫshtyЛ",
      "N@bitator"  
    ];

  const rightName =[
      "aaaa-aaaa",    
      "aaaa111aaaa",    
      "aa-2-ssss",
      "aaa_aaaaa",
      "aaaaa_2aaaa",
      "aaaa_333-ssss"
  ];

  let result = true;
  rightName.forEach(item => {
      if (!Validator.validateUsername(item)) {
          result = false;      
      }; 
  }); 

  wrongName.forEach(item => {
      if (!Validator.validateUsername(item)) {
          result = false;      
      }; 
  }); 

    
    expect(result).toEqual(true);
});
