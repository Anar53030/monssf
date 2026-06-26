// const RootLayout = ({ children }: { children: React.ReactNode }) => {
//   return children;
// };

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "mongolia",
  description:
    "Хамтрагч байгууллагууд. Sport. Холбоо барих. Холбогдох дугаар: 311947; Факс: 324050; monssf@mongolnet.mn. Хаяг. Спортын төв ордон, 304 тоот өрөө, Бага тойруу – ...",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children as any;
}
