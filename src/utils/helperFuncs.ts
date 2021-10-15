export const getNthSubstringFromPath = (pathname: string, substringIndex: number): string => {
  const splitPath = pathname.split("/");

  return splitPath.length > substringIndex ? splitPath[substringIndex] : "";
};

export const substringToNthSymbol = ({
  inputString,
  symbol,
  occurrence = 1,
  includeFinalSymbol,
}: {
  inputString: string;
  symbol: string;
  occurrence: 1;
  includeFinalSymbol: boolean;
}): string => {
  let indexOfSymbol = -1;
  let newIndex = -1;
  let foundAtLeastOnce = false;

  for (let i = 0; i < occurrence; i++) {
    newIndex = inputString.indexOf(symbol, indexOfSymbol + 1);

    if (newIndex !== -1) {
      foundAtLeastOnce = true;
      indexOfSymbol = newIndex;
    }
    if (newIndex === -1 && foundAtLeastOnce) indexOfSymbol = inputString.length - 1;
  }

  indexOfSymbol = indexOfSymbol > inputString.length - 1 ? inputString.length : indexOfSymbol;

  return inputString.substring(0, indexOfSymbol + (includeFinalSymbol ? 1 : 0));
};

//FIXME: Rework purely with dates and return dates array
export const getDaysBetweenTwoDates = (dates: [Date, Date]): number[] => {
  const daysArray: number[] = [];

  const endDay = dates[1].getDate();
  const endMonth = dates[1].getMonth();
  const startDay = dates[0].getDate();
  const startMonth = dates[0].getMonth();

  let daysArrayIndex = 0;

  for (let month = startMonth; month <= endMonth; month++) {
    const lastDayOfCurrentMonth = new Date(2021, month + 1, 0).getDate();
    const newEndDay = month === endMonth ? endDay : lastDayOfCurrentMonth;
    const newStartDay = startMonth === endMonth ? startDay : month === startMonth ? startDay : 1;

    for (let day = newStartDay; day <= newEndDay; day++) {
      daysArray[daysArrayIndex] = day;
      daysArrayIndex++;
    }
  }

  return daysArray;
};

export const generateEmpty3dShiftsArray = (): { shift: string }[][][] => {
  const array: { shift: string }[][][] = [[[]]];
  const months = 12;

  for (let month = 0; month < months; month++) {
    const monthDays = new Date(2021, month + 1, 0).getDate();
    array[0].push([]);

    for (let day = 0; day < monthDays; day++) {
      array[0][month].push({ shift: "X" });
    }
  }

  return array;
};
