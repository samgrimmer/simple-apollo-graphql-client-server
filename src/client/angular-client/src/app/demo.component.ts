import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';

import gql from 'graphql-tag';

import { MyDetails } from './demo.types';

@Component({
  selector: 'app-demo',
  template: `
    <div style="text-align: center;">
      <p>Name: {{ myDetails.myName }}</p>
      <p>Address: {{ myDetails.myAddress }}</p>
    </div>
  `,
})
export class DemoComponent implements OnInit {
  myDetails: MyDetails;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery<MyDetails>({
        query: gql`
          query {
            myName
            myAddress
          }
        `,
      })
      .valueChanges.subscribe(result => {
        this.myDetails = result.data;
      });
  }
}
