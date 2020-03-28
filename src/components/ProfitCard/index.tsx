
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { currency } from '../../services/currency';
import { percent } from '../../services/dataset';
import useExternalStyles from '../../styles/global';

const useStyles = makeStyles({
  title: {
    marginBottom: 20,
  },
  rightText: {
    textAlign: 'right',
  },
  greenText: {
    color: '#4CAF50',
    fontWeight: 500,
  },
  redText: {
    color: '#f44336',
  },
  orangeText: {
    color: 'orange',
  },
  secondaryText: {
    color: '#43425d',
    fontSize: 14,
    marginBottom: 20,
  },
  panelProfit: {
    background: 'floralwhite',
  },
});

interface Props {
  title: string
  investment: number
  profitpercent: number
  profit: number
  description?: string
}

export default function ProfitCard({ title, investment, profitpercent, profit, description }: Props) {
  const classes = useStyles();
  const externalClasses = useExternalStyles();

  const investmentColor = clsx(classes.rightText, classes.orangeText);
  const positiveProfit = clsx(classes.rightText, classes.greenText);
  const negativeProfit = clsx(classes.rightText, classes.redText);
  const positiveTotalProfit = clsx(classes.rightText, classes.greenText);
  const negativeTotalProfit = clsx(classes.rightText, classes.redText);
  const dateText = clsx(classes.rightText, classes.secondaryText);

  const profitPaper = clsx(externalClasses.paper, classes.panelProfit);

  return (
    <Paper className={profitPaper}>

      <Typography
        component="h2"
        variant="h6"
        gutterBottom
        color="primary"
        className={classes.title}
      >
        {title}
      </Typography>
      <Typography
        component="p"
        variant="h4"
        className={investmentColor}
      >
        {currency(investment)}

      </Typography>

      <Typography color="textSecondary" className={dateText}>
        Valor total investido
      </Typography>

      <Typography
        component="p"
        variant="h4"
        className={profitpercent < 0 ? negativeProfit : positiveProfit}
      >
        {percent(profitpercent)}
      </Typography>

      <Typography color="textSecondary" className={dateText}>
        Rentabilidade acumulada
      </Typography>

      <Typography
        component="p"
        variant="h4"
        className={profit >= investment ? positiveTotalProfit : negativeTotalProfit}
      >
        {currency(profit)}

      </Typography>

      <Typography color="textSecondary" className={dateText}>
        Valor total hoje
      </Typography>

    </Paper>
  );
}
