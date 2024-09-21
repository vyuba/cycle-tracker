const STORAGE_KEY = "period-tracker";

function getAllStoredPeriods() {
  if (typeof window !== 'undefined') {
    const data = window.localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }
  return [];
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { timeZone: "UTC" });
}

export function storeNewPeriod(startDate, endDate) {
  const periods = getAllStoredPeriods();
  const start = new Date(startDate);
  const end = new Date(endDate);
  let timeDifference = end.getTime() - start.getTime();
  let cycleLength = timeDifference / (1000 * 60 * 60 * 24);

  periods.push({ startDate, endDate });
  periods.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
  
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(periods));
  }

  return { cycleLength, nextPeriodStart: predictNextPeriod(periods) };
}

export function predictNextPeriod(periods) {
  if (periods.length < 2) {
    return "Not enough data to predict next period.";
  }

  let totalCycleLength = 0;
  for (let i = 1; i < periods.length; i++) {
    const currentStart = new Date(periods[i].startDate);
    const previousStart = new Date(periods[i].endDate);
    totalCycleLength += (previousStart - currentStart) / (1000 * 60 * 60 * 24);
  }

  const averageCycleLength = totalCycleLength / (periods.length - 1);
  const lastPeriodStart = new Date(periods[0].startDate);
  const nextStart = new Date(lastPeriodStart.getTime() + averageCycleLength * 24 * 60 * 60 * 1000);

  return formatDate(nextStart);
}

export function renderPastPeriods() {
  const periods = getAllStoredPeriods();
  return periods.map((period) => {
    const start = new Date(period.startDate);
    const end = new Date(period.endDate);
    const length = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    return `From ${formatDate(period.startDate)} to ${formatDate(period.endDate)} (${length.toFixed(1)} days)`;
  });
}

function checkDatesInvalid(startDate, endDate) {
  return !startDate || !endDate || new Date(startDate) > new Date(endDate);
}

export function handleSubmit(startDate, endDate) {
  if (!checkDatesInvalid(startDate, endDate)) {
    const { cycleLength, nextPeriodStart } = storeNewPeriod(startDate, endDate);
    const result = `Start Date: ${startDate}, End Date: ${endDate}, Cycle Length: ${cycleLength.toFixed(1)} days`;
    return { result, nextPeriodStart, success: true };
  } else {
    return { result: "Invalid dates! Please check your input.", success: false };
  }
}