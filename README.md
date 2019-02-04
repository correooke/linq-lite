# linq-lite library

> Really simple library to process a array and group by one or more columns, and sum other columns. Similar to linq behaviour. *

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

## Install

$ npm install linq-groupby

Or

$ yarn add linq-groupby

## Usage Mode

You can learn to use it by a basic example: 

    const exampleData = [
        { colFirst: '1', colSecond: '01', col_three: '001', other: 1 },
        { colFirst: '2', colSecond: '00', col_three: '001', other: 1 },
        { colFirst: '3', colSecond: '01', col_three: '002', other: 1 },
        { colFirst: '1', colSecond: '01', col_three: '001', other: 1 }
    ];
        
    const linqQuery = {
        from: exampleData, 
        groupBy: [
            'col_three', 
            'colSecond',
        ],
        select: [
            'colSecond',
            'col_three', 
            linqSum('other', 'otherName'),
        ]
    }
    
    const r = linq(linqQuery);
// Output:
//        [  {colSecond: "01", col_three: "001", otherName: 2},
//          {colSecond: "00", col_three: "001", otherName: 1},
//          {colSecond: "01", col_three: "002", otherName: 1} ]


Start watching and run the tests
`npm t` OR `npm test` OR `npm run test`

* Other features can be requested and added in the future

### Author: Emiliano Ocariz – [@EmilianoOke](https://twitter.com/EmilianoOke)