import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "@/assets/theme/theme";
import FullLayout from "@/assets/layouts/FullLayout";
import createEmotionCache from "@/assets/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

export const VendorLayout = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <FullLayout>{children}</FullLayout>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};
