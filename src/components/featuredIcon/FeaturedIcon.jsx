import { styled } from 'stitches.config';

const Wrapper = styled('div', {
  br: '$full',
  d: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderStyle: 'solid',
  size: 64,
  borderWidth: 10,
  color: '$primary11',
  bgColor: '$primary5',
  borderColor: '$primary3',
});

export const FeaturedIcon = ({ icon }) => {
  return <Wrapper>{icon}</Wrapper>;
};
