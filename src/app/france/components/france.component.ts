import { Component , HostListener } from '@angular/core';
import { trigger , transition , animate  , state , style} from '@angular/animations';

@Component({
  selector: 'app-fra',
  templateUrl: './france.component.html',
  styleUrls: ['./france.component.css'],
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
export class FranceComponent {
  public innerWidth: any;
  public innerHeight: any;
  spinner = '';
  teamArray$: { name: string, marginLeft: any , marginTop: string }[] =
  [
    {name: 'Giroud' , marginLeft:'50%' , marginTop:'10%'},
    {name: 'Mbappe' , marginLeft:'12.5%' , marginTop:'30%'},
    {name: 'Dembele' , marginLeft:'87.5%' , marginTop:'30%'},
    {name: 'Griezmann' , marginLeft:'50%' , marginTop:'30%'},
    {name: 'Rabiot' , marginLeft:'25%' , marginTop:'50%'},
    {name: 'Tchouameni' , marginLeft:'75%' , marginTop:'50%'},
    {name: 'Hernandez' , marginLeft:'12.5%' , marginTop:'70%'},
    {name: 'Upamecano' , marginLeft:'37.5%' , marginTop:'70%'},
    {name: 'Varane' , marginLeft:'62.5%' , marginTop:'70%'},
    {name: 'Kounde' , marginLeft:'87.5%' , marginTop:'70%'},
    {name: 'Lloris' , marginLeft:'50%' , marginTop:'85%'}
  ]
  allPlayerStats$: any = {
    Mbappe:{ games: {wc:7 , leage:15 , max:15} , goals:{wc:8 , leage:13, max:20} , goalPercPerGame: {wc:1.14 , leage:0.81, max:1.33} , assists: {wc:2 , leage:2, max:10} , assistPerc:{wc:0.3 , leage:0.13, max:0.8} , passes: {wc:34.46 , leage:40.71, max:109.95} , passPerc: {wc:75.5 , leage:81.3, max:95}},
    Giroud:{ games: {wc:6 , leage:13, max:15} , goals:{wc:4 , leage: 5, max:20} , goalPercPerGame: {wc:0.67 , leage:0.38, max:1.33} , assists: {wc:0 , leage:3, max:10} , assistPerc:{wc:0 , leage:0.23, max:0.8} , passes: {wc:15.90 , leage:21, max:109.95} , passPerc: {wc:64.9 , leage:62.6, max:95}},
    Griezmann:{ games: {wc:7 , leage:15, max:15} , goals:{wc:0 , leage:5, max:20} , goalPercPerGame: {wc:0, leage:0.33, max:1.33} , assists: {wc:3 , leage:5, max:10} , assistPerc:{wc:0.43 , leage:0.33, max:0.8} , passes: {wc:55.14 , leage:53.09, max:109.95} , passPerc: {wc:78.4 , leage:76.7, max:95}},
    Dembele:{ games: {wc:7 , leage:15, max:15} , goals:{wc:0 , leage:4, max:20} , goalPercPerGame: {wc:0 , leage:0.26, max:1.33} , assists: {wc:3 , leage:5, max:10} , assistPerc:{wc:0.42 , leage:0.33, max:0.8} , passes: {wc:84.4 , leage:54.10, max:109.95} , passPerc: {wc:83.6 , leage:77, max:95}},
    Rabiot:{ games: {wc:7 , leage:11, max:15} , goals:{wc:1 , leage:3, max:20} , goalPercPerGame: {wc: 0.19, leage:0.29, max:1.33} , assists: {wc:1 , leage:2, max:10} , assistPerc:{wc:0.19 , leage:0.19, max:0.8} , passes: {wc:52.92 , leage:37.85, max:109.95} , passPerc: {wc:83.5 , leage:83.4, max:95}},
    Tchouameni:{ games: {wc:7 , leage:13, max:15} , goals:{wc:1 , leage:0, max:20} , goalPercPerGame: {wc:0.14 , leage:0, max:1.33} , assists: {wc:0 , leage:2, max:10} , assistPerc:{wc:0 , leage:0.15, max:0.8} , passes: {wc:68.70 , leage:68.10, max:109.95} , passPerc: {wc:89.5 , leage:92.4, max:95}},
    Hernandez:{ games: {wc:7 , leage:13, max:15} , goals:{wc:1 , leage:2, max:20} , goalPercPerGame: {wc:0.14 , leage:0.15, max:1.33} , assists: {wc:2 , leage:2, max:10} , assistPerc:{wc:0.35 , leage:0.15, max:0.8} , passes: {wc:60.06 , leage:81.6, max:109.95} , passPerc: {wc:81.6 , leage:78.6, max:95}},
    Upamecano:{ games: {wc:7 , leage:15, max:15} , goals:{wc:0 , leage:0, max:20} , goalPercPerGame: {wc:0 , leage:0, max:1.33} , assists: {wc:0 , leage:0, max:10} , assistPerc:{wc:0 , leage:0, max:0.8} , passes: {wc:65.81 , leage:82.01, max:109.95} , passPerc: {wc:89.5 , leage:90.3, max:95}},
    Varane:{ games: {wc:7 , leage:12, max:15} , goals:{wc:0 , leage:0, max:20} , goalPercPerGame: {wc:0 , leage:0, max:1.33} , assists: {wc:0 , leage:0, max:10} , assistPerc:{wc:0 , leage:0, max:0.8} , passes: {wc:49.69 , leage:46.59, max:109.95} , passPerc: {wc:89.5 , leage:85.5, max:95}},
    Kounde:{ games: {wc:6 , leage:8, max:15} , goals:{wc:0 , leage:0, max:20} , goalPercPerGame: {wc:0 , leage:0, max:1.33} , assists: {wc:0 , leage:2, max:10} , assistPerc:{wc:0 , leage:0.25, max:0.8} , passes: {wc:58.31 , leage:76.06, max:109.95} , passPerc: {wc:81 , leage:91.2, max:95}},
    Lloris:{ games: {wc:7 , leage:15, max:15} , goalsAgainst:{wc:1.17 , leage:1.44, max:2} , goalsAgainstPerc: {wc:1.17 , leage:1.44, max:0.65} , cleanSheet: {wc:1 , leage:4, max:9} , cleanSheetPerc:{wc:16.7 , leage:25, max:52.9} , savePerc: {wc:83.3 , leage:68.6, max:82.5} , savePercPenalties: {wc:0 , leage:0, max:100}},
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
    first != 0 && name != 'Lloris' ? (((first / this.maxStats$[stats]) * (100)) + '%') :
    first != 0 && name == 'Lloris' ?
    (
      stats == 'goalsAgainstPerc' ? (((this.maxStatsGK$[stats] / first ) * (100)) + '%') :
      (((first / this.maxStatsGK$[stats]) * (100)) + '%')
    )
    :
    '5%',
    '--color':
    name != 'Lloris' ? (
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
