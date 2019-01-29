# linq-lite library

# Use Mode

    const objects = [
        { col_uno: '1', col_dos: '01', col_tres: '001', otro: 1 },
        { col_uno: '2', col_dos: '00', col_tres: '001', otro: 1 },
        { col_uno: '3', col_dos: '01', col_tres: '002', otro: 1 },
        { col_uno: '1', col_dos: '01', col_tres: '001', otro: 1 }
    ];
        
    const linqQuery = {
        from: objects, 
        groupBy: [
            'col_tres', 
            'col_dos',
        ],
        select: [
            'col_dos',
            'col_tres', 
            linqSum('otro'),
        ]
    }
    
    const r = linq(linqQuery);


Output:
          {col_dos: "01", col_tres: "001", otronombre: 2},
          {col_dos: "00", col_tres: "001", otronombre: 1},
          {col_dos: "01", col_tres: "002", otronombre: 1},


Start watching and run the tests
`npm t` OR `npm test` OR `npm run test`


# Autor: Emiliano Ocariz