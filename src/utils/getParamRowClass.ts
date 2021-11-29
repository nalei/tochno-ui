const getParamRowClass = (indexParam: number, length: number): string => {
  if (length === 2 || length === 4 || (length === 5 && indexParam > 2)) {
    return 'grid-6-12 grid-sm-12-12';
  }
  if (length === 3 || length === 6 || (length === 5 && indexParam <= 2)) {
    return 'grid-4-12 grid-sm-12-12';
  }
  return 'grid-12-12';
};

export default getParamRowClass;
