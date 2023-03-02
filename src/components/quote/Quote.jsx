import { styled } from 'stitches.config';

const Wrapper = styled('figure', {
  d: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 12,
  p: 32,
  br: '$xl',
  background: 'linear-gradient(45deg, $primary7, $primary9)',
  color: '$gray1',
});

const BlockQuote = styled('blockquote', {
  fs: '$3xl',
  fontStyle: 'italic',
  fw: '$medium',
  lh: '$xs',
  ls: '$sm',
  ta: 'center',

  '&:before': { content: 'open-quote' },
  '&:after': { content: 'close-quote' },
});

const Author = styled('figcaption', {
  fontStyle: 'italic',
  fw: '$medium',
  '&:before': { content: '\\2013' },
});

export const Quote = ({ quote, author }) => {
  return (
    <Wrapper>
      <BlockQuote>{` ${quote} `}</BlockQuote>
      <Author>{` ${author}`}</Author>
    </Wrapper>
  );
};
