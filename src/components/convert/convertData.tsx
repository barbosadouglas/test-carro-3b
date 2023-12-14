const convertData = (oldData: any) => {
  const newData: Array<any> = [];

  const categories = new Set(oldData.map((od: any) => od.brand));

  const categoriesArray = Array.from(categories).sort();

  categoriesArray.forEach((c: any) => {
    newData.push({
      brand: c,
      data: oldData.filter((od: any) => od.brand === c),
    });
  });

  return newData;
};

export default convertData;
