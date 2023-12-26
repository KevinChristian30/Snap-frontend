import type { Metadata } from "next";
import "./globals.css";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import poppins from "@/theme/font";
import NextTopLoader from "nextjs-toploader";
import { colorPrimary } from "@/constants/colors";
import { ReduxProvider } from "@/redux/provider";

export const metadata: Metadata = {
  title: "Snap",
  description: "Social Networking App.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>
          <StyledComponentsRegistry>
            <ConfigProvider theme={theme}>
              <NextTopLoader color={colorPrimary} />
              <div className="max-w-screen min-h-screen">{children}</div>
            </ConfigProvider>
          </StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
