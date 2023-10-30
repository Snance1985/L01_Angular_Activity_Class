class SpaceCraft {
    speedMph: number;
    name: string;
  
    constructor(name: string, speedMph: number) {
      this.name = name;
      this.speedMph = speedMph;
    }
  
    getTimeToLocation(milesToLocation: number): void {
      const timeToLocation = milesToLocation / this.speedMph;
      console.log(`${this.name} would take ${timeToLocation} hours to get to the specified location.`);
    }
  }
  
  const Determination = new SpaceCraft('Determination', 0.625);
  Determination.getTimeToLocation(8426485);