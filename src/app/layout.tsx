import type { Metadata } from "next";
import './globals.css';
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import poppins from "@/theme/font";

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
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>
            <div className="min-h-screen max-w-screen">{children}</div>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
