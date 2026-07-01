export class Odometer {

  private readonly loops = 4;

  private element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;

    this.build();
    this.observe();
  }

  private build(){

    const value = this.element.dataset.value ?? "";

    [...value].forEach(char=>{

      if(isNaN(Number(char))){
        this.element.append(char);
        return;
      }

      const digit = document.createElement("div");
      digit.className="odometer-digit";

      const track = document.createElement("div");
      track.className="odometer-track";

      // создаем несколько повторений 0-9
      for(let l=0;l<this.loops;l++){

        for(let n=0;n<10;n++){

          const number = document.createElement("div");
          number.className="odometer-number";
          number.textContent=String(n);

          track.append(number);
        }
      }

      digit.append(track);
      this.element.append(digit);
    });

  }

  play(){

    const value=this.element.dataset.value!;

    let digitIndex=0;

    [...value].forEach((char)=>{

      if(isNaN(Number(char))) return;

      const track=this.element.querySelectorAll<HTMLElement>(".odometer-track")[digitIndex];

      const target=(this.loops-1)*10+Number(char);

      track.style.transitionDelay=`${digitIndex*120}ms`;
      track.style.transform=`translateY(-${target}em)`;

      digitIndex++;
    });

  }

  private observe(){

    const observer=new IntersectionObserver(([entry])=>{

      if(!entry.isIntersecting) return;

      this.play();

      observer.disconnect();

    },{
      threshold:.5
    });

    observer.observe(this.element);

  }

}
