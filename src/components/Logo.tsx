import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  xs: string,
  md: string,
  src: string,
  height: number,
  width: number,
}
const Logo = ({ xs, md, src, height, width }: LogoProps) => {
  return (
    <Box
      sx={{
        display: { xs: xs, md: md },
        mr: 1,
        minWidth: 40,
      }}
    >
      <Link href="/">
        <Image src={src} width={width} height={height} alt="Logo" />
      </Link>
    </Box>
  );
};

export default Logo;
