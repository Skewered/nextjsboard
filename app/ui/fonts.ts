import { Montserrat, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

// 변수형 폰트.
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

// 변수형이 아닌 경우
// Lusitana 는 weight 값이 필수값이다.
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// 로컬폰트
// export const pretendard = localFont({
//   src: [
//     { path: '../../public/fonts/Pretendard-Regular.woff', weight: '400' },
//     { path: '../../public/fonts/Pretendard-Medium.woff', weight: '500' },
//     { path: '../../public/fonts/Pretendard-Bold.woff', weight: '700' },
//   ],
//   display: 'swap',
// });
