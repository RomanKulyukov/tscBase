import React from "react";
import "./App.css";

function App() {
  const bool: boolean = true;
  let num: number = 42;
  // two ways of defining arrays with ts
  //1.
  const numArr: number[] = [1, 1, 2, 3, 5, 8, 13];
  //2. using global class Array (this is called generic types)
  const numArr2: Array<number> = [1, 1, 2, 3, 5, 8, 13];
  const strArr: Array<string> = ["Hello", "World"];
  // Tuple if multiple types required
  const tupleArr: [string, number] = ["Roman", 28];
  // Use type any if variable might change its type
  let variable: any = 28;
  variable = "Roman";
  // In functions we specify type of props and also type of return data, void in our case
  function sayMyName(name: string): void {
    console.log(name);
  }
  sayMyName("Roman");
  // There is also type of never that we can use as a return type for a function
  // We can create custom types (aliases)
  type Login = string;
  const login: Login = "admin";
  // Aliases can contain multiple types
  type ID = string | number;
  const id: ID = 1234;
  const id2: ID = "1234";

  //INTERFACE
  interface Rect {
    readonly id: String; // readonly means property cannot be changed
    color?: string; // ? means this param is not required
    size: {
      width: number;
      height: number;
    };
  }
  const rect1: Rect = {
    id: "rect1",
    size: { width: 20, height: 40 },
  };
  rect1.color = "fff";
  // interface can inherit from another interface
  interface RectGen extends Rect {
    getArea: () => number;
  }
  const rect2: RectGen = {
    id: "rect2",
    size: {
      width: 50,
      height: 60,
    },
    getArea(): number {
      return this.size.width * this.size.height;
    },
  };
  interface IClock {
    time: Date;
    setTime(date: Date): void;
  }
  class Clock implements IClock {
    time: Date = new Date();
    setTime(date: Date) {
      this.time = date;
    }
  }
  // If Object has many dynamic keys we can use this type of interface construction
  interface Styles {
    [key: string]: string;
  }
  const css: Styles = {
    border: "1px solid black",
    marginTop: "2px",
    borderRadius: "5px",
  };

  //ENUM
  enum Membership {
    Simple,
    Standart,
    Premium,
  }

  const membership = Membership.Premium;
  console.log(membership);
  return <div className="App"></div>;
}

export default App;
