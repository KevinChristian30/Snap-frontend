import { colorPrimary } from '@/constants/colors';
import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorLink: colorPrimary,
    colorPrimary: colorPrimary,
    colorText: "black",
    colorTextHeading: "black",
    colorTextDescription: colorPrimary
  },
};

export default theme;