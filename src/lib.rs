use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn leapyear(year: &str) -> String{

   let a  = year.parse::<i32>().unwrap();

    if a%4 == 0{
      if a%100 == 0{
        if a%400 ==0{
          return format!("{} is a leap year.",a);
        } else{
          return format!("{} is not a leap year.",a);
        }
        } else {
          return format!("{} is a leap year.",a);
    }
   }else{
          return format!("{} is not a leap year.",a);
    
}
}
