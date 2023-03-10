import { useEffect, useState } from 'react';
import axios from 'axios';
import * as Dialog from '@radix-ui/react-dialog';
import { styled } from 'stitches.config';
import { DialogClose, DialogContent, DialogOverlay } from 'components/dialog';
import { Flex } from 'components/layout';
import { FeaturedIcon } from 'components/featuredIcon';
import { Heading } from 'components/typography';
import { Quote } from 'components/quote';
import { navLink } from './NavLink';
import { ReactComponent as RandomQuoteIcon } from 'assets/icons/shuffle-01.svg';

const Trigger = styled(Dialog.Trigger, { ...navLink });

export const RandomQuote = () => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      const response = await axios.get('https://api.goprogram.ai/inspiration');
      setResults(response.data);
      setError(null);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <Dialog.Root>
      <Trigger>
        <RandomQuoteIcon />
        Random Quote
      </Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent aria-describedby={undefined}>
          <DialogClose />
          <Flex
            css={{ gap: '$4', w: '$full' }}
            direction="column"
            align="center"
          >
            <FeaturedIcon icon={<RandomQuoteIcon />} />
            <Flex
              direction="column"
              align="center"
              css={{
                gap: '$1',
                maxW: '$fit',
                textAlign: 'center',
              }}
            >
              <Dialog.Title asChild>
                <Heading
                  size={{ '@initial': 'xs', '@tablet': 'sm' }}
                  weight="semibold"
                  color="gray12"
                >
                  Random Quote
                </Heading>
              </Dialog.Title>
            </Flex>
          </Flex>
          <Quote quote={results?.quote} author={results?.author} />
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
