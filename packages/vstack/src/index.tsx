// import { HTMLAttributes } from 'react';

// import styled, { DefaultTheme } from '@neon-district/system';

// export type VStackProps = {
//   spacing?: keyof DefaultTheme['spaces'];
//   direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
// } & HTMLAttributes<HTMLDivElement>;

// const directions = (
//   theme: DefaultTheme,
//   spacing: keyof DefaultTheme['spaces']
// ) => {
//   const space = theme.spaces[spacing];

//   const childWithGap = '> * + *';

//   return {
//     row: {
//       flexDirection: 'row',
//       [childWithGap]: {
//         marginLeft: space
//       }
//     },
//     column: {
//       flexDirection: 'column',
//       [childWithGap]: {
//         marginTop: space
//       }
//     },
//     'row-reverse': {
//       flexDirection: 'row-reverse',
//       [childWithGap]: {
//         merginRight: space
//       }
//     },
//     'column-reverse': {
//       flexDirection: 'column-reverse',
//       [childWithGap]: {
//         marginBottom: space
//       }
//     }
//   };
// };

// const VStack = styled.div<VStackProps>(
//   ({ theme, spacing = 0, direction = 'row' }) => ({
//     display: 'flex',

//     ...(direction && directions(theme, spacing)[direction!])
//   })
// );

// export default VStack;
