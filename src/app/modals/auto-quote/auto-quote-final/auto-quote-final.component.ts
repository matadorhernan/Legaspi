import { Component, OnInit } from "@angular/core";
import { Quote, Option } from "src/app/interfaces/quote.interface";
import * as _ from "lodash";

@Component({
  selector: "app-auto-quote-final",
  templateUrl: "./auto-quote-final.component.html",
  styleUrls: ["./auto-quote-final.component.scss"]
})
export class AutoQuoteFinalComponent implements OnInit {
  public quote: Quote;
  public price: number = 0;
  public name: string = "";
  public email: string = "";

  constructor() {
    this.quote = JSON.parse(sessionStorage.getItem("quote"));

    this.name = this.quote.contact.name;
    this.email = this.quote.contact.email;

    let eventSize: number = 100;
    let staff: Option = this.quote.staff;
    let music: Option = this.quote.music;
    let venue: Option = this.quote.venue;
    let table: Option = this.quote.table;
    let tablecloth: Option = this.quote.tablecloth;
    let chair: Option = this.quote.chair;
    let tableware: Option = this.quote.tableware;
    let plates: Option = this.quote.plates;

    for (const option in this.quote.eventSize) {
      switch (option) {
        case "a":
          if (this.quote.eventSize[option] == true) eventSize = 100;
          break;
        case "b":
          if (this.quote.eventSize[option] == true) eventSize = 200;
          break;
        case "c":
          if (this.quote.eventSize[option] == true) eventSize = 350;
          break;
        case "d":
          if (this.quote.eventSize[option] == true) eventSize = 525;
          break;
        case "e":
          if (this.quote.eventSize[option] == true) eventSize = 700;
          break;
      }
    }

    this.price += this.musicCalculator(music);
    this.price += this.venueCalculator(venue);
    this.price += this.staffCalculator(staff, eventSize);
    this.price += this.chairCalculator(chair, eventSize);
    this.price += this.tablewareCalculator(tableware, eventSize);
    this.price += this.platesCalculator(plates, eventSize);
    let tableData = this.tableCalculator(table, eventSize);

    this.price += tableData.price;
    this.price += this.tableclothCalculator(tablecloth, tableData.tables);

    let allQoutes: Quote[] = JSON.parse(
      localStorage.getItem("LEGASPI_ALL_QUOTES")
    );

    if (_.isEmpty(allQoutes)) {
      allQoutes = [this.quote];
    } else {
      allQoutes.push(this.quote);
    }

    localStorage.setItem("LEGASPI_ALL_QUOTES", JSON.stringify(allQoutes));
  }

  ngOnInit() {}

  private staffCalculator(staff: Option, eventSize: number): number {
    let price: number = 0;
    for (const option in staff) {
      let maxPeoplePerStaff = 200;
      let plate = 80; //plate of food
      let cook = 400;
      let valet = 350;
      let security = 350;
      let waiter = 350;

      let barman = 450;
      let captain = 600;
      let host = 350;

      switch (option) {
        case "a":
          //cookers cost
          maxPeoplePerStaff = 50;

          if (staff[option] == true) {
            let total = 0;

            switch (true) {
              case eventSize >= 100:
                total = plate * eventSize;
                break;
              case eventSize >= 200:
                total = plate * 0.75 * eventSize;
                break;
              case eventSize >= 300:
                total = plate * 0.5 * eventSize;
                break;
            }

            total += eventSize < maxPeoplePerStaff ? cook * 2 : cook * 4;

            console.log("cook", total);
            price += total;
          }
          break;
        case "b":
          //valet
          maxPeoplePerStaff = 100;

          if (staff[option] == true) {
            let total = eventSize < maxPeoplePerStaff ? valet * 2 : valet * 4;
            console.log("valet", total);
            price += total;
          }
          break;
        case "c":
          //securiry
          maxPeoplePerStaff = 100;

          if (staff[option] == true) {
            let total =
              eventSize < maxPeoplePerStaff ? security * 3 : security * 6;
            console.log("securiry", total);
            price += total;
          }
          break;
        case "d":
          //waiter
          maxPeoplePerStaff = 50;

          if (staff[option] == true) {
            let total =
              eventSize < maxPeoplePerStaff
                ? waiter
                : Math.ceil(eventSize / maxPeoplePerStaff) * waiter;
            console.log("waiter", total);
            price += total;
          }
          break;
        case "e":
          //barman
          maxPeoplePerStaff = 300;

          if (staff[option] == true) {
            let total =
              eventSize < maxPeoplePerStaff
                ? barman
                : Math.ceil(eventSize / maxPeoplePerStaff) * barman;
            console.log("barman", total);
            price += total;
          }
          break;
        case "f":
          //captain cost
          if (staff[option] == true) {
            price += captain;
          }
          break;
        case "g":
          //venuehost cost
          if (staff[option] == true) {
            price += host;
          }
          break;
      }
    }
    return price;
  }

  private musicCalculator(music: Option): number {
    let price: number = 0;
    for (const option in music) {
      let banda = 5000;
      let trios = 5000;
      let versatil = 45000;
      let mariachi = 5000;
      let batukada = 5000;

      switch (option) {
        case "a":
          //banda cost
          if (music[option] == true) {
            price += banda;
          }
          break;
        case "b":
          //trios cost
          if (music[option] == true) {
            price += trios;
          }
          break;
        case "c":
          //versatil cost
          if (music[option] == true) {
            price += versatil;
          }
          break;
        case "d":
          //mariachi cost
          if (music[option] == true) {
            price += mariachi;
          }
          break;
        case "e":
          //batukada cost
          if (music[option] == true) {
            price += batukada;
          }
          break;
      }
    }
    return price;
  }

