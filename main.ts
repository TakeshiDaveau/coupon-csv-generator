import { writeFileSync, readFileSync } from 'fs';

const couponSets = JSON.parse(
  readFileSync('./source.json', { encoding: 'utf-8' })
);

const numberOfCouponCodeByBase = 20;

const addZero = (value: number): string => {
  if (value < 10) {
    return `00${value}`;
  } else if (value < 100) {
    return `0${value}`;
  }
  return `${value}`;
};

const main = () => {
  const couponCodes = Array.from(Array(numberOfCouponCodeByBase).keys()).map(
    (value, index: number) => addZero(index + 1)
  );
  for (const { coupon_set_id, base } of couponSets) {
    if (base === '') {
      continue;
    }

    const file = couponCodes.map((value) => `${base}${value}`).join('\n');
    writeFileSync(`./tmp/${coupon_set_id}.csv`, file);
  }
};

main();
