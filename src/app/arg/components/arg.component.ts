import { Component , HostListener } from '@angular/core';
import { trigger , transition , animate  , state , style} from '@angular/animations';

@Component({
  selector: 'app-arg',
  templateUrl: './arg.component.html',
  styleUrls: ['./arg.component.css'],
  animations: [
    trigger('animateNg', [
      state('open', style({
        width: '100%'
      })),
      state('closed', style({
        width:'0%'
      })),
      transition('open => closed', [
        animate('10s')
      ]),
      transition('closed => open', [
        animate('10s')
      ]),
    ])
  ]
})
export class ArgComponent {
  public innerWidth: any;
  public innerHeight: any;
  spinner = '';
  teamArray$: { name: string, marginLeft: any , marginTop: string }[] =
  [
    {name: 'Messi' , marginLeft:'25%' , marginTop:'15%'},
    {name: 'Alvarez' , marginLeft:'50%' , marginTop:'15%'},
    {name: 'DiMaria' , marginLeft:'75%' , marginTop:'15%'},
    {name: 'DePaul' , marginLeft:'25%' , marginTop:'40%'},
    {name: 'Fernandez' , marginLeft:'50%' , marginTop:'40%'},
    {name: 'MacAllister' , marginLeft:'75%' , marginTop:'40%'},
    {name: 'Tagliafico' , marginLeft:'12.5%' , marginTop:'65%'},
    {name: 'Otamendi' , marginLeft:'37.5%' , marginTop:'65%'},
    {name: 'Romero' , marginLeft:'62.5%' , marginTop:'65%'},
    {name: 'Molina' , marginLeft:'87.5%' , marginTop:'65%'},
    {name: 'Martinez' , marginLeft:'50%' , marginTop:'85%'}
  ]
  allPlayerStats$: any = {
    Messi:{ games: {wc:7 , leage:13 , max:15} , goals:{wc:7 , leage:7, max:20} , goalPercPerGame: {wc:1 , leage:0.56, max:1.33} , assists: {wc:3 , leage:10, max:10} , assistPerc:{wc:0.42 , leage:0.8, max:0.8} , passes: {wc:48.39 , leage:66.5, max:109.95} , passPerc: {wc:80.9 , leage:79.6, max:95}},
    Alvarez:{ games: {wc:7 , leage:12, max:15} , goals:{wc:4 , leage:3, max:20} , goalPercPerGame: {wc:0.42 , leage:0.33, max:1.33} , assists: {wc:1 , leage:0, max:10} , assistPerc:{wc:0.12 , leage:0, max:0.8} , passes: {wc:23.47 , leage:24.84, max:109.95} , passPerc: {wc:76.9 , leage:83.7, max:95}},
    DiMaria:{ games: {wc:5 , leage:7, max:15} , goals:{wc:1 , leage:1, max:20} , goalPercPerGame: {wc:0.2, leage:0.12, max:1.33} , assists: {wc:2 , leage:1, max:10} , assistPerc:{wc:0.4 , leage:0.12, max:0.8} , passes: {wc:52.19 , leage:54.38, max:109.95} , passPerc: {wc:77.2 , leage:76, max:95}},
    DePaul:{ games: {wc:7 , leage:12, max:15} , goals:{wc:0 , leage:1, max:20} , goalPercPerGame: {wc:0 , leage:0.08, max:1.33} , assists: {wc:0 , leage:1, max:10} , assistPerc:{wc:0 , leage:0.08, max:0.8} , passes: {wc:84.4 , leage:61.39, max:109.95} , passPerc: {wc:83.6 , leage:81.0, max:95}},
    Fernandez:{ games: {wc:7 , leage:13, max:15} , goals:{wc:1 , leage:1, max:20} , goalPercPerGame: {wc:0.12 , leage:0.07, max:1.33} , assists: {wc:1 , leage:3, max:10} , assistPerc:{wc:0.12 , leage:0.25, max:0.8} , passes: {wc:75.16 , leage:109.95, max:109.95} , passPerc: {wc:87.5 , leage:88.9, max:95}},
    MacAllister:{ games: {wc:6 , leage:14, max:15} , goals:{wc:1 , leage:5, max:20} , goalPercPerGame: {wc:0.16 , leage:0.35, max:1.33} , assists: {wc:1 , leage:0, max:10} , assistPerc:{wc:0.16 , leage:0, max:0.8} , passes: {wc:43.36 , leage:58.97, max:109.95} , passPerc: {wc:88.3 , leage:88, max:95}},
    Tagliafico:{ games: {wc:6 , leage:13, max:15} , goals:{wc:0 , leage:1, max:20} , goalPercPerGame: {wc:0 , leage:0.07, max:1.33} , assists: {wc:0 , leage:2, max:10} , assistPerc:{wc:0 , leage:0.15, max:0.8} , passes: {wc:43.19 , leage:58.67, max:109.95} , passPerc: {wc:81.6 , leage:86.7, max:95}},
    Otamendi:{ games: {wc:7 , leage:12, max:15} , goals:{wc:0 , leage:0, max:20} , goalPercPerGame: {wc:0 , leage:0, max:1.33} , assists: {wc:1 , leage:0, max:10} , assistPerc:{wc:0.14 , leage:0, max:0.8} , passes: {wc:75.26 , leage:79.66, max:109.95} , passPerc: {wc:92.2 , leage:92.5, max:95}},
    Romero:{ games: {wc:7 , leage:8, max:15} , goals:{wc:0 , leage:0, max:20} , goalPercPerGame: {wc:0 , leage:0, max:1.33} , assists: {wc:0 , leage:0, max:10} , assistPerc:{wc:0 , leage:0, max:0.8} , passes: {wc:61.70 , leage:60.18, max:109.95} , passPerc: {wc:89.9 , leage:87, max:95}},
    Molina:{ games: {wc:7 , leage:11, max:15} , goals:{wc:1 , leage:0, max:20} , goalPercPerGame: {wc:0.14 , leage:0, max:1.33} , assists: {wc:1 , leage:0, max:10} , assistPerc:{wc:0.09 , leage:0, max:0.8} , passes: {wc:56.83 , leage:60.10, max:109.95} , passPerc: {wc:76.9 , leage:72.3, max:95}},
    Martinez:{ games: {wc:7 , leage:15, max:15} , goalsAgainst:{wc:1.14 , leage:1.25, max:2} , goalsAgainstPerc: {wc:1.14 , leage:1.25, max:0.65} , cleanSheet: {wc:3 , leage:3, max:9} , cleanSheetPerc:{wc:42.9 , leage:5, max:52.9} , savePerc: {wc:53.8 , leage:68.5, max:82.5} , savePercPenalties: {wc:0 , leage:33, max:100}},
  }
  maxStats$: any = { games: 15, goals: 20, goalPercPerGame: 1.33, assists: 10, assistPerc: 0.8, passes: 109.95 , passPerc: 95 }
  maxStatsGK$: any = { games: 15, goalsAgainst: 2, goalsAgainstPerc: 0.65, cleanSheet: 9, cleanSheetPerc: 52.9, savePerc: 82.5 , savePercPenalties: 100 }
  playerActive$: string = '';

