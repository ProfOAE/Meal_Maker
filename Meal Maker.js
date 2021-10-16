const menu = {
    _courses: { appetizers: [],
                mains: [],
                desserts: [] 
    },
    
     get appetizers (){
       return this._courses.appetizers ;
    },
    set appetizers (appetizer){
      this._courses.appetizers = appetize;
    },
    
     get mains (){
       return this._courses.mains; 
    },
    set mains (main){
      return  this._courses.mains = main;
    },
    
    get desserts (){
       return this._courses.desserts;
    },
    
    set desserts (dessert){
      return  this._courses.desserts = dessert;
    },
    
    get courses (){
      return{
        appetizers: this.appetizer,
        mains: this.manis,
        desserts: this.desserts
      };
    },
     addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name : dishName,
        price: dishPrice,
        
      };
      return this._courses[courseName].push(dish);
     },
     getRandomDishFromCourse(courseName){
       const dishes = this._courses[courseName];
       const randomIndex = Math.floor(Math.random()* dishes.length);
       return dishes[randomIndex]; 
     },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return  `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}, The price is 
      $${totalPrice}.`;
    }
    };
    
    menu.addDishToCourse('appetizers', 'Salad',4.25);
    menu.addDishToCourse('appetizers', 'wings',4.50);
    menu.addDishToCourse('appetizers', 'fries',5.00);
    
    menu.addDishToCourse('mains', 'steak',9.50);
    menu.addDishToCourse('mains', 'salmon',6.50);
    menu.addDishToCourse('mains', 'tofu',12.50);
    
    menu.addDishToCourse('desserts', 'iceCrm',2.95);
    menu.addDishToCourse('desserts', 'coffee',2.50);
    menu.addDishToCourse('desserts', 'cake',4.50);
    
    
    
    const meal = menu.generateRandomMeal();
    console.log(meal);