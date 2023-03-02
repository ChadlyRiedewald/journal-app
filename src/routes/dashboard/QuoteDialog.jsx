import { useEffect, useState } from 'react';
import axios from 'axios';
import * as Dialog from '@radix-ui/react-dialog';
import { styled } from 'stitches.config';
import { DialogContent, DialogOverlay } from 'components/dialog';
import { CloseButton } from 'components/buttons';
import { Flex } from 'components/layout';
import { FeaturedIcon } from 'components/featuredIcon';
import { Heading } from 'components/typography';
import { Quote } from 'components/quote';
import { navLink } from './NavLink';
import { ReactComponent as QuoteIcon } from 'assets/icons/stars-03.svg';

const Trigger = styled(Dialog.Trigger, { ...navLink });

export const QuoteDialog = () => {
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
        <QuoteIcon />
        Quote of the day
      </Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent aria-describedby={undefined}>
          <Dialog.Close asChild>
            <CloseButton css={{ pos: 'absolute', right: 16, top: 16 }} />
          </Dialog.Close>
          <Flex
            css={{ gap: '$4', w: '$full' }}
            direction="column"
            align="center"
          >
            <FeaturedIcon icon={<QuoteIcon />} />
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
                  Quote of the day
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
