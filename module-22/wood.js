
// bes, table, chat bainaite total koto cft wood lagbe seta ber koro

function wood(table, chair, bed) {
    const tableWood = 3;
    const chairWood = 1;
    const bedWood = 10;

    const totalChairWood = chairWood*chair;
    const totalTableWood = tableWood*table;
    const totalBedWood = bedWood*bed;

    const totalWood = totalBedWood+totalChairWood+totalTableWood;

    return totalWood
  
}

const total = wood(1, 6, 1);
console.log('total wood needed for you : '+total+' cft');



