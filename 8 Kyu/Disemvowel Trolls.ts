export class Kata {
    static disemvowel(str: string): string {
      let removed : string = "";
  
      for(let i = 0; i < str.length; i++){
          if("aeiou".includes(str[i].toLowerCase())) continue;
          removed += str[i]
      }
      return removed;  
    }
  }