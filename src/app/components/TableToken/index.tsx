import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useTokenList } from '@/app/api/getTokenList';
import { usePriceChangeList } from '@/app/api/getPriceChangeList';
import NumberBaseFormatter from '@/app/configs/helper/price';
import IconToken from '../IconToken';
import { ButtonBuy, GainLossValueWrapper } from './styled';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box } from '@mui/material';
interface ITokenListBody {
  currencyGroup: string;
  currencySymbol: string;
  logo: string;
  name: string;
}
interface ITokenPriceBody {
  pair: string;
  latestPrice: string;
  day: string;
  week: string;
  month: string;
  year: string;
}
interface ITokenListWithPrice {
  color: string;
  currencyGroup: string;
  currencySymbol: string;
  logo: string;
  name: string;
  pair: string;
  latestPrice: string;
  day: string;
  week: string;
  month: string;
  year: string;
}

export default function TableToken() {
  const { refetch: fetchTokenList, data: tokenList } = useTokenList();
  const { refetch: fetchPriceTokenList, data: priceTokenList } =
    usePriceChangeList();

  useEffect(() => {
    fetchTokenList();
    fetchPriceTokenList();
  }, []);

  const gainLossHandler = (value: string) => {
    if (value?.includes('-')) {
      return (
        <GainLossValueWrapper color={'#e54040'}>
          <ArrowDropDownIcon />
          {value?.replace('-', '')}%
        </GainLossValueWrapper>
      );
    } else {
      return (
        <GainLossValueWrapper color={'#25a764'}>
          <ArrowDropUpIcon />
          {value?.replace('-', '')}%
        </GainLossValueWrapper>
      );
    }
  };
  const tokenListWithPrice = tokenList?.payload.map((row: ITokenListBody) => {
    const match = priceTokenList?.payload.find(
      (row2: ITokenPriceBody) =>
        row2?.pair?.match(/^[^/]*/)?.[0] === row?.currencySymbol.toLowerCase()
    );
    return { ...row, ...match };
  });

  return (
    <TableContainer
      component={Paper}
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '5px',
        maxWidth: 950,
        margin: '20px auto',
      }}
    >
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">CRYPTO</TableCell>
            <TableCell component="th" scope="row" align="center">
              HARGA
            </TableCell>
            <TableCell component="th" scope="row" align="center">
              24 JAM
            </TableCell>
            <TableCell component="th" scope="row" align="center">
              1 MGG
            </TableCell>
            <TableCell component="th" scope="row" align="center">
              1 BLN
            </TableCell>
            <TableCell component="th" scope="row" align="center">
              1 THN
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        {tokenList && priceTokenList && tokenListWithPrice && (
          <TableBody>
            {tokenListWithPrice?.map(
              (row: ITokenListWithPrice, index: number) => {
                if (row.currencyGroup !== 'IDR') {
                  return (
                    <TableRow
                      key={index}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        <IconToken imageUrl={row.logo} color={row.color} />
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        <Box sx={{ fontWeight: 700, fontSize: 16 }}>
                          {row.name}
                        </Box>
                        <Box sx={{ fontSize: 16 }}>{row.currencySymbol}</Box>
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        <Box
                          sx={{ fontWeight: 700, fontSize: 16, minWidth: 200 }}
                        >
                          Rp {NumberBaseFormatter(parseInt(row.latestPrice))}
                        </Box>
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        {gainLossHandler(row.day)}
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        {gainLossHandler(row.week)}
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        {gainLossHandler(row.month)}
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        {gainLossHandler(row.year)}
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        <ButtonBuy variant="contained">Beli</ButtonBuy>
                      </TableCell>
                    </TableRow>
                  );
                }
              }
            )}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}
