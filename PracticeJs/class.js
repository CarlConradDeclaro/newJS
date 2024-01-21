class CalendarDay{

   #month;
   #day;
   #year;

   constructor(month, day, year){
    this.month = month;
    this.day = day;
    this.year = year;
   }
   
   toString(){
    return `${this.year} ${this.#month+1} ${this.day} `
   }

      
}