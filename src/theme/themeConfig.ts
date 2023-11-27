import type { ThemeConfig } from 'antd';

const constants = {
    colorPrimary: '#9400FF',
    colorPrimaryVariant: '#5D12D2'
}

const theme: ThemeConfig = {
    token: {
        colorLink: constants.colorPrimary,
        colorPrimary: constants.colorPrimary,
    },
};

export default theme;