  private venueCalculator(venue: Option): number {
    let price: number = 0;
    for (const option in venue) {
      let parking = 5000;
      let garden = 5000;
      let lobby = 45000;
      let pool = 5000;
      let inflatable = 5000;
      let bigInflatable = 5000;

      switch (option) {
        case "a":
          //parking cost
          if (venue[option] == true) {
            price += parking;
          }
          break;
        case "b":
          //garden cost
          if (venue[option] == true) {
            price += garden;
          }
          break;
        case "c":
          //lobby cost
          if (venue[option] == true) {
            price += lobby;
          }
          break;
        case "d":
          //mariachi cost
          if (pool[option] == true) {
            price += pool;
          }
          break;
        case "e":
          //inflatable cost
          if (venue[option] == true) {
            price += inflatable;
          }
          break;
        case "f":
          //bigInflatable cost
          if (venue[option] == true) {
            price += bigInflatable;
          }
          break;
      }
    }
    return price;
  }

  private tableCalculator(
    table: Option,
    eventSize: number
  ): { price: number; tables: number } {
    let price: number = 0;
    let tables: number = 0;

    for (const option in table) {
      let maxPeoplePerTable = 10;

      let round = 35;
      let rectangular = 35;
      let square = 45;
      let vintage = 45;

      switch (option) {
        case "a":
          //round cost
          if (table[option] == true) {
            maxPeoplePerTable = 10;
            tables = Math.ceil(eventSize / maxPeoplePerTable);
            price += tables * round;
          }
          break;
        case "b":
          //rectangular cost
          if (table[option] == true) {
            maxPeoplePerTable = 12;
            tables = Math.ceil(eventSize / maxPeoplePerTable);
            price += tables * rectangular;
          }
          break;
        case "c":
          //square cost
          if (table[option] == true) {
            maxPeoplePerTable = 4;
            tables = Math.ceil(eventSize / maxPeoplePerTable);
            price += tables * square;
          }
          break;
        case "d":
          //vintage cost
          if (table[option] == true) {
            maxPeoplePerTable = 6;
            tables = Math.ceil(eventSize / maxPeoplePerTable);
            price += tables * vintage;
          }
          break;
      }
    }
    return { price, tables };
  }

  private tableclothCalculator(table: Option, tables: number): number {
    let price: number = 0;

    for (const option in table) {
      let white = 45;
      let color = 35;
      let double = 47.5;
      let sintilla = 47.5;
      let bambalina = 55;

      switch (option) {
        case "a":
          //round cost
          if (table[option] == true) {
            price += tables * white;
          }
          break;
        case "b":
          //round cost
          if (table[option] == true) {
            price += tables * color;
          }
          break;
        case "c":
          //round cost
          if (table[option] == true) {
            price += tables * double;
          }
          break;
        case "d":
          //round cost
          if (table[option] == true) {
            price += tables * sintilla;
          }
          break;
        case "e":
          //round cost
          if (table[option] == true) {
            price += tables * bambalina;
          }
          break;
      }
    }
    return price;
  }

  private chairCalculator(chair: Option, eventSize: number): number {
    let price: number = 0;

    for (const option in chair) {
      let folding = 6;
      let tiffany = 21;

      switch (option) {
        case "a":
          //round cost
          if (chair[option] == true) {
            price += eventSize * folding;
          }
          break;
        case "b":
          //round cost
          if (chair[option] == true) {
            price += eventSize * tiffany;
          }
          break;
      }
    }
    return price;
  }

  private tablewareCalculator(tableware: Option, eventSize: number): number {
    let price: number = 0;

    for (const option in tableware) {
      let spoon = 2;
      let fork = 2;
      let knife = 2;
      let spoonSmall = 2;
      let penguin = 8;
      let waterGlass = 15;
      let wineGlass = 10;
      let drinkGlass = 3;

      switch (option) {
        case "a":
          //round cost
          if (tableware[option] == true) {
            price += eventSize * spoon;
          }
          break;
        case "b":
          //round cost
          if (tableware[option] == true) {
            price += eventSize * fork;
          }
          break;
        case "c":
          //round cost
          if (tableware[option] == true) {
            price += eventSize * knife;
          }
          break;
        case "d":
          //round cost
          if (tableware[option] == true) {
            price += eventSize * spoonSmall;
          }
          break;
        case "e":
          //round cost
          if (tableware[option] == true) {
            price += eventSize * penguin;
          }
          break;
        case "f":
          //round cost
          if (tableware[option] == true) {
            price += eventSize * waterGlass;
          }
          break;
        case "f":
          //round cost
          if (tableware[option] == true) {
            price += eventSize * wineGlass;
          }
          break;
        case "f":
          //round cost
          if (tableware[option] == true) {
            price += eventSize * drinkGlass;
          }
          break;
      }
    }
    return price;
  }

  private platesCalculator(plates: Option, eventSize: number): number {
    let price: number = 0;

    for (const option in plates) {
      let trinche = 2;
      let bowl = 2;
      let cake = 2;
      let round = 2;

      switch (option) {
        case "a":
          //round cost
          if (plates[option] == true) {
            price += eventSize * trinche;
          }
          break;
        case "b":
          //round cost
          if (plates[option] == true) {
            price += eventSize * bowl;
          }
          break;
        case "c":
          //round cost
          if (plates[option] == true) {
            price += eventSize * cake;
          }
          break;
        case "d":
          //round cost
          if (plates[option] == true) {
            price += eventSize * round;
          }
          break;
      }
    }
    return price;
  }
}
