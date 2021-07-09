export const users = [
  { FullName: "Ganu", UserId: 147 },
  { FullName: "Manju", UserId: 258 },
  { FullName: "Pavan", UserId: 369 },
  { FullName: "Puni", UserId: 456 },
  { FullName: "Santhu", UserId: 789 },
];

export const MutualFunds = {
  QuantActiveFund: "Quant Active Fund",
  QuantSmallCapFund: "Quant Small Cap Fund",
};

export const MutualFundsSchemeCodes = [
  {
    FundName: MutualFunds.QuantActiveFund,
    SchemeCode: 120823,
  },
  {
    FundName: MutualFunds.QuantSmallCapFund,
    SchemeCode: 120828,
  },
];

export const ContributionDetails = [
  {
    ContributionDate: "01/01/2021",
    Contributors: [
      {
        Contributor: users[0],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[1],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[2],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[3],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[4],
        ContributionAmount: 1000,
      },
    ],
  },
  {
    ContributionDate: "01/02/2021",
    Contributors: [
      {
        Contributor: users[0],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[1],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[2],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[3],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[4],
        ContributionAmount: 1000,
      },
    ],
  },
  {
    ContributionDate: "01/03/2021",
    Contributors: [
      {
        Contributor: users[0],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[1],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[2],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[3],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[4],
        ContributionAmount: 1000,
      },
    ],
  },
  {
    ContributionDate: "01/04/2021",
    Contributors: [
      {
        Contributor: users[0],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[1],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[2],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[3],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[4],
        ContributionAmount: 1000,
      },
    ],
  },
  {
    ContributionDate: "01/05/2021",
    Contributors: [
      {
        Contributor: users[0],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[1],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[2],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[3],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[4],
        ContributionAmount: 1000,
      },
    ],
  },
  {
    ContributionDate: "01/06/2021",
    Contributors: [
      {
        Contributor: users[0],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[1],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[2],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[3],
        ContributionAmount: 1000,
      },
      {
        Contributor: users[4],
        ContributionAmount: 1000,
      },
    ],
  },
];

export const InvestmentDetails = {
  responseStatus: 200,
  responseData: [
    {
      InvestmentCategory: "MutualFund",
      FundName: MutualFunds.QuantActiveFund,
      SchemeCode: 120823,
      InvestedOn: "26/04/2021",
      InvestedAmount: 20000,
      FolioNumber: "5103843783",
      Units: 61.15,
      PurchasedNav: 327.05,
      InvestedBy: "Pavan",
      CurrentNav: 0,
      CurrentValue: 0,
      CurrentGain: 0,
    },
    {
      InvestmentCategory: "MutualFund",
      FundName: MutualFunds.QuantActiveFund,
      SchemeCode: 120823,
      InvestedOn: "07/05/2021",
      InvestedAmount: 5000,
      FolioNumber: "5104050426",
      Units: 14.044,
      PurchasedNav: 356.0139,
      InvestedBy: "Manju",
      CurrentNav: 0,
      CurrentValue: 0,
      CurrentGain: 0,
    },
    {
      InvestmentCategory: "MutualFund",
      FundName: MutualFunds.QuantSmallCapFund,
      SchemeCode: 120828,
      InvestedOn: "08/06/2021",
      InvestedAmount: 5000,
      FolioNumber: "5104050426",
      Units: 44.664,
      PurchasedNav: 111.9424,
      InvestedBy: "Manju",
      CurrentNav: 0,
      CurrentValue: 0,
      CurrentGain: 0,
    },
  ],
};
