# Coupon CSV Generator

This repository allow you to generate coupon set CSV for multiple coupon code.

It uses a **base generator** and add `001` till the upper limit.

For exemple if my upper limit is `4` and my base is `base` it will generate a file with this content :

```
base001
base002
base003
base004
```

The file will be named with the value in `coupon_set_id`, suffixed by `.csv`.

## Installation

```sh
yarn install
```

## Launch

* Add a `source.json` composed by an array of item : `{coupon_set_id: string, base: string}`
* Launch the script `yarn generate`


### Example of source.json

```
[
  {
    "coupon_set_id": "PS_AGENCY1_CS_001",
    "base": "psm_22_agency1"
  },
  {
    "coupon_set_id": "PS_AGENCY2_CS_001",
    "base": "psm_22_agency2"
  },
]
```