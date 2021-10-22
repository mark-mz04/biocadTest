window.onload = () => {

  class User {
    constructor(properties) {
      this.name = properties.name
      this.data = properties.data
      this.b1 = properties.b1   // Column: Used buffer solutions
      this.b2 = properties.b2   // Column: Used buffer solutions
      this.b3 = properties.b3   // Column: Used buffer solutions
      this.b4 = properties.b4   // Column: Used buffer solutions
      this.b5 = properties.b5   // Column: Used buffer solutions
      this.slope = properties.slope
      this.offset = properties.offset
      this.slopeId = properties.slopeId
      this.offsetId = properties.offsetId
    }

    template() {
      return `<div class="report-table-row">
                    <div class="table-data">${this.data}</div >
                
                    <ul class="table-bufSolutions ">
                        <li class="table-bufSolutions-item tableText">
                            ${this.b1}
                        </li>
                        <li class="table-bufSolutions-item tableText">
                            ${this.b2}
                        </li>
                        <li class="table-bufSolutions-item tableText">
                            ${this.b3}
                        </li>
                        <li class="table-bufSolutions-item tableText">
                            ${this.b4}
                        </li>
                        <li class="table-bufSolutions-item tableText">
                            ${this.b5}
                        </li>
                    </ul>
                
                    <div class="table-colWrapper">
                        <div class="table-slope tableText">${this.slope}</div>
                        <div id="${this.slopeId}" class="mark"></div>
                    </div>
                    
                    <div class="table-colWrapper">
                        <div class="table-offset tableText">${this.offset}</div>
                        <div id="${this.offsetId}" class="mark"></div>
                    </div>
                
                    <div class="table-user">${this.name}</div>
              </div >`
    }

    render() {
      let div = document.getElementById('table');
      div.innerHTML += this.template();
      this.mark();
    }

    mark() {
      this.markSlope();
      this.markOffset();
    }

    markSlope() {
      let mark = document.getElementById(`${this.slopeId}`);

      if (this.slope >= 95 && this.slope <= 105) {
        mark.classList.add('mark-norm');
        return;
      }

      mark.classList.add('mark-unNorm');
    }

    markOffset() {
      let mark = document.getElementById(`${this.offsetId}`);

      if (this.offset >= -20 && this.offset <= 20) {
        mark.classList.add('mark-norm');
        return;
      }

      mark.classList.add('mark-unNorm');
    }

  }

  const user1 = new User({
    name: 'Иванов Генадий Петрович',
    data: `04.10.19 10:23`,
    b1: 'В1: № 2000460789536: pH 1.09',
    b2: 'В2: № 2000460789536: pH 2.00',
    b3: 'B3: № 2000460789536: pH 4.01',
    b4: 'В4: № 2000460789536: pH 7.00',
    b5: 'В5: № 2000460789536: pH 9.21',
    slope: 98.7,
    offset: -0.3,
    slopeId: 'U1',
    offsetId: 'U1.1'
  })

  const user2 = new User({
    name: 'Петров Иван Генадьевич',
    data: `04.10.19 10:23`,
    b1: 'В1: № 2000460789536: pH 1.09',
    b2: 'В2: № 2000460789536: pH 2.00',
    b3: 'B3: № 2000460789536: pH 4.01',
    b4: 'В4: № 2000460789536: pH 7.00',
    b5: 'В5: № 2000460789536: pH 9.21',
    slope: 98.7,
    offset: -0.3,
    slopeId: 'U2',
    offsetId: 'U2.1'
  })

  const user3 = new User({
    name: 'Петров Генадий Иванович',
    data: `04.10.19 10:23`,
    b1: 'В1: № 2000460789536: pH 1.09',
    b2: 'В2: № 2000460789536: pH 2.00',
    b3: 'B3: № 2000460789536: pH 4.01',
    b4: 'В4: № 2000460789536: pH 7.00',
    b5: 'В5: № 2000460789536: pH 9.21',
    slope: 98.7,
    offset: -0.3,
    slopeId: 'U3',
    offsetId: 'U3.1'
  })

  const user4 = new User({
    name: 'Генадьев Иван Петрович',
    data: `04.10.19 10:23`,
    b1: 'В1: № 2000460789536: pH 1.09',
    b2: 'В2: № 2000460789536: pH 2.00',
    b3: 'B3: № 2000460789536: pH 4.01',
    b4: 'В4: № 2000460789536: pH 7.00',
    b5: 'В5: № 2000460789536: pH 9.21',
    slope: 90.1,
    offset: -0.5,
    slopeId: 'U4',
    offsetId: 'U4.1'
  })

  user1.render();
  user2.render();
  user3.render();
  user4.render();

}