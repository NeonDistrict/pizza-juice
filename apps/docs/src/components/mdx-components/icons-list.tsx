import React from 'react';

import {
  Box,
  Flex,
  Grid,
  Text,
  useClipboard,
  toast,
  InfoSolid,
  InfoOutline,
  FlagSolid,
  Close,
  CloseSolid,
  CheckSolid,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Eye,
  EyeSlash,
  FaceSad,
  Star,
  CaretRight,
  ToastContainer,
} from '@blockadegames/pizza-juice';

const iconList = {
  InfoSolid,
  InfoOutline,
  FlagSolid,
  Close,
  CloseSolid,
  CheckSolid,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Eye,
  EyeSlash,
  FaceSad,
  Star,
  CaretRight
};

export const IconsList = () => {
  return (
    <Grid
      gap={5}
      css={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        mt: '$7',
      }}
    >
      {Object.keys(iconList).map((key, i) => {
        const Icon = iconList[key];
        const { onCopy } = useClipboard(`<${key} />`);

        const onCopyIcon = () => {
          onCopy();

          toast({
            title: 'Icon copied',
            position: 'bottom-center',
            message: `<${key} /> copied to clipboard`,
            type: 'success',
            closeOnClick:true
          });
        };

        return (
          <Box
            as="button"
            key={i}
            onClick={() => onCopyIcon()}
            css={{
              fontFamily: 'inherit',
              cursor: 'pointer',
              textAlign: 'center',
              variant: 'outline',
              flexDir: 'column',
              justify: 'center',
              pt: 9,
              pb: 9,
            }}
          >
            <Flex
              justify="center"
              css={{
                svg: { size: 30 },
              }}
            >
              <Icon />
            </Flex>

            <Text
              as="span"
              size="sm"
              weight="medium"
              textAlign="center"
              css={{ mt: '$2' }}
            >
              {key}
            </Text>
          </Box>
        );
      })}

      <ToastContainer />
    </Grid>
  );
};
