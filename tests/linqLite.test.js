import {linq, linqSum} from './../src';
//
//import {linq, linqSum} from '../src';

describe('linq working', () => {

    test('linq is loaded', () => {
        expect(linq).not.toBeNull();
      });
      
      test('linq like group by', () => {
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
            
                linqSum('otro', 'otronombre'),
              ]
            }
            
            const r = linq(linqQuery);
            
            expect(r).not.toBeNull();
      
      });
      
});
