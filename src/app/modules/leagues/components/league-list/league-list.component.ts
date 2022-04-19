import { Component, OnInit } from '@angular/core';

interface League {
  id: string;
  name: string;
  sport: string;
  season: string;
  starting: string;
}

const Leagues: League[] = [
  {
    id: '19576d67-fe3e-4a59-9d03-9e3e11c9357d',
    name: '40+ Draft League Winter 2022',
    sport: 'Hockey',
    season: '40+ Draft League Winter 2022',
    starting: '1/26/2022'
  },
  {
    id: '85db282a-ebf6-409e-869f-69b20f3b61dc',
    name: 'Division 1',
    sport: 'Hockey',
    season: 'Kraken Hockey League Fall/Winter 2021-22',
    starting: '9/26/2021'
  },
  {
    id: '9b059cc7-ca99-4d58-b31e-e886d2904daa',
    name: 'Division 2',
    sport: 'Hockey',
    season: 'Kraken Hockey League Fall/Winter 2021-22',
    starting: '9/26/2021'
  },
  {
    id: '7d51f38a-dcb9-49ec-adc8-2ce5b37e885e',
    name: 'Division 3A',
    sport: 'Hockey',
    season: 'Kraken Hockey League Fall/Winter 2021-22',
    starting: '9/26/2021'
  },
  {
    id: '381ded4f-a983-4f87-a46d-0f32253ba515',
    name: 'Division 3B',
    sport: 'Hockey',
    season: 'Kraken Hockey League Fall/Winter 2021-22',
    starting: '9/26/2021'
  },
  {
    id: '9eb9cbe5-1de0-4ba8-8f21-c9c9d31ddbe3',
    name: 'Division 4A',
    sport: 'Hockey',
    season: 'Kraken Hockey League Fall/Winter 2021-22',
    starting: '9/26/2021'
  },
  {
    id: 'b7e06ec2-60cf-4e94-8fc6-135761fc1d9c',
    name: 'Division 4B',
    sport: 'Hockey',
    season: 'Kraken Hockey League Fall/Winter 2021-22',
    starting: '9/26/2021'
  },
  {
    id: 'da8c0db4-eaf6-4006-85d3-624e5e6cc1f7',
    name: 'Division 4C',
    sport: 'Hockey',
    season: 'Kraken Hockey League Fall/Winter 2021-22',
    starting: '9/26/2021'
  },
  {
    id: 'f8b6123a-ce77-46b5-8218-2821b3bba1bf',
    name: 'Division 5A',
    sport: 'Hockey',
    season: 'Kraken Hockey League Fall/Winter 2021-22',
    starting: '9/26/2021'
  },
  {
    id: 'cefe2b7c-c08d-4c4c-85b9-b5642ebf067e',
    name: 'Evaluation Skates',
    sport: 'Hockey',
    season: 'Kraken Hockey League Fall/Winter 2021-22',
    starting: '9/26/2021'
  },
  {
    id: '2d37ac18-44dc-45e5-b1d0-bd3f7dad668e',
    name: 'Evaluation Skates',
    sport: 'Hockey',
    season: 'Kraken Hockey League Summer 2022',
    starting: '4/12/2022'
  }
];

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss']
})
export class LeagueListComponent implements OnInit {
  public leagues;
  public headers: any;

  constructor() { 
    this.leagues = Leagues;
    this.headers = [
      {name: 'ID', hidden: true, property: 'id'},
      {name: 'League Name', linkBy: 'id', property: 'name'},
      {name: 'Sport', property: 'sport'},
      {name: 'Season', property: 'season'},
      {name: 'Starting', property: 'starting'},
    ];
  }

  ngOnInit(): void {
  }

}
