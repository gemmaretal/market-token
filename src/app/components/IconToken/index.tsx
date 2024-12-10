import { Box, styled } from '@mui/material';

type IImageProps = {
  color?: string;
  imageurl?: string;
};
export const ProductImage = styled(Box)<IImageProps>(
  ({ color = '', imageurl = '' }) => ({
    svg: { color: color },
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '42px',
    height: '42px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundImage: `url(${imageurl})`,
    backgroundRepeat: 'no-repeat',
  })
);
interface IPropsIconToken {
  imageUrl: string;
  color: string;
}
export default function IconToken({ imageUrl, color }: IPropsIconToken) {
  return <ProductImage color={color} imageurl={imageUrl}></ProductImage>;
}