  constructor( ) {

  }
  objectValues(obj: any) {
    return Object.values(obj);
  }
  add(name: string , first: any , stats: any , i: number) {
    let styles = {
    '--size':
    first != 0 && name != 'Martinez' ? (((first / this.maxStats$[stats]) * (100)) + '%') :
    first != 0 && name == 'Martinez' ?
    (
      stats == 'goalsAgainstPerc' ? (((this.maxStatsGK$[stats] / first ) * (100)) + '%') :
      (((first / this.maxStatsGK$[stats]) * (100)) + '%')
    )
    :
    '5%',
    '--color':
    name != 'Martinez' ? (
      (first / this.maxStats$[stats]) * (100) < 10 ? 'lightgrey' :
      (first / this.maxStats$[stats]) * (100) < 30 ? '#ffee32' :
      (first / this.maxStats$[stats]) * (100) < 60 ? '#ffd90d' :
      (first / this.maxStats$[stats]) * (100) < 100 ? '#fbc501' :
      '#f3ac01'
    ) :
    (first / this.maxStatsGK$[stats]) * (100) < 10 ? 'lightgrey' :
    (first / this.maxStatsGK$[stats]) * (100) < 30 ? '#ffee32' :
    (first / this.maxStatsGK$[stats]) * (100) < 60 ? '#ffd90d' :
    (first / this.maxStatsGK$[stats]) * (100) < 100 ? '#fbc501' :
    '#f3ac01'
    ,
    'margin-bottom':i != 2 ? '3px' : 0,
    'margin-top':i != 0 ? '3px' : 0,
    'border-top-right-radius': '20px',
    'border-bottom-right-radius': '20px',
    'box-shadow': '0px 0 5px var(--color)'
  };
  return styles;
  }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }
  playerClicked(player : string){
    if(this.playerActive$ != player) {
      this.playerActive$ = player;
      this.spinner = player;
    }
    else {
      this.playerActive$ = '';
      this.spinner = '';
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }
}
