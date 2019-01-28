import {linq, linqSum} from './../src';
import original from './data.original';
import expected from './data.expected';

describe('linq working with original data', () => {

    test('linq like group by', () => {
        const objects = original;

        const fields = [    
            "SkuIdCG",
            "Talla",
            "SkuIdGC",
            "SkuIdFC",
            "FactorYardaLibra",
            "PlantaCorteId",
            "PlantaCosturaId",
            "TransaccionBomId",
            "ColorBlockId",
            "RequerimientoId",
        ];

        const linqQuery = {
            from: objects, 
            groupBy: fields,
            select: [
                ...fields,
                linqSum("Libras"),
                linqSum("Puerto1"),
                linqSum("Puerto2"),
                linqSum("Puerto3"),
                linqSum("Puerto4"),
                linqSum("Puerto5"),
                linqSum("Puerto6"),
                linqSum("Puerto7"),
                linqSum("Puerto8"),
                linqSum("Puerto9"),
                linqSum("Puerto10"),
                linqSum("Puerto11"),
                linqSum("Puerto12"),
            ]
        }
        
        const r = linq(linqQuery);
        
        expect(r).toEqual(expected);
    
    });
      
});
