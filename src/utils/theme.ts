import type {ThemeConfig} from 'antd';
const colors = {
  text: {
    dark: '#20272E',
  },
  black: '#191927',
  white: '#FFFFFF',
  main: '#3843ED',
  primary: {
    main: '#4E5AF2',
    dark: '#3843ED',
    light: '#5E6BF6',
    extraLight: '#DCDEFC',
  },
  secondary: {
    dark: '#6D6BE5',
    extraLight: '#EDF2FF',
  },
  grey: {
    dark: '#6D7895',
    main: '#8D97B0',
    light: '#D2D8E8',
  },
  success: {
    light: '#84DF88',
    dark: '#58C65C',
  },
  form: {
    stroke: '#CBD5E2',
  },
};

export const config: ThemeConfig = {
  token: {
    colorBgLayout: 'transparent',
    colorPrimaryText: colors.text.dark,
    fontSize: 12,
    fontSizeHeading1: 36,
    fontSizeHeading2: 24,
    fontSizeHeading3: 18,
    paddingLG: 24,
    padding: 12,
    colorPrimary: colors.primary.main,
  },
  components: {
    Dropdown: {
      borderRadius: 16,
    },
    Button: {
      borderRadius: 20,
      paddingContentHorizontal: 24,
      colorPrimary: colors.primary.main,
      colorPrimaryBg: colors.white,
      colorPrimaryBgHover: colors.main,
      colorPrimaryBorder: colors.primary.main,
      colorPrimaryActive: colors.primary.dark,
      colorPrimaryTextActive: colors.white,
      colorPrimaryBorderHover: colors.main,
      colorText: colors.primary.main,
      colorPrimaryHover: colors.main,
      colorBgContainer: 'transparent',
    },
    Layout: {
      colorBgHeader: 'transparent',
      colorBgBody: 'transparent',
    },
    Divider: {
      colorTextHeading: colors.grey.light,
    },
    List: {
      colorText: colors.white,
    },
    Modal: {},
    Form: {
      colorTextLabel: colors.text.dark,
    },
    Input: {
      colorBgContainerDisabled: colors.primary.extraLight,
      borderRadius: 4,
      colorSuccessBorder: colors.primary.main,
      colorBorder: colors.form.stroke,
      padding: 8,
      colorTextPlaceholder: colors.grey.main,
    },
  },
};